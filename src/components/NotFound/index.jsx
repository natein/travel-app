import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const classes = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        textAlign: 'center',
        color: theme.palette.text.primary,
        p: {
            color: theme.palette.text.secondary,
        },
    },
}));

function NotFound({ error, className }) {
    const { t } = useTranslation();
    return (
        <Grid container spacing={2} className={`${classes().root} ${className}`} direction="column" justify="center">
            <Container component="h1">{t('labels.error')}</Container>
            <Container component="p" color>
                {error}
            </Container>
        </Grid>
    );
}

NotFound.propTypes = {
    error: PropTypes.string,
    className: PropTypes.string,
};

NotFound.defaultProps = {
    error: null,
    className: '',
};

const mapStateToProps = (state) => ({
    error: state.error,
});

export default connect(mapStateToProps)(NotFound);
