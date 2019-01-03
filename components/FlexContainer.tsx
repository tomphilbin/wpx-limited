import styled from 'styled-components'

interface FlexContainerProps {
  align?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'
}

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${({ align = 'center' }: FlexContainerProps) => align};
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  min-height: min-content;

  @media (min-width: 1281px) {
    font-size: 18px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 18px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 28px;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 28px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 32px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: px;
  }
`
