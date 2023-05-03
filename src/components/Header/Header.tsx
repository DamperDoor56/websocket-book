import React, { FunctionComponent } from 'react';

import { Container } from "./styles";
import GroupingSelectBox from "../GroupingSelectBox/GroupingSelectBox";
import { HeaderProps } from '../../interfaces/Header';

const Header: FunctionComponent<HeaderProps> = ({options}) => {
  return (
    <Container>
      <h3>Order Book</h3>
      <GroupingSelectBox options={options} />
    </Container>
  );
};

export default Header;