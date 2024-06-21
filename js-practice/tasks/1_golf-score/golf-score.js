export const GOLF_SCORES = {
  HOLE_IN_ONE: 'Hole-in-one!',
  EAGLE: 'Eagle',
  BIRDIE: 'Birdie',
  PAR: 'Par',
  BOGEY: 'Bogey',
  DOUBLE_BOGEY: 'Double Bogey',
  GO_HOME: 'Go Home!',
};

export const golfScore = (par, stroke) => {
  switch (true) {
    case stroke === 1:
      return GOLF_SCORES.HOLE_IN_ONE;

    case stroke <= par - 2:
      return GOLF_SCORES.EAGLE;

    case stroke === par - 1:
      return GOLF_SCORES.BIRDIE;

    case stroke === par:
      return GOLF_SCORES.PAR;

    case stroke === par + 1:
      return GOLF_SCORES.BOGEY;

    case stroke === par + 2:
      return GOLF_SCORES.DOUBLE_BOGEY;

    case stroke >= par + 3:
      return GOLF_SCORES.GO_HOME;

    default:
      return 'Wrong input!';
  }
};
