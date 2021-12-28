import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FiltersCard from './FiltersCard';

const useStyles = makeStyles({
    box: {
        height: '100%',
        width : '85%',
        overflow : "scroll",

    },
    array: {
        height: '90vh',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : "blue",
    },
});

export default function FiltersCarroussel(props) {
    const classes = useStyles();
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
        .then(res => {
            setFilters(res.data.drinks);
        })
    }, [])

    return (
        <Box className={classes.box}>
            <div>
                {filters.map((filter, i) => {
                    return (
                        <FiltersCard key={i} name={filter.strIngredient1} setSelectedFilter={props.setSelectedFilter}/>
                    )
                })}
            </div>
         </Box>
    )
}
