import { Avatar, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const UMIAvatarList = function ({ title, avatars, color, rel }) {
  return (
    <>
      <Typography
        variant='h6'
        color={color}
      >
        {title}
      </Typography>
      <Grid2
        container
        marginTop={1}
      >
        {avatars.map((type, index) => (
          <Grid2
            xs={12 / 4}
            key={`umiAvartarList-Grid-${index}`}
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <Avatar
              alt={type.toLowerCase()}
              src={
                process.env.PUBLIC_URL +
                `/umi-relationship/${type.toLowerCase()}_${rel}.png`
              }
              sx={{ width: '100%', flex: '1', flexShrink: '0' }}
              key={`umiAvartarList-avtar-${index}`}
            />
            <Typography
              key={`umiAvartarList-typo-${index}`}
              align='center'
            >
              {type}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};

export default UMIAvatarList;
