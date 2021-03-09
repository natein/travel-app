import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

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
        }
    },
}));

function NotFound({ error, className }) {
    return (
        <Grid container spacing={2} className={`${classes().root} ${className}`} direction="column" justify="center">
            <Container component="h1">
                Page was not found.
            </Container>
            <Container component="p" color>
                {error}
            </Container>
        </Grid>
    );
}

const mapStateToProps = (state) => ({
    error: state.error,
});

export default connect(mapStateToProps)(NotFound);
