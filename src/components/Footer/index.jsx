import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import img from "../../assets/rs_school_1.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    position: "absolute",
    backgroundColor: theme.palette.primary.main,
    marginTop: "35px",
    color: "white",
    left: 0,
    bottom: 0
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  gitHubLink: {
    color: "white",
    textDecoration: "none",
  },
  gitHubList: {
    display: "flex",
    width: "35%",
    justifyContent: "space-between",
    [theme.breakpoints.down('sm')]: {
      width: "95%",
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '15px',
    },
  },
  logo: {
    width: '70px',
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
        fullname: 'Nikolai Voljenin',
        github: 'https://github.com/Kvadeck',
    },
    {
        fullname: 'Natalija Natein',
        github: 'https://github.com/natein',
    },
];

const DeveloperElement = ({ className, github, fullname }) => (
    <a className={className} target="_blank" rel="noreferrer" href={github}>
        {fullname}
    </a>
);

function Footer({className}) {
    const classes = useStyles();
    return (
        <footer className={`${classes.root} ${className}`}>
            <Toolbar className={classes.toolBar}>
                <IconButton>
                    <a target="_blank" rel="noreferrer" href="https://rs.school/js/">
                        <img className={classes.logo} src={img} alt="RSS" />
                    </a>
                </IconButton>
                <div className={classes.gitHubList}>
                    {developers.map((developer) => (
                        <DeveloperElement
                            key={developer.fullname}
                            className={classes.gitHubLink}
                            fullname={developer.fullname}
                            github={developer.github}
                        />
                    ))}
                </div>
                <Typography variant="h6" noWrap>
                    {new Date().getFullYear()}
                </Typography>
            </Toolbar>
        </footer>
    );
}

export default Footer;
