import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import styled, { createGlobalStyle } from "styled-components/macro";

const Global = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,body {
  height: 100%;
  min-height: 100vh;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  color: #fff;
}

#root {
  height: 100%;

}
`;


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
