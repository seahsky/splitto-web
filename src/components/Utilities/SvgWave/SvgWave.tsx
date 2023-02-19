import { Title, Text, Anchor } from "@mantine/core";
import useStyles from './SvgWave.styles';

export function SvgWave() {
  const { classes } = useStyles();

  return (
    <svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 390"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.animatedWave}
    >
      <defs>
        <linearGradient id="gradient" x1="85%" y1="85%" x2="15%" y2="15%">
          <stop offset="5%" stop-color="#ae3ec9"></stop>
          <stop offset="95%" stop-color="#5c33b5"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,400 C 0,400 0,200 0,200 C 159.7333333333333,214.93333333333334 319.4666666666666,229.86666666666667 483,244 C 646.5333333333334,258.1333333333333 813.8666666666666,271.46666666666664 974,264 C 1134.1333333333334,256.53333333333336 1287.0666666666666,228.26666666666668 1440,200 C 1440,200 1440,400 1440,400 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        fill-opacity="1"
        className="transition-all duration-300 ease-in-out delay-150 path-0"
      ></path>
    </svg>
  );
}
