import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
    error: {
        color: 'red',
    },
});

function AuthError({ isAuth = false }) {
    const classes = useStyles();
    const { t } = useTranslation();
    if (isAuth) {
        return (
            <Box display="flex" alignItems="center" justifyContent="center">
                <Typography className={classes.error}>{t('labels.authError')}</Typography>
            </Box>
        );
    } else {
        return <></>;
    }
}

AuthError.propTypes = {
    isAuth: PropTypes.bool,
};

export default AuthError;
