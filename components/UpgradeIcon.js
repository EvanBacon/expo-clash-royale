import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image } from 'react-native';
import Assets from '../Assets';
export default (UpgradeIcon = props => (
  <Image {...props} source={Assets.images.arrow['green.png']} />
));

// <Ionicons size={32} color="#ACFA76" {...props} name="md-star" />
