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
  const handleClose = () => setOpen(false);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <DialogTitle
        id='alert-dialog-title'
        align='center'
      >
        저희의 테스트에 참가해주셔서 <br /> 감사합니다.
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id='alert-dialog-description'
          align='center'
        >
          재미를 위해 반모를 사용합니다.
        </DialogContentText>
        <DialogContentText
          id='alert-dialog-description'
          align='center'
        >
          만약 문제가 맘에 들지 않으면
          <br />
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
          을 눌러줘~!
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleClose}>알겠어!</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
export default QuestionsDialog;
