import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./drawer.module.scss";
import List from "@material-ui/core/List";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    list: {
        width: 270,
    },
    fullList: {
        width: "auto",
    },
});

export default function Drawer() {

    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Events",
            path: "/events",
        },
        {
            title: "Advisory Committee",
            path: "/advisory",
        },
        {
            title: "Sponsers",
            path: "/sponsers",
        },
        {
            title: "Our Team",
            path: "/team",
        },
        {
            title: "Quick links",
            path: "/QuickLinks",
        },
        {
            title: "Registeration",
            path: "/registration",
        },

    ];

    const classes = useStyles();
    const [state, setState] = useState({
        left: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <div className={styles.mainMenu}>
                    <div className={styles.buttonMain}>
                        <div onClick={toggleDrawer("left", true)} className={styles.closeBtn}>X</div>
                    </div>
                </div>

                <div className={styles.drawerNavContainer}>
                    <ul className={styles.linkContainer}>
                        {
                            links.map((items, index) => (
                                <Link to={items.path} className={styles.stylrem} key={index}>
                                    <li className={styles.routerLink}>
                                        <div className={styles.texts}>
                                            <span>{items.title}</span>
                                        </div>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>

            </List>

        </div>
    );


    return (<div>
        {<React.Fragment>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer("left", true)}
            >
                <span className={styles.bars}>
                    <i className="fa fa-bars"></i>
                </span>
            </IconButton>

            <SwipeableDrawer
                anchor="left"
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
            >
                {list("left")}
            </SwipeableDrawer>
        </React.Fragment>
        }


    </div >);
}