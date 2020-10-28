import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import screenshot1 from '../../assets/screenshot_1.png'
import screenshot2 from '../../assets/screenshot_2.png'
import screenshot3 from '../../assets/screenshot_3.png'

import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: "#003e74",
    },
    gridCointainer: {
        paddingTop: 100,
        [theme.breakpoints.down('xs')]: {
            paddingTop: 50,
            height: "initial",
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
        },
    },
    screenshotHome: {
        height: 800,
        marginBottom: -5,
        [theme.breakpoints.down('xs')]: {
            height: 500,
        },
    },
    screenshotContainer: {
        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
        }
    },
    sectionTitle: {
        fontSize: "48px",
        margin: 10,
        color: "#FFF",
        fontWeight: 600,
        lineHeight: "100%",
        letterSpacing: "-1.5px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "40px",
            letterSpacing: "-1px"
        },
    },
    sectionSubtitle: {
        fontSize: "28px",
        margin: 20,
        color: "#FFF",
        lineHeight: "100%",
        letterSpacing: "-1.5px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "20px",
            letterSpacing: "-1px"
        },
    },

}));

export default function SectionA() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.gridCointainer}
                >
                    <Grid
                        item
                        lg={6}
                        md={12}
                    >
                        <Typography
                            align="center"
                            component="h2"
                            className={classes.sectionTitle}
                        >
                            Analise cada detalhe
                        </Typography>
                        <Typography
                            align="center"
                            component="h4"
                            className={classes.sectionSubtitle}
                        >
                            Conheça cada empresa a fundo na hora de investir
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        lg={6}
                        md={12}
                        className={classes.screenshotContainer}
                    >
                        <img className={classes.screenshotHome} src={screenshot1}/>
                    </Grid>


                </Grid>

            </div>
        </>
    );
}
