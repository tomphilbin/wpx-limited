import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  padding-inline-start: 0px;

  li:after {
    content: ' | ';
  }

  li:last-child:after {
    content: '';
  }
`
