let oldValues = [
  [25, 25, 50, 75],
  [30, 40, 60, 70],
  [45, 60, 60, 70],
  [75, 75, 75, 100],
];
var newValues = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

let stop = false;

function exit(values, computed) {
  let e = true;
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values[i].length; j++) {
      if (Math.abs(values[i][j] - computed[i][j]) > 0.001) {
        e = false;
      }
    }
  }
  return e;
}

while (!stop) {
  for (let i = 0; i < oldValues.length; i++) {
    for (let j = 0; j < oldValues[i].length; j++) {
      newValues[i][j] = oldValues[i][j];
    }
  }

  for (let i = 0; i < oldValues.length; i++) {
    for (let j = 0; j < oldValues[i].length; j++) {
      switch (i) {
        case 0:
          if (j == 0) {
            oldValues[i][j] = (oldValues[0][1] + oldValues[1][0] + 50) / 4;
          } else if (j == 1) {
            oldValues[i][j] =
              (0.5 * (oldValues[0][0] + oldValues[0][2]) +
                oldValues[1][1] +
                50) /
              4;
          } else if (j == 2) {
            oldValues[i][j] =
              (0.5 * (oldValues[0][1] + oldValues[0][3]) +
                oldValues[1][2] +
                50) /
              4;
          } else {
            oldValues[i][j] =
              (0.5 * oldValues[0][2] + oldValues[1][3] + 100) / 4;
          }
          break;
        case 1:
          if (j == 0) {
            oldValues[i][j] =
              (oldValues[0][0] + 2 * oldValues[1][1] + oldValues[2][0]) / 4;
          } else if (j == 1) {
            oldValues[i][j] =
              (oldValues[0][1] +
                oldValues[1][0] +
                oldValues[1][2] +
                oldValues[2][1]) /
              4;
          } else if (j == 2) {
            oldValues[i][j] =
              (oldValues[0][2] +
                oldValues[1][1] +
                oldValues[1][3] +
                oldValues[2][2]) /
              4;
          } else {
            oldValues[i][j] =
              (oldValues[0][3] + oldValues[1][2] + oldValues[2][3] + 100) / 4;
          }
          break;
        case 2:
          if (j == 0) {
            oldValues[i][j] =
              (oldValues[1][0] + 2 * oldValues[2][1] + oldValues[3][0]) / 4;
          } else if (j == 1) {
            oldValues[i][j] =
              (oldValues[1][1] +
                oldValues[2][0] +
                oldValues[2][2] +
                oldValues[3][1]) /
              4;
          } else if (j == 2) {
            oldValues[i][j] =
              (oldValues[1][2] +
                oldValues[2][1] +
                oldValues[2][3] +
                oldValues[3][2]) /
              4;
          } else {
            oldValues[i][j] =
              (oldValues[1][3] + oldValues[2][2] + oldValues[3][3] + 100) / 4;
          }
          break;
        case 3:
          if (j == 0) {
            oldValues[i][j] = (oldValues[2][0] + 2 * oldValues[3][1] + 100) / 4;
          } else if (j == 1) {
            oldValues[i][j] =
              (oldValues[2][1] + oldValues[3][0] + oldValues[3][2] + 100) / 4;
          } else if (j == 2) {
            oldValues[i][j] =
              (oldValues[2][2] + oldValues[3][1] + oldValues[3][3] + 100) / 4;
          } else {
            oldValues[i][j] = (oldValues[2][3] + oldValues[3][2] + 200) / 4;
          }
          break;

        default:
          break;
      }

      console.log(oldValues[i][j]);
    }
  }
  console.log("\n");
  stop = exit(oldValues, newValues);
}
