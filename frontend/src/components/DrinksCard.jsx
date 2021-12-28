import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const useStyles = makeStyles({

    card: {
        height: '90%',
        width: '40vw',
        marginBottom : "10%",
        fontSize : "1.2vw",
        fontWeight : 500,

    },
    filtersCarroussel: {
        textAlign : 'center',
        fontSize : '2vw'

    },
    imgDrink: {
        height : '65vh',
        width : '100%',
        borderRadius: "1vh",
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
        marginLeft : '1vw',
        left : 0,
    }
});

export default function DrinksCard(props) {
    const classes = useStyles();

    return (
        <Box className={classes.card} >
            <Grid container >
                <img className={classes.imgDrink}  src={props.urlImg}/>
                <Grid item xs={12} className={classes.filtersCarroussel}>
                    {props.name}
                </Grid>
            </Grid>
         </Box>
    )
}
