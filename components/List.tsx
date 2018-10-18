import styled from 'styled-components';

export default styled.ul`
  list-style: none;
  padding-inline-start: 0px;

  li:after {
    content: ' | ';
  }

  li:last-child:after {
    content: '';
  }
`;
