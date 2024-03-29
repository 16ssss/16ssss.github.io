import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TypeRatio = function ({ value, leftLabel, rightLabel, type }) {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: 36,
          backgroundColor: theme.palette.grey.A400,
          borderRadius: 2,
        }}
        display='flex'
        justifyContent={type === 'left' ? 'start' : 'end'}
        position='relative'
      >
        <Box
          sx={{
            width: `${value}%`,
            height: '100%',
            backgroundColor:
              type === 'left'
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
            borderRadius: 2,
          }}
        />
        {type === 'left' && (
          <>
            <Typography
              position='absolute'
              variant='h6'
              left={10}
              top='50%'
              color='white'
              sx={{ transform: 'translate(0%, -50%)' }}
            >
              {leftLabel}
            </Typography>
            <Typography
              position='absolute'
              variant='h6'
              top='50%'
              left={20}
              color='white'
              sx={{ transform: 'translate(50%, -50%)' }}
            >
              {`${value}%`}
            </Typography>
          </>
        )}

        {type === 'right' && (
          <>
            <Typography
              position='absolute'
              variant='h6'
              right={10}
              top='50%'
              color='white'
              sx={{ transform: 'translate(0%, -50%)' }}
            >
              {rightLabel}
            </Typography>
            <Typography
              position='absolute'
              variant='h6'
              top='50%'
              right={20}
              color='white'
              sx={{ transform: 'translate(-50%, -50%)' }}
            >
              {`${value}%`}
            </Typography>
          </>
        )}
      </Box>
    </>
  );
};

export default TypeRatio;
