import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
    }
}))

function Header() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.App}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Aris Trisnawan
                    </Typography>
                    <Button className={classes.btm}>
                        Home
                    </Button>
                    <Button className={classes.btm}>
                        About
                    </Button>
                    <Button className={classes.btm}>
                      Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
