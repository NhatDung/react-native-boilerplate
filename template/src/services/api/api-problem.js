/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
export function getGeneralApiProblem(response) {
  switch (response.problem) {
    case 'CONNECTION_ERROR':
      return {kind: 'cannot-connect', temporary: true};
    case 'NETWORK_ERROR':
      return {kind: 'cannot-connect', temporary: true};
    case 'TIMEOUT_ERROR':
      return {kind: 'timeout', temporary: true};
    case 'SERVER_ERROR':
      return {kind: 'server'};
    case 'UNKNOWN_ERROR':
      return {kind: 'unknown', temporary: true};
    case 'CLIENT_ERROR':
      switch (response.status) {
        case 401:
          return {
            kind: 'unauthorized',
            errorMessage: response.data.errorMessage,
          };
        case 403:
          return {kind: 'forbidden'};
        case 404:
          return {kind: 'not-found'};
        default:
          return {
            kind: 'rejected',
            errorMessage: response.data.errorMessage,
          };
      }
    case 'CANCEL_ERROR':
      return null;
  }

  return null;
}
