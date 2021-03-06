import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, /*MenuItem, Menu, */ Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import useStyles from './styles';
import { logo } from '../../assets';

export default function Navbar() {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="commerce" height="25px" className={classes.image}></img>
                        Recliner Studio
                    </Typography>
                    <div className={classes.grow} />
                    <div>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}
