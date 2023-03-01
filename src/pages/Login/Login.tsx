import Logo from '../../components/common/Logo/Logo';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/common/Button/Button';
import Input from '../../components/common/Input/Input';
import { TextInput } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';
import { ECheckBox } from '../../interfaces/ECheckBox';

const Login = () => {
  const [icon, setIcon] = useState('eye-off');
  const [status, setStatus] = useState(ECheckBox.UNCHECKED);
  const [hidePassword, setHidePassword] = useState(true);

  const changeIcon = () => {
    icon !== 'eye-off'
      ? (setIcon('eye-off'), setHidePassword(false))
      : (setIcon('eye'), setHidePassword(true));
  };
  const changeStatus = () => {
    status !== ECheckBox.UNCHECKED
      ? setStatus(ECheckBox.UNCHECKED)
      : setStatus(ECheckBox.CHECKED);
  };
  return (
    <ImageBackground
      source={require('../../assets/images/background/background-login.png')}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.container}>
        <Logo />
        <View style={styles.form}>
          <Input
            label="Email or Username"
            returnKeyType="next"
            autoCapitalize="none"
            autoComplete="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            outlineColor="#5b54bf"
            style={styles.input_username}
            outlineStyle={{ borderRadius: 12 }}
          />
          <TextInput
            style={styles.input_password}
            label="Password"
            secureTextEntry={hidePassword}
            underlineColor="transparent"
            mode="outlined"
            outlineColor="#5b54bf"
            activeUnderlineColor="#5b54bf"
            outlineStyle={{ borderRadius: 12 }}
            right={<TextInput.Icon onPress={() => changeIcon()} icon={icon} />}
          />
          <Checkbox.Item
            color="#7269ef"
            status={status}
            label="Remember Password"
            labelStyle={{ color: '#fff' }}
            uncheckedColor="#5b54bf"
            onPress={() => changeStatus()}
          />
          <Text style={styles.text_forgot_password}>Forgot password?</Text>
          <Button style={styles.btn_login}>
            <Text style={styles.text_login}>Log in</Text>
          </Button>
          <Text style={styles.text_question}>Don't have an account?<Text style={styles.text_signup}> Signup now</Text></Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  container: {
    margin: 30,
    alignItems: 'center',
  },
  form: {
    alignItems: 'center',
    borderRadius: 10,
    padding: 16,
  },
  text_login: {
    fontSize: 15,
    lineHeight: 26,
    color: '#fff',
  },
  btn_login: {
    width: 250,
  },
  input_username: {
    width: 250,
    borderRadius: 40,
  },
  input_password: {
    width: 250,
    borderRadius: 40,
  },
  text_forgot_password: {
    color: '#fff',
  },
  text_question: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 26,
  },
  text_signup: {
    color: "#7269ef"
  }
});
export default Login;
