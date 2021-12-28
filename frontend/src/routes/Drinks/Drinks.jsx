import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Filters from '../../components/Filters';
import DrinksData from '../../components/DrinksData';

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
      fontWeight : 900
    },
    box: {
        height: '100vh',
        backgroundColor: "#F2F2F2",
    },
    gridBtn: {
        height: '100vh',
    },
    gridFilters: {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        height: '100vh',

    },
});

export default function Drinks() {
    const classes = useStyles();
    const [selectedFilter, setSelectedFilter] = useState();

    console.log(selectedFilter);
    return (
        <Box className={classes.box}>
            <Grid container spacing={0}>
                <Grid item className={classes.gridFilters} xs={2}>
                    <Filters setSelectedFilter={setSelectedFilter}/>
                </Grid>
                <Grid item className={classes.gridFilters} xs={10}>
                    <DrinksData filterName={selectedFilter}/>
                </Grid>
            </Grid>
         </Box>
    )
}
