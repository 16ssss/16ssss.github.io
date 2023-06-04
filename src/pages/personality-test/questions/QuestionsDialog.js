import { useTheme } from '@emotion/react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
} from '@mui/material';
import { useState } from 'react';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const QuestionsDialog = function () {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <DialogTitle id='alert-dialog-title'>
        저희의 테스트에 참가해줘서 감사합니다!
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          테스트의 재미를 위해서 구어체를 사용합니다.
        </DialogContentText>
        <DialogContentText id='alert-dialog-description'>
          만약 문제에 문제가 있거나 맘에 들지 않는다면{' '}
          <Fab
            size='small'
            color='grey'
            aria-label='unlike'
            sx={{
              boxShadow: 'none',
              width: 30,
              height: 30,
              minHeight: 0,
              '&:hover': { boxShadow: 'none' },
            }}
          >
            <ThumbDownAltIcon fontSize='small' />
          </Fab>
          {/*<ThumbDownAltIcon fontSize="small" color="gray"/>*/} 버튼을
          눌러주세요!
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleClose}>알겠어요!</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
export default QuestionsDialog;
