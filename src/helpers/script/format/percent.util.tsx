/* ------------------------------- Get percent ------------------------------ */
interface propsType {
  total: number;
  number: number;
}

export const percent = (props: propsType) => {
  const totalValue = props.total;
  const numberValue = props.number;

  if (Number.isNaN(totalValue) || Number.isNaN(numberValue)) {
    return 0;
  }

  return Math.round((numberValue / totalValue) * 100);
};
