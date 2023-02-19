import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center'
  },
  title: {
    color: theme.primaryColor,
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
  button: {
    width: 'fit-content',
    alignSelf: 'center'
  }
}));