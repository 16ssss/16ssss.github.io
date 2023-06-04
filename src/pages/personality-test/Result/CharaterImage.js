const CharacterImage = function ({ type, setIsDownloadImg }) {
  return (
    <img
      src={process.env.PUBLIC_URL + `/characters/${type}.png`}
      sx={{ objectFit: 'scale-down' }}
      alt={`character images`}
      onLoad={() => {
        // console.log('이미지 끝  ');
        setIsDownloadImg(true);
      }}
    />
  );
};

export default CharacterImage;
