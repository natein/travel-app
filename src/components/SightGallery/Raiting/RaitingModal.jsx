import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Cross from '../../../assets/cross.png';
import Star from './RaitingStar';

Modal.setAppElement('#root');

const useStyles = makeStyles({
    titleBox: {
        backgroundColor: '#3F51B5',
        height: '65px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 25px',
        justifyContent: 'space-between',
    },
    title: {
        color: 'white',
        fontSize: '20px',
    },
    cross: {
        cursor: 'pointer',
        paddingTop: '5px',
    },
    raitingBox: {
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        padding: '0 25px',
    },
    userTitle: {},
    raitingBoxInner: {
        padding: '15px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

function StarList({ selected, totalStars }) {
    return [...Array(totalStars)].map((_, i) => <Star key={i} selected={i < selected} />);
}

function RaitingModal({ showModal, closeModal, sight, totalStars }) {
    const classes = useStyles();
    const { t } = useTranslation();
    const [raiting, setRaiting] = React.useState([]);

    React.useEffect(() => {
        if (sight.rating) {
            setRaiting(sight.rating);
        }
    }, [sight]);

    return (
        <Modal
            style={{
                overlay: {
                    position: 'fixed',
                    backgroundColor: 'rgba(47,50,52,0.92)',
                    zIndex: 9999,
                },
                content: {
                    margin: '0 auto',
                    borderRadius: 'initial',
                    maxWidth: '300px',
                    position: 'relative',
                    top: '30%',
                    border: 'initial',
                    background: 'initial',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    outline: 'none',
                    padding: '0',
                },
            }}
            closeTimeoutMS={2000}
            isOpen={showModal}
        >
            <Box className={classes.titleBox}>
                <Typography className={classes.title}>{t('labels.vote')}</Typography>

                <Box className={classes.cross} onClick={closeModal} component="span">
                    <img alt="cross" src={Cross} />
                </Box>
            </Box>
            <Box className={classes.raitingBox}>
                {raiting.map((item, i) => {
                    return (
                        <Box className={classes.raitingBoxInner} key={i}>
                            <Typography className={classes.userTitle}>{item.username}</Typography>
                            <Box>
                                <StarList selected={item.rate} totalStars={totalStars} />
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Modal>
    );
}

RaitingModal.propTypes = {
    selected: PropTypes.number,
    totalStars: PropTypes.number,
};

export default RaitingModal;
