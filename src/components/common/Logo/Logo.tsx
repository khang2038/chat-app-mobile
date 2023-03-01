import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
const Logo = () => {
  return (
    <Link to={'/'}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/Logo/logo.png')}
          style={styles.image}
        />
        <Text style={styles.text}>RVK Chat App</Text>
      </View>
    </Link>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 64,
    marginBottom: 12,
  },
  text: {
    margin: 16,
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    color: '#fff',
  },
});
export default Logo;
