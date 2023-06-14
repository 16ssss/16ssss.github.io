import { useTheme } from '@emotion/react';
import { Divider, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import InfoUMI from './main/InfoUMI';

export default function Main() {
  const theme = useTheme();
  return (
    <Grid2
      container
      margin={2}
      gap={2}
      flex='1'
      flexShrink='0'
      display='flex'
      flexDirection='column'
      justifyContent='flex-start'
      position='relative'
    >
      <Grid2 xs={12}>
        <Typography variant='h4'>Sixteens</Typography>
      </Grid2>
      <Grid2>
        <Divider
          sx={{
            borderColor: theme.palette.primary.gray,
            borderWidth: 2,
            borderRadius: 10,
          }}
        />
      </Grid2>
      <Grid2 xs={12}>
        <InfoUMI />
      </Grid2>
    </Grid2>
  );
}
