import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DrinksCarroussel from './DrinksCarroussel';

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

export default function DrinksData(props) {
    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <Grid container spacing={0}>
                <Grid item xs={12} className={classes.titleFilter}>
                    Drinks
                </Grid>
                <Grid item xs={12} className={classes.filtersCarroussel}>
                    <DrinksCarroussel filterName={props.filterName}/>
                </Grid>
            </Grid>
         </Box>
    )
}
