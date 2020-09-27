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
        height: "100%",
        display: "block",
        margin: "auto"
    },
    typGrid:{
        textAlign:"center",
    },
    containerImg: {
        height: 250
    }
}))

const myProject = [
    {
        title: 'Website',
        image: Web
    },
    {
        title: 'Mobile Marketing',
        image: Web1
    },
    {
        title: 'Website',
        image: Undraw1
    }
]


// WEBNYA KEREN RISS

// Biasanya begini aturannya
// max value: 12

// xs: mobile
// sm: mobile
// md: mobile/tablet
// lg: desktop
// xl: desktop


function project() {
    const classes = style()
    return (
        <div id="project">
            <Typography variant="h6" className={classes.typ}>
                This My Project
            </Typography>
            <Grid container spacing={2} className={classes.grd}>
                {
                    myProject.map((data, index) => (
                        <Grid item xs={12} sm={12} md={6} lg={4} key={index} >
                            <Paper>
                                <Typography variant="h6" className={classes.typGrid}><b>{data.title}</b></Typography>
                                <div className={classes.containerImg}>
                                    <img src={data.image} className={classes.gmbr}/>
                                </div>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default project
