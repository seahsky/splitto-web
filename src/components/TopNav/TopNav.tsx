import { Box, Button, Image } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import useStyles from './TopNav.styles';

export function TopNav() {
    const { classes } = useStyles();

    return (
        <>
        <Box className={classes.topNavContainer}>
            <Image src={'/logo/splitto-logo.png'} width={150} height={80} />
            <Box className={classes.buttonContainer}>
                <Button className={classes.button} variant='outline'>Log In</Button>
                <Button className={classes.button}>Sign Up</Button>
                <ColorSchemeToggle className={classes.button} />
            </Box>
        </Box>
        </>
    )
}