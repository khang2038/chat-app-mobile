import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'react-router-native';
import Button from '../../components/common/Button/Button';
const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link to={'/Login'}>
        <Button>
          <Text style={styles.text_login}>Log in</Text>
        </Button>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text_login: {
    fontSize: 15,
    lineHeight: 26,
    color: '#fff',
  },
});
export default Home;
