import React, {
  useState,
  Fragment,
  useRef,
  useEffect,
  useLayoutEffect,
} from 'react';
import {ActivityIndicator, StyleSheet, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {color} from '@/theme';
import {ImagesSource} from '../../../assets';

const styles = StyleSheet.create({
  loading: {
    // @ts-ignore
    ...StyleSheet.absoluteFill,
    alignSelf: 'center',
  },
});

export function ImageView({
  source,
  style,
  resizeMode,
  fallback,
  isCorrectRatio = false,
  ...rest
}) {
  const [isLoadingImage, setLoadingImageState] = useState(false);
  const [isError, setIsError] = useState(false);
  const [ratio, setRatio] = useState(null);

  const mounted = useRef(false);

  const onLoadStart = () => setLoadingImageState(true);

  const onLoad = () => {
    setLoadingImageState(false);
  };

  const onError = () => {
    // Will set not found image
    setLoadingImageState(false);
    setIsError(true);
  };

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useLayoutEffect(() => {
    if (source && isCorrectRatio && mounted.current) {
      Image.getSize(source.uri, (srcWidth, srcHeight) => {
        const newRatio = srcWidth / srcHeight;
        setRatio(newRatio);
      });
    }
  }, [mounted.current]);

  return (
    <Fragment>
      <FastImage
        style={[style, !!ratio && {aspectRatio: ratio}]}
        source={isError ? ImagesSource.notFound : source}
        fallback={fallback}
        resizeMode={resizeMode}
        onError={onError}
        onLoadStart={onLoadStart}
        onLoad={onLoad}
        {...rest}
      />
      {isLoadingImage && (
        <ActivityIndicator style={styles.loading} color={color.primary} />
      )}
    </Fragment>
  );
}

ImageView.defaultProps = {
  fallback: false,
  resizeMode: 'stretch',
};
