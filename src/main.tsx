import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";

import { DataContextProvider, useDataContext } from "./api/context/DataContext.tsx";
import "./index.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <DataContextProvider>
        <App />       
      </DataContextProvider>      
    </NextUIProvider>
  </React.StrictMode>
);
