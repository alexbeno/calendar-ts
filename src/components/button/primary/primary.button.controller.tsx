import * as React from 'react';
import { ButtonContainer } from './primary.button.style';

interface Props {
  style?: object;
  textColor?: string;
  className?: string;
  color?: string;
  children?: string;
  eventHandler: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ButtonPrimmary: React.FC<Props> = ({ style, textColor, className, color, eventHandler, children }) => (
  <ButtonContainer
    style={style}
    href="#"
    textColor={textColor}
    className={className}
    color={color}
    onClick={event => eventHandler(event)}
  >
    {children}
  </ButtonContainer>
);

export default ButtonPrimmary;
