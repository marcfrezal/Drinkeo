import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FiltersCarroussel from './FiltersCarroussel';

const useStyles = makeStyles({
    box: {
        height: '95%',
        width: '90%',
        backgroundColor: "white",
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
        borderRadius: "2vh"
    },
    titleFilter: {
        height: '10vh',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        fontWeight : 900,
        fontSize : '1.3vw'
    },
    filtersCarroussel: {
        height: '80vh',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    },
});

export default function Filters(props) {
    const classes = useStyles();


    return (
        <Box className={classes.box}>
            <Grid container spacing={0}>
                <Grid item xs={12} className={classes.titleFilter}>
                    Filters
                </Grid>
                <Grid item xs={12} className={classes.filtersCarroussel}>
                    <FiltersCarroussel setSelectedFilter={props.setSelectedFilter}/>
                </Grid>
            </Grid>
         </Box>
    )
}
