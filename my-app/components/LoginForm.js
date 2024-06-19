import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';

const Login = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (name && email) {
      navigation.navigate('Home', { name, email });
    } else {
      alert('Please enter both name and email');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Login;
