export const renderPercent = (total: number, number: number) => {
  const totalValue = total;
  const numberValue = number;

  if (Number.isNaN(totalValue) || Number.isNaN(numberValue)) {
    return 0;
  }

  return Math.round((numberValue / totalValue) * 100);
};
