const FULL_ROTATE_DEGREE = 360;

export const findClosestRotateMultiple = (numero: number) => {
  const cociente = Math.floor(numero / FULL_ROTATE_DEGREE);
  const multiploCercanoMenor = cociente * FULL_ROTATE_DEGREE;
  return multiploCercanoMenor;
};
