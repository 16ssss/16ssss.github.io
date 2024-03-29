const CharacterImage = function ({ type, setIsDownloadImg }) {
  return (
    <img
      src={
        process.env.PUBLIC_URL + `/characters/${type.toLowerCase()}_white.png`
      }
      sx={{ objectFit: 'scale-down' }}
      alt={`character images`}
      onLoad={() => {
        setIsDownloadImg(true);
      }}
    />
  );
};

export default CharacterImage;
