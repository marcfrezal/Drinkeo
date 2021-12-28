import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useEffect, useState } from 'react';


const useStyles = makeStyles({

    card: {
        height: '10vh',
        width: '88%',
        backgroundColor: "white",
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
        marginBottom : "10%",
        borderRadius: "1vh",
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        fontSize : "1.2vw",
        fontWeight : 500,
        '&:hover': {
            backgroundColor : "#F2F2F2",
            cursor : "pointer",
            transform : "scale(1.05)"
        },
        marginLeft : '1vw'
    },
    filtersCarroussel: {

        textAlign : 'center'
    },
});

export default function FiltersCard(props) {
    const classes = useStyles();


    const setFilter = event => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${props.name}`)
        .then(res => {
            props.setSelectedFilter(res.data.drinks)
        }).catch((error) => {console.log(error)})
    }
    return (
        <Box className={classes.card} onClick={e => setFilter(e.target.value)}  >
            <Grid container >
                <Grid item xs={12} className={classes.filtersCarroussel}>
                    {props.name}
                </Grid>
            </Grid>
         </Box>
    )
}
