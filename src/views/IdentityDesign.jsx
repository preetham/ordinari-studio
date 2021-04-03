import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  pointerIcon: {
      fontSize: "0.8rem",
  },
  textTitle: {
      fontStyle: "italic",
  }
}));

const IdentityDesign = () => {
    const classes = useStyles();
    return (
        <div classes={classes.root}>
            <Typography>Ordinari Studio Presents</Typography>
            <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h4">Identity Design Contest - Patri Satish Kumar</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} justify="flex-start" alignItems="center">
                <Grid item>
                    <Typography variant="h6" gutterBottom><u>Why do we want what we want?</u></Typography>
                    <Typography variant="body1">
                        We’ve just realised the potential of the social media and
                        we’ve some products with us for sale,
                        which can use a branded look while promoting them
                        In another words we’re in a position where we have all
                        the body parts but not the skin, and we’d
                        really love to cover it with skin with a very appealing
                        face so that we can have our own identity in the system
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6"><u>What are things we wish to receive from you?</u></Typography>
                    <List disablePadding>
                        <ListItem><Typography variant="body1"> - A Classic Logo which reflects the importance of lord Nandi from the below story,
                            at least one version should be having the letters <b>PATRI</b> legible</Typography></ListItem>
                        <ListItem><Typography variant="body1"> - Preferred Colors as a Palette (Optional)</Typography></ListItem>
                        <ListItem><Typography variant="body1"> - Campaigning ideas with the Brand identity you’ve created, at least one</Typography></ListItem>
                        <ListItem><Typography variant="body1"> - A brief write-up explaining your philosophy and thought process behind the creation</Typography></ListItem>
                    </List>
                </Grid>
                <Grid item>
                    <Typography variant="h6"><u>Mythological Story Behind the Origin of Mridangam</u></Typography>
                    <Typography variant="body1">
                        So, it is said that Lord Nandi/Nandeeshwara
                        was the one who played Mridangam for the first
                        time as he was the chosen one for the job by none
                        other than Lord Shiva himself, for performing
                        the Tandav/ Tandavam and hence Lord Nandi is
                        considered as the (Adiguru) First Teacher for Mridangam Instrument.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6"><u>Additional Information</u></Typography>
                    <Typography className={classes.textTitle}>Purpose of the logo</Typography>
                    <Typography gutterBottom paragraph>
                        To have a symbol which we can use as an eye
                        catching element in order to expand our
                        audience footprint, primarily on Social Media
                    </Typography>
                    <Typography className={classes.textTitle}>Service we provide</Typography>
                    <Typography gutterBottom paragraph>
                        Entertainment via Music (Instrumental-Mridangam)
                    </Typography>
                    <Typography className={classes.textTitle}>Long term business goal</Typography>
                    <Typography gutterBottom paragraph>
                        To establish the brand in such a way
                        that it should be able to represent the Mridangam
                        part of Carnatic music on the World map of Music,
                        if anyone in the rest of the world is looking for
                        Carnatic Music stuff, they should be able to reach us
                    </Typography>
                    <Typography className={classes.textTitle}>Target Audience</Typography>
                    <Typography gutterBottom paragraph>
                        Ahem...Actually usually music has no
                        defined audience set per se but we can just say
                        please keep the Music Lovers in mind especially
                        the ones who always try to find something new online
                    </Typography>
                    <Typography className={classes.textTitle}>Competitors</Typography>
                    <Typography gutterBottom>
                        Western music personalities, who had already branded
                        themselves very well, not taking any names
                        (as you already know them :p) as the
                        differences in the styles of music might confuse you
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6"><u>References</u></Typography>
                    <Typography>
                        Refer to <Link href="https://patri.guru">https://patri.guru</Link> to know more about the Artiste
                    </Typography>
                    <Typography>
                        YouTube - <Link href="https://youtube.com/user/PatriSatishkumar">https://youtube.com/user/PatriSatishkumar</Link>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        PLEASE TRY TO SUBMIT BY 12th April, 2021
                    </Typography>
                    <Typography variant="body1">
                        Send it to <Link href="mailto:ordinaristudio@gmail.com">ordinaristudio@gmail.com</Link> preferably in <b>pdf</b> format or in <b>mp4</b> if any animation is involved
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default IdentityDesign;