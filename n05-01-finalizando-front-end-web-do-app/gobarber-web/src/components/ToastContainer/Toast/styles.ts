import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

/**
 * O $ no início do nome da prop indica uma "transient prop" do styled component:
 * https://styled-components.com/docs/api#transient-props
 *
 * O erro do react sobre o camel case está ocorrendo porque o Container aqui
 * esta estendendo o um elemento externo (animated.div) da lib react-spring
 *
 * O Styled Componentes deve estar passando essa prop pra esse elemento e esse
 * elemento está jogando essa prop na DOM, sendo o styled normalmente não faria isso
 */
interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  $hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + & {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.$hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
