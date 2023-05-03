import React, { FunctionComponent } from 'react';

import { Container } from "./styles";
import { ButtonProps } from '../../interfaces/Button';

const Button: FunctionComponent<ButtonProps> = ({ title, backgroundColor = '#5741d9', callback}) => {
  return (
    <Container backgroundColor={backgroundColor} onClick={callback}>
      {title}
    </Container>
  );
};

export default Button;