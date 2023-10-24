import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App"
import { CookiesProvider } from "react-cookie";


const root = createRoot(document.getElementById("root"));
const title = "どの写真が美味しそうに見えるかのアンケート"
//document.title = title
root.render(
  <StrictMode>
    <CookiesProvider>
      <App title={title}/>
    </CookiesProvider>
  </StrictMode>
);