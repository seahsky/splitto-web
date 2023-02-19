import { Title, Text, Anchor, Button, Box } from '@mantine/core';
import { SvgWave } from '../Utilities/SvgWave/SvgWave';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
    <Box className={classes.mainContainer}>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          Splitto
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        You do the spending, we do the bill-spliting.
      </Text>
      <Button className={classes.button}>Get Started</Button>
    </Box>
    </>
  );
}