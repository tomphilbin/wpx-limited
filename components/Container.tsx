import styled from 'styled-components';

interface ContainerProps {
  align?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
}

const Container = styled.div`
  display: flex;
  align-items: ${({ align = 'center' }: ContainerProps) => align};
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  @media (max-width: 1199px) {
    font-size: 16px;
  }

  @media (max-width: 991px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 575px) {
    font-size: 34px;
  }
`;

export default Container;
