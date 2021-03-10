import React, { useCallback } from 'react';
import { Box, Button, makeStyles, Menu, MenuItem, withStyles } from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.palette.common.white,
    },
    icon: {
        display: 'inherit',
    },
    singleIcon: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            alignItems: 'center'
        }
    }
}));

const StyledMenu = withStyles({
    paper: {
        minWidth: '10rem',
    },
})((props) => <Menu {...props} />);

const LanguageSelector = ({ currentLocale, onLocaleChange, className }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onLanguageChange = useCallback(
        (e) => {
            console.log(e.target.id);
            onLocaleChange(e.target.id);
            handleClose();
        },
        [onLocaleChange],
    );

    return (
        <>
            <Button
                className={`${classes.button} ${className}`}
                onClick={handleClick}
                startIcon={
                    <Box component="span" display={{ xs: 'none', md: 'block' }}>
                        <TranslateIcon className={classes.icon} />
                    </Box>
                }
                endIcon={
                    <Box component="span" display={{ xs: 'none', md: 'block' }}>
                        <ExpandMoreIcon className={classes.icon} />
                    </Box>
                }
            >
                <Box component="span" display={{ xs: 'none', md: 'block' }}>
                    {currentLocale}
                </Box>
                <Box display={{ xs: 'block', md: 'none'}} className={classes.singleIcon}>
                    <TranslateIcon />
                </Box>
            </Button>
            <StyledMenu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
                <MenuItem onClick={onLanguageChange} id="ru">
                    ru
                </MenuItem>
                <MenuItem onClick={onLanguageChange} id="en">
                    en
                </MenuItem>
                <MenuItem onClick={onLanguageChange} id="uk">
                    uk
                </MenuItem>
            </StyledMenu>
        </>
    );
};

export default LanguageSelector;
