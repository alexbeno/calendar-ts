/* ------------------------------ CAPITALISE FIRST LETTER ----------------------------- */

export const capitalizeFirstLetter = (s: string) => {
  if (typeof s !== 'string') return '';

  return s.charAt(0).toUpperCase() + s.slice(1);
};

/* ------------------------------ FORMAT STRING ----------------------------- */

interface propsType {
  string: string;
  format?: string;
}

export const str = (props: propsType) => {
  if (props.string === '' || props.string === null || props.string === undefined) {
    return null;
  }

  if (props.format && props.format === 'capital') {
    return capitalizeFirstLetter(props.string);
  }

  return props.string;
};
