import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Link } from 'react-router-native';
import Button from '../../components/common/Button/Button';
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require('../../assets/images/background/Illustration.png')}
        />
        <Text style={styles.text}>
          Connect easily with {'\n'} your family and friends over countries
        </Text>
      </View>
      <Link to={'/Login'}>
        <Button>
          <Text style={styles.text_login}>Start Messaging</Text>
        </Button>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 330,
    gap: 120,
  },
  top: {
    alignItems: 'center',
    gap: 60,
    textAlign: 'center',
  },
  text: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center',
    color: '#0F1828',
    width: 280
  },
  text_login: {
    fontSize: 15,
    lineHeight: 26,
    color: '#fff',
  }
});
export default Home;
