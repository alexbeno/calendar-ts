const intToString = (int: number): string => {
  if (int || int === 0) {
    return int.toString();
  }

  return '';
};

export default intToString;
