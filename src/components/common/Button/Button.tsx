import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

type Props = React.ComponentProps<typeof PaperButton>;

const Button = ({ mode, style, children, ...props }: Props) => {
  return (
    <PaperButton
      style={[styles.button, style]}
      labelStyle={styles.text}
      {...props}
    >
      {children}
    </PaperButton>
  );
};
const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    backgroundColor:  '#7269ef',
    borderColor: '#5b54bf',
    borderRadius: 40,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});
export default Button;
