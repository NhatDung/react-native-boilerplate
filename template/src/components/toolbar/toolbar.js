import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';
import {goBack} from '@/navigation';

export function ToolBar(props) {
  const {
    LeftComponent,
    title,
    CenterComponent,
    right,
    RightComponent,
    handleGoBack,
    bgToolBar,
    styleCenter,
    hiddenBack,
  } = props;

  const handleBackPress = () => {
    if (handleGoBack) {
      return handleGoBack;
    }
    goBack();
  };

  return (
    <View style={[styles.toolBarContainer, bgToolBar]}>
      <View style={styles.leftToolBar}>
        {LeftComponent ||
          (!hiddenBack && (
            <TouchableOpacity
              onPress={handleBackPress}
              hitSlop={styles.hitSlopButton}>
              <Ionicons name={'chevron-back'} size={28} color={'black'} />
            </TouchableOpacity>
          ))}
      </View>
      <View style={styles.centerToolBar}>
        {title ? (
          <Text style={[styles.title, styleCenter]}>{title}</Text>
        ) : (
          CenterComponent
        )}
      </View>
      <View style={styles.rightToolBar}>
        {right ? <Text>{right}</Text> : RightComponent}
      </View>
    </View>
  );
}
