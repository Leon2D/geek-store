import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider} from "react-query";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RouterMap from "./components/Router";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterMap />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
