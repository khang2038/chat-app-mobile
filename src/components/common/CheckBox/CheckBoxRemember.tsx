import * as React from 'react';
import { Checkbox } from 'react-native-paper';

const CheckBoxRemember = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default CheckBoxRemember;