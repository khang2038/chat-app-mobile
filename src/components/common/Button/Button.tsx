import React, { Children, ReactNode } from 'react';
import { Button as AButton } from '@ant-design/react-native';

interface IButtonProps {
  children: ReactNode;
}
const Button: React.FC<IButtonProps> = ({ children }) => {
  return (
    <AButton
      type="primary"
      style={{ backgroundColor: '#FFA500', borderRadius: 8 }}
    >
      {children}
    </AButton>
  );
};

export default Button;
