import { Dimensions, Platform, StatusBar } from 'react-native';

export default function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812)
  );
}

export const paddingTop = isIphoneX() ? 88 : 44;
export const paddingBottom = isIphoneX() ? 34 : 0;
