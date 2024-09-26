

import { Box, Modal, Typography } from '@mui/material';
import Sheet from '@mui/joy/Sheet';
import ModalClose from '@mui/joy/ModalClose';
import React from 'react';
import Register from './Register';
import Login from './Login';
import { useLocation } from 'react-router-dom';


function AuthModal({handleAuthClose, open}) {
    // const [open, setOpen] = React.useState(false);
    const location = useLocation();
  return (
    <div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={handleAuthClose}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
        >
          <ModalClose onClick={handleAuthClose} variant="plain" sx={{ m: 1 }} />
          
           <Box sx={{marginTop:"1.5rem"}}>
             {location.pathname === "/register" ? <Register/> : <Login/>}
           </Box>

        </Sheet>
      </Modal>
    </div>
  )
}

export default AuthModal
