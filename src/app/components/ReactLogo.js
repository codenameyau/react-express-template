import styled from 'styled-components';
import Logo from 'app/assets/logo.svg';

export const ReactLogo = styled.div`
  width: 10em;
  height: 10em;
  background: url(${Logo}) no-repeat center;
  background-size: cover;
  animation: App-logo-spin infinite 10s linear;
  pointer-events: none;
  margin: 0 auto;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default ReactLogo;
