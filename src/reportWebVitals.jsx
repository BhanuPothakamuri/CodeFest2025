import React from "react";
import {jsx as _jsx} from "react/jsx-runtime"
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import ReactDOM from "react-dom/client";
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
