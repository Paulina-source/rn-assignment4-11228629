import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

const Footer = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 16 }}>
      <TouchableOpacity onPress={() => console.log('Apple icon pressed')}>
        <Image source={require('./assets/apple.jpeg')} style={{ width: 32, height: 32, marginHorizontal: 8 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Google icon pressed')}>
        <Image source={require('./assets/googlen.jpeg')} style={{ width: 32, height: 32, marginHorizontal: 8 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Facebook icon pressed')}>
        <Image source={require('./assets/facebookn.jpeg')} style={{ width: 32, height: 32, marginHorizontal: 8 }} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;