import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

function StarList({ starsSelected, onClick = (f) => f, totalStars = 5 }) {
    const total = [...Array(totalStars)];
    return (
        <>
            {total.map((_, i) => (
                <Star key={i} selected={i < starsSelected} onClick={() => onClick(i + 1)} />
            ))}
        </>
    );
}

StarList.propTypes = {
    starsSelected: PropTypes.bool,
    onClick: PropTypes.func,
    totalStars: PropTypes.number,
};

export default StarList;
