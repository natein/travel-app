import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';

import img from "../../assets/rs_school_1.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: theme.spacing(3, 0),
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  date: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    [theme.breakpoints.down("sm")]: {
      justifyContent: 'center',
    },
  },
  gitHubLink: {
    color: "white",
    textDecoration: "none",
  },
  gitHubList: {
    display: "flex",
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: "space-between",
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
      marginBottom: '20px',
    },
  },
  logo: {
    width: '70px',
    [theme.breakpoints.down("sm")]: {
      textAlign: 'center',
    },
  },
}));

const developers = [
  {
    fullname: 'Ivan Mikhalchanka',
    github: 'https://github.com/spaceragga',
  },
  {
    fullname: 'Aleksei Bulgak',
    github: 'https://github.com/aleksei-bulgak-study',
  },
  {
    fullname: 'Nikolai Volzhenin',
    github: 'https://github.com/Kvadeck',
  },
  {
    fullname: 'Natalija Natein',
    github: 'https://github.com/natein',
  },
  {
    fullname: 'Alexandr Kudryavtcev',
    github: 'https://github.com/kvalexandr',
  },
];

const DeveloperElement = ({ className, github, fullname }) => (
  <a className={className} target="_blank" rel="noreferrer" href={github}>
    {fullname}
  </a>
);

function Footer({ className }) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" className={classes.footerContainer}>
        <Grid container >
          <Grid item xs={12} md={2} className={classes.logo}>
            <a target="_blank" rel="noreferrer" href="https://rs.school/js/">
              <img className={classes.logo} src={img} alt="RSS" />
            </a>
          </Grid>
          <Grid item xs={12} md={8} className={classes.gitHubList}>
              {developers.map((developer) => (
                <DeveloperElement
                  key={developer.fullname}
                  className={classes.gitHubLink}
                  fullname={developer.fullname}
                  github={developer.github}
                />
              ))}
          </Grid>
          <Grid item xs={12} md={2} className={classes.date}>
            {new Date().getFullYear()}
          </Grid>
        </Grid>
      </Container>
    </footer >
  );
}

export default Footer;