import React from "react";
import styles from "./registration.module.scss";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Registration() {
    const classes = useStyles();
    const techlathon = [
        {
            name: "hackathon",
            route: "/hackathon",
        },
        {
            name: "Capture The Flag",
            route: "/ctf",
        },
        {
            name: "Infomaze",
            route: "/informaze",
        },
        {
            name: "Specia War",
            route: "/speciaWar",
        },
        {
            name: "Vividly",
            route: "/vividly",
        }
    ]
    return (<div className={styles.mainContaint}>
        <div className={styles.flexMain}>
            <div className={styles.gridMain}>
                {
                    techlathon.map((items, index) => {
                        return (
                            <Card className={classes.root} key={index}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        <span className={styles.spanner}>{items.name}</span>
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        adjective
                              </Typography>
                                    <Typography variant="body2" component="p">
                                        well meaning and kindly.
                                <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to={items.route} className={styles.links}>
                                        <Button size="medium" className={styles.button}>Register &nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i></Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        );
                    })
                }

            </div>
        </div>
    </div>);
}