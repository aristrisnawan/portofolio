import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Gambar from '../img/dev.jpg';
import Button from '@material-ui/core/Button';
import Text from 'react-text-typing';
import Typical from 'react-typical';
// import TypeText from 'react-typing-text'
// import 'react-typing-text/dist/index.css'

const useStyle = makeStyles((theme) => ({
    root: {
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    },
    paper:{
        display: "flex",
        alignItems: "center"
    },
    typ: {
        marginTop: theme.spacing(20),
        position:"sticky",
        color: "#fff",
        fontFamily: theme.typography.fontFamily
    },
    wrn : {
        color: "#305bba"
    },
    btm: {
        backgroundColor:"#fff",
        marginTop: theme.spacing(5)
    },
    lnk:{
        textDecoration: "none"
    }
}))

function Home() {
    const classes = useStyle()
    return (
        <div id="Home" className={classes.root} style={{backgroundImage:`url(${Gambar})`}}>
            <Container component="main" maxWidth="xs" >
                <div className={classes.paper}>
                <Typography variant="h3" className={classes.typ} >
                    My name Aris <br/>
                    I'm  &nbsp;
                 <Typical
                    steps={['Developer', 1000, 'Designer', 500]}
                    loop={Infinity}
                    wrapper="b"
                    className={classes.wrn}
                />
                </Typography>
                </div>
                <a href="#Project" className={classes.lnk}>
                <Button variant="outlined" color="primary" className={classes.btm}>
                    View Project
                </Button>
                </a>
            </Container>
        </div>
    )
}

export default Home

