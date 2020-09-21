import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Aris from '../img/aris.jpg';

function About() {
    return (
        <div>
            <Typography variant="h6" >
                About
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <img src={Aris}/>
                </Grid>
                <Grid item xs={6}>
                    sjrfiodsjg
                </Grid>
            </Grid>
        </div>
    )
}

export default About
