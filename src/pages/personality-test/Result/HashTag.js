import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { personalitiesHashtag } from '../../../config';
import { Typography } from '@mui/material';

const HashTag = function ({ type }) {
  const hashtagList = personalitiesHashtag[type];
  return (
    <Grid2
      container
      gap={1}
      justifyContent='center'
    >
      {hashtagList.map((hashtag) => (
        <Typography
          fontSize='large'
          fontWeight='500'
          color='primary'
        >{`#${hashtag}`}</Typography>
      ))}
    </Grid2>
  );
};
export default HashTag;
