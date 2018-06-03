import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image } from 'react-native';
import Assets from '../Assets';

import * as Animatable from 'react-native-animatable';

export default (UpgradeIcon = props => (
  <Animatable.Image
    iterationCount="infinite"
    animation={'jello'}
    duration={2000}
    iterationDelay={Math.random() * 1000}
    useNativeDriver={false}
    {...props}
    source={Assets.images.arrow['green.png']}
  />
));

// <Ionicons size={32} color="#ACFA76" {...props} name="md-star" />
