import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from '../../assets/home-bck.png'


const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #0cebeb 30%, #29ffc6 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .2)',
      color: 'white',
      height: 60,
      width: 100,
      padding: '0 30px',
      textDecoration: 'none',
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      fontWeight : 900,
      '&:hover': {
        cursor : "pointer",
        transform : "scale(1.05)"
    },
    },
    box: {
        height: '100vh',
        backgroundImage: `url(${Image})`,
        backgroundPosition:'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      },
    gridBtn: {
        height: '100vh',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    },
  });

export default function Home() {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <Grid container spacing={0}>
                <Grid item xs>
                </Grid>
                <Grid item className={classes.gridBtn} xs>
                    <Link to="/drinks" className={classes.root}>View drinks</Link>
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
         </Box>
    )
}
