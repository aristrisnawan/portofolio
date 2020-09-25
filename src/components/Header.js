import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from './About';

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow:1
    },
    App:{
        backgroundColor: "#fff"
    },
    title: {
        flexGrow:1,
        color: "#9e9e9e"
    },
    btm:{
        margin: theme.spacing(2)
    },
    lnk:{
        textDecoration:"none"
    }
}))

function Header() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Router>
            <AppBar position="static" className={classes.App}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Aris Trisnawan
                    </Typography>
                    <Route className={classes.lnk}  path={"/home"} component={About}>
                    <Button className={classes.btm}>
                        Home
                    </Button>
                    </Route>
                    <Link className={classes.lnk} to="#About">
                    <Button className={classes.btm}>
                        About
                    </Button>
                    </Link>
                    <Link className={classes.lnk}>
                    <Button className={classes.btm}>
                      Contact
                    </Button>
                    </Link>
                </Toolbar>
            </AppBar>
            </Router>
        </div>
    )
}

export default Header
