import { Avatar, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const UMIAvatarList = function ({ title, avatars, color }) {
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
        gap={1}
      >
        {avatars.map((type, index) => (
          <Grid2
            xs='auto'
            key={`umiAvartarList-Grid-${index}`}
          >
            <Avatar
              alt={type.toLowerCase()}
              src={
                process.env.PUBLIC_URL +
                `/characters/${type.toLowerCase()}_white.png`
              }
              sx={{ width: 80, height: 80 }}
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
