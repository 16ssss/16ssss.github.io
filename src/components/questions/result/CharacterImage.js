import { useLayoutEffect } from 'react';

const CharacterImage = function ({ type }) {
  return (
    <img
      src={process.env.PUBLIC_URL + `/characters/${type}.png`}
      sx={{ objectFit: 'scale-down' }}
      alt={`character images`}
    />
  );
};

export default CharacterImage;
