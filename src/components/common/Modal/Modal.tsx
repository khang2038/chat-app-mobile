import React from 'react';
import { StyleSheet } from 'react-native';
import { Modal as AModal, Portal, Provider } from 'react-native-paper';

type Props = React.ComponentProps<typeof AModal>;

const Modal = ({contentContainerStyle, children, ...props }: Props) => {
  return (
    <Provider>
      <Portal>
        <AModal style={styles.ModalContainer} contentContainerStyle={contentContainerStyle} {...props} >
           {children}
        </AModal>
      </Portal>
    </Provider>
  )
}

const styles = StyleSheet.create({
  ModalContainer: {
    width:'100%',
    height:'100%',
    alignItems:'center'
  },
});

export default Modal