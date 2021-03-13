import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { IconButton, Fade, Backdrop, Modal } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    loginBtn: {
        marginLeft: '10px',
    },
}));

function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    // const isUserLoggedIn = true;

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton className={classes.loginBtn} onClick={handleOpen}>
                {!open ? <AccountCircleIcon /> : <ExitToAppIcon />}
            </IconButton>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Transition modal</h2>
                        <p id="transition-modal-description">react-transition-group animates me.</p>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}

export default TransitionsModal;
