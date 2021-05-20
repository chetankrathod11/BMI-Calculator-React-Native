import React from 'react';
import {Text, View, Image} from 'react-native';

const Images = props => {
  return (
    <View>
      <Image
        source={require('./components/img/menu.png')}
        style={{width: 25, height: 25}}
      />
    </View>
  );
};
