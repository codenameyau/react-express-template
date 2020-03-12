import styled from 'styled-components';

export const StyledApp = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  padding: 1em;
`;

export const AppMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  .App-link {
    color: #61dafb;
  }
`;

export const CodeBlock = styled.code`
  width: 80%;
  margin: 1em 0;
  padding: 1em;
  border-radius: 0.5em;
  font-family: Monaco, Consolas, 'Andale Mono', 'DejaVu Sans Mono', monospace;
  font-size: 0.7em;
  line-height: 1.5em;
  white-space: pre;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -o-pre-wrap;
  text-align: left;
  background: rgba(0, 0, 0, 0.1);
  overflow-x: scroll;
`;
