import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

type Props = React.ComponentProps<typeof TextInput>;

const Input = ({ ...props }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    width: 250,
  },
});
export default Input;
