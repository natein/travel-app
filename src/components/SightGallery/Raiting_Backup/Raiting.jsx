import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Star from './RaitingStar';
import RaitingModal from './RaitingModal';
import Link from '@material-ui/core/Link';
import { averageRaiting } from '../../../helpers';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router';
import { hasUser, findRate, findUserIdx, setScrollOff } from '../../../helpers';

const useStyles = makeStyles({
    link: {
        fontWeight: 'bold',
        cursor: 'pointer',
        padding: '0 8px',
    },
    error: {
        color: 'red',
    },
    boldTypography: {
        fontWeight: 'inherit',
    },
});

function Raiting({ sightId, sights, user, rate }) {
    const classes = useStyles();
    const { t } = useTranslation();
    const { isoCode } = useParams();

    const [starsSelected, setStarsSelected] = React.useState(0);
    const [totalStars] = React.useState(5);

    const [authError, setAuthError] = React.useState(false);
    const [emptyError, setEmptyError] = React.useState(false);

    const [curSight, setCurSight] = React.useState([]);
    const [midRaiting, setMidRaiting] = React.useState(0);
    const [countRaiting, setCountRaiting] = React.useState(0);
    const [showModal, setShowModal] = React.useState(false);

    React.useEffect(() => {
        setCurSight(sights[sightId]);
    }, [sightId, sights]);

    React.useEffect(() => {
        setMidRaiting(averageRaiting(curSight.rating));
        if (curSight.rating) {
            setCountRaiting(curSight.rating.length);
        }
    }, [curSight.rating, sightId, sights]);

    React.useEffect(() => {
        if (user && curSight.rating) {
            if (hasUser(curSight.rating, user.username)) {
                setStarsSelected(findRate(curSight.rating, user.username));
            } else {
                setStarsSelected(0);
            }
        }
        setAuthError(false);
        setEmptyError(false);
    }, [curSight.rating, rate, sightId, sights, user]);

    function changeRaiting(selected) {
        if (user == null) {
            setAuthError(true);
        } else {
            rate(isoCode, curSight.id, user.username, selected);
            const userIdx = findUserIdx(curSight.rating, user.username);
            if (hasUser(curSight.rating, user.username)) {
                curSight.rating[userIdx].rate = selected;
            } else {
                curSight.rating.push({
                    username: user.username,
                    rate: selected,
                });
            }
            setMidRaiting(averageRaiting(curSight.rating));
            setCountRaiting(curSight.rating.length);
            setStarsSelected(selected);
        }
    }

    function handleOpenModal(e) {
        e.preventDefault();
        if (curSight.rating.length > 0) {
            setScrollOff();
            setShowModal(true);
        } else {
            setEmptyError(true);
        }
    }

    function handleCloseModal() {
        setScrollOff('unset');
        setShowModal(false);
    }

    const starList = [...Array(totalStars)].map((n, i) => (
        <Star key={i} selected={i < starsSelected} onClick={() => changeRaiting(i + 1)} />
    ));

    return (
        <>
            <Box my={2} display="flex" alignItems="center" justifyContent="center">
                <Box fontWeight="fontWeightBold" component="span" px={1}>
                    {t('labels.middle')}: {midRaiting}
                </Box>
                {starList}
                <Box fontWeight="fontWeightBold" component="span" px={1}>
                    ({countRaiting})
                    <Link className={classes.link} onClick={(e) => handleOpenModal(e)} variant="body2">
                        {t('labels.raiting')}
                    </Link>
                </Box>
            </Box>
            <RaitingModal
                sight={curSight}
                totalStars={totalStars}
                closeModal={handleCloseModal}
                showModal={showModal}
            />
            {authError ? (
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Typography className={classes.error}>{t('labels.authError')}</Typography>
                </Box>
            ) : (
                ''
            )}
            {emptyError ? (
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Typography className={classes.error}>{t('labels.emptyError')}</Typography>
                </Box>
            ) : (
                ''
            )}
        </>
    );
}

Raiting.propTypes = {
    sightId: PropTypes.number,
    sights: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            rating: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string.isRequired,
                    rate: PropTypes.number.isRequired,
                }),
            ),
        }),
    ).isRequired,
    rate: PropTypes.func.isRequired,
};

export default Raiting;
