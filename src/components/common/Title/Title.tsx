import React from 'react';
import { Title as PaperTitle } from 'react-native-paper';

type Props = React.ComponentProps<typeof PaperTitle>;

const Title= ({ children, ...props }: Props) => {
  return (
    <Title
      {...props}
    >
      {children}
    </Title>
  );
};
export default Title;
