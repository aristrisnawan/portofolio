import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyle = makeStyles((theme) => ({
    dv:{
        backgroundColor:"#030303"
    },
    title:{
        color:"#fff",
        textAlign:"center",
        marginBottom: theme.spacing(4)
    },
    warna:{
        color:"#fff",
        textAlign:"center"
    }
}))

function Footer() {
    const classes = useStyle()
    return (
        <div className={classes.dv} id="Footer">
            <Typography variant="h6" className={classes.title}>
                Contact
            </Typography>
            <Grid container spacing={4} >
                <Grid item xs={6}>
                    <Typography className={classes.warna}>
                    Address : <br/><br/>
                    Jl. Aria Bar. No.7, Cipamokolan <br/>
                     Kec. Rancasari, Kota Bandung, 40292 <br/>
                     Jawa Barat 
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.warna}>
                        Follow me<br/><br/>
                        <IconButton color="secondary">
                            <YouTubeIcon/>
                        </IconButton>
                        <IconButton color="primary">
                            <LinkedInIcon/>
                        </IconButton>
                        <IconButton color="secondary">
                            <MailOutlineIcon/>
                        </IconButton>
                    </Typography>
                </Grid>
            </Grid> 
        </div>
    )
}

export default Footer
