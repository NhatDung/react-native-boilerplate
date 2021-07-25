import {useMutation, useQueryClient} from 'react-query';
import {postComment} from '@/services';

export function usePostComment(queryKey) {
  const queryClient = useQueryClient();
  const addComment = useMutation(body => postComment(body), {
    onMutate: async body => {
      await queryClient.cancelQueries(queryKey);

      const previousValue = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, old => ({
        ...old,
        body,
      }));

      return previousValue;
    },
    onError: (err, variables, previousValue) =>
      queryClient.setQueryData(queryKey, previousValue),
    onSettled: async () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  return {
    addComment,
  };
}
