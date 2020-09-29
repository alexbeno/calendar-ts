/**
 * @name object-fit
 */

interface Parameter {
  size?: string;
  hozitonal?: string;
  vertical?: string;
}

export const fit = (props: Parameter) => `
    object-fit: ${props.size || 'cover'};
    object-position: ${props.hozitonal || 'center'} ${props.vertical || 'center'};
`;
