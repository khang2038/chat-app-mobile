import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
const Logo = () => {
  return (
    <Link to="/">
      <View>
        <Image
          source={{
            uri: 'https://github.com/khang2038/chat-app-mobile/blob/master/src/assets/images/Logo/logo.png',
          }}
          style={styles.image}
        />
        <Text>RVK Chat App</Text>
      </View>
    </Link>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 128,
    height: 128,
    marginBottom: 12,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});
export default Logo;
