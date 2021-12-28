import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FiltersCard from './FiltersCard';
import DrinksCard from './DrinksCard';

const useStyles = makeStyles({
    box: {
        height: '100%',
        width : '85%',
        overflowY : "scroll",
        display : "flex",
        justifyContent : "center",
        flexDirection : "row"

    },
    array: {
        height: '90vh',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : "blue",
    },
});

export default function DrinksCarroussel(props) {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <div>
                { props.filterName ? <div>
                                            { props.filterName.map((drink, i) => {
                                                return (
                                                    <DrinksCard key={i} name={drink.strDrink} urlImg={drink.strDrinkThumb}/>
                                                )
                                            })}
                                    </div> :  
                                    <div>Please select filter.</div>
                }
            </div>
         </Box>
    )
}

