import styled from 'styled-components';

export const StyledApp = styled.div`
  text-align: center;
`;

export const AppMain = styled.main`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  .App-logo {
    height: 30vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const CodeBlock = styled.code`
  margin: 0.5em 0;
  padding: 0.5em;
  font-family: Monaco, Consolas, 'Andale Mono', 'DejaVu Sans Mono', monospace;
  font-size: 90%;
  line-height: 140%;
  white-space: pre;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -o-pre-wrap;
  text-align: left;
  background: rgba(0, 0, 0, 0.1);
`;
