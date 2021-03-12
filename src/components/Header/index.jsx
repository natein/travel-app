import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { AppBar, Toolbar, Button, IconButton, Typography, Container, InputBase } from '@material-ui/core';

import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LanguageSelector from './LanguageSelector';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'space-between'
        },
    },
    title: {
        flexGrow: 3,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    titleLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
    },
    languageSwitch: {
        flexGrow: 0,
    },
    search: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchButton: {
        color: 'white',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        borderLeftColor: 'white',
        '&:hover': {
          border: 'none',
        },
    },
    inputRoot: {
        color: 'inherit',
        flexGrow: '1',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    loginBtn: {
        marginLeft: '10px',
    },
}));

function Header({countries}) {
    const [search, setsearch] = useState('');
    const classes = useStyles();
    const { t } = useTranslation();

    const match = useRouteMatch({
        path: '/countries/:isoCode',
        strict: true,
        sensitive: true,
    });

    const isUserLoggedIn = true;

    const handleSearchChange = (e) => {
        setsearch(e.target.value);
        console.log(search)
    };

    const handleSearchClick = (search) => {
        console.log(search);
      };
    
    return (
        <AppBar position="fixed">
            <Container maxWidth="lg">
                <Toolbar disableGutters className={classes.toolbar}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link className={classes.titleLink} to="/">
                            Travel App
                        </Link>
                    </Typography>
                    {!match && (
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                autoFocus={true}
                                autoComplete="false"
                                placeholder={t('labels.search.placeholder')}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={(e) => handleSearchChange(e)}
                            />
                            <Button variant="outlined" color="primary" className={classes.searchButton} onClick={() => handleSearchClick(search)}>
                                {t('labels.search.button')}
                            </Button>
                        </div>
                    )}
                    <LanguageSelector className={classes.languageSwitch} />

                    <IconButton className={classes.loginBtn}>
                        {isUserLoggedIn ? <AccountCircleIcon /> : <ExitToAppIcon />}
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

const mapStateToProps = (state) => ({
    countries: state.countries
});

export default connect(mapStateToProps)(Header);