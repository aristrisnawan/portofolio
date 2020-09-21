import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Undraw1 from '../img/undraw1.png';
import Mobile from '../img/mobile.png';
import Web from '../img/web.png';
import Web1 from '../img/web1.png';
import Mobile1 from '../img/mbl.png';
import Mobile2 from '../img/mobile2.png';

const style = makeStyles((theme) => ({
    typ: {
        textAlign: "center",
        color: "#9e9e9e",
        margin:theme.spacing(3,0,3,0)
    },
    grd: {
        margin:theme.spacing(0,2,0,2)
    },
    gmbr: {
        width: "100%",
        height: "100%"
    },
    typGrid:{
        textAlign:"center",
    }
}))



function project() {
    const classes = style()
    return (
        <div>
            <Typography variant="h6" className={classes.typ}>
                This My Project
            </Typography>
            <Grid container spacing={2} className={classes.grd}>
                <Grid item xs={4} >
                <Paper>
                <Typography variant="h6" className={classes.typGrid}><b>Website</b></Typography>
                <img src={Web} className={classes.gmbr}/>
                </Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper>
                <Typography variant="h6" className={classes.typGrid}><b>Mobile Marketing</b></Typography>
                <img src={Undraw1} className={classes.gmbr}/>
                </Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper>
                <Typography variant="h6" className={classes.typGrid}><b>Website</b></Typography>
                <img src={Web} className={classes.gmbr}/>
                </Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper>
                <Typography variant="h6" className={classes.typGrid}><b>Website</b></Typography>
                <img src={Mobile} className={classes.gmbr}/>
                </Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper>
                <Typography variant="h6" className={classes.typGrid}><b>Website</b></Typography>
                <img src={Mobile1} className={classes.gmbr}/>
                </Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper>
                <Typography variant="h6" className={classes.typGrid}><b>Website</b></Typography>
                <img src={Mobile2} className={classes.gmbr}/>
                </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default project
