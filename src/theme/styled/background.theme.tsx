/**
 * @name background
 */

interface Parameter {
  position?: string;
  size?: string;
  repeat?: string;
}

export const background = (props: Parameter) => `
    background-position: ${props.position || 'center'};
    background-size: ${props.size || 'cover'};
    background-repeat: ${props.repeat || 'no-repeat'};
`;
