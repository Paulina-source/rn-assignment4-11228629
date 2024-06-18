import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const login = ({navigation}) => {
  const [name, setName]=useState('');
  const [email, setEmail] = useState('');

  const handlelogin =() => {
    navigation.navigate('Home');
  }
};

return (
  <View>
    <Text>Email:</Text>
    <TextInput
      value={email}
      onChangeText={text => setEmail(text)}
    />
    <Text>Password:</Text>
    <TextInput
      value={password}
      onChangeText={text => setPassword(text)}
      secureTextEntry
    />
    <Button title="Login" onPress={handleLogin} />
  </View>
);


export default Login;