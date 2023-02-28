import React from 'react'
import { Avatar as AAvatar } from "react-native-paper";

interface IAvatarProps {
  path?: string | null;
  username?: string;
  imgWidth: number;
  className?: string;
}

const Avatar: React.FC<IAvatarProps>= ({path,
  username,
  imgWidth}) => {
  if(path)
  return (
    <AAvatar.Image
    size={imgWidth}
    source={{
        uri: path as string,
    }}
    >
    </AAvatar.Image>
  )
  return (
    <AAvatar.Text
    size={imgWidth} label={username as string}
    >
    </AAvatar.Text>
  )
}

export default Avatar