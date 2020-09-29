/**
 * @name flex
 */

interface Parameter {
  display?: string;
  justify?: string;
  align?: string;
  direction?: string;
  wrap?: string;
}

export const flex = (props: Parameter) => `
      display: ${props.display || 'flex'};
      flex-direction: ${props.direction || 'row'};
      justify-content: ${props.justify || 'center'};
      align-items: ${props.align || 'center'};
      flex-wrap: ${props.wrap || 'initial'};
  `;
