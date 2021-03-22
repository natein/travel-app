import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    star: {
        cursor: 'pointer',
        height: '25px',
        width: '25px',
        margin: '2px',
        float: 'left',
        backgroundColor: (selected) => (selected ? '#FFB600' : '#BDBDBD'),
        clipPath: 'polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0% 38%, 37% 38%)',
    },
});

function Star({ selected = false, onClick = (f) => f }) {
    const classes = useStyles(selected);
    return <Box className={classes.star} onClick={onClick} />;
}

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Star;