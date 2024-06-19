import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header1}>Jobizz</Text>
      <Text style={styles.header2}>Welcome back </Text>
      <Text style={styles.header3}>Let's login. Apply to jobs</Text>
      
    
    
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  header1: {
    fontSize: 24,
    fontWeight: 'bold',
    

  },
});

export default Header;
