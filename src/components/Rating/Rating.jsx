import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { hasUser, findRate } from '../../helpers';
import Link from '@material-ui/core/Link';
import StarList from './Stars/StarList';
import Error from './Error';
import { v4 as uuid } from 'uuid';

const useStyles = makeStyles({
    link: {
        fontWeight: 'bold',
        cursor: 'pointer',
        padding: '0 8px',
    },
    boldTypography: {
        fontWeight: 'inherit',
    },
});


function Raiting({ authUser, users, setPostRate, addStar, average, votesCount }) {
    const classes = useStyles();
    const { t } = useTranslation();

    const [authError, setAuthError] = React.useState(false);
    const [stars, setStars] = React.useState(0);

    React.useEffect(() => {
        if (average || votesCount) setAuthError(false);
    }, [average, votesCount]);

    React.useEffect(() => {
        if (authUser && hasUser(users, authUser.username)) {
            setStars(findRate(users, authUser.username));
        } else {
            setStars(0);
        }
    }, [authUser, users]);

    function onStarClickHandle(selected) {
        if (authUser) {
            const { username } = authUser;
            addStar({ _id: uuid(), username, rate: selected });
            setStars(findRate(users, authUser.username));
        } else {
            setAuthError(true);
        }
    }

    return (
        <>
            <Box my={2} display="flex" alignItems="center" justifyContent="center">
                <Box fontWeight="fontWeightBold" component="span" px={1}>
                    {t('labels.middle')}: {average}
                </Box>

                {<StarList onClick={onStarClickHandle} starsSelected={stars} />}

                <Box fontWeight="fontWeightBold" component="span" px={1}>
                    ({votesCount})
                    <Link className={classes.link} variant="body2">
                        {t('labels.raiting')}
                    </Link>
                </Box>
            </Box>
            <Error isAuth={authError} />
        </>
    );
}

Raiting.propTypes = {};

export default Raiting;
