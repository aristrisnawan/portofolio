import React from 'react'
import Typography from '@material-ui/core/Typography';
import Aris from '../img/aris.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    txt:{
        textAlign:"center",
        backgroundColor: "#e8eaf6",
        paddingTop:theme.spacing(4),
        paddingBottom:theme.spacing(4)
    },
    typ:{
        // marginTop:theme.spacing(4),
        // marginBottom:theme.spacing(4)
    },
    topbtm:{
        marginBottom:theme.spacing(5)
    }
}))

function About() {
    const classes = useStyle()
    return (
        <div className={classes.txt} id="About">
            <Typography variant="h6" className={classes.typ}>
                About
            </Typography>
            <Typography >
                My Name Aris Trisnawan
            </Typography>
            <Typography>
                Born Ciamis, 25 Agustus 1998
            </Typography>
            <Typography>
                Life in Bandung
            </Typography>
            <Typography >
                Student Telkom University
            </Typography>
        </div>
    )
}

export default About
