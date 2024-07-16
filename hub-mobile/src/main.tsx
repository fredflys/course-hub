import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import gqlClient from "./graphql/apollo.ts";
import { ConfigProvider } from "antd-mobile";
import enUS from "antd-mobile/es/locales/en-US";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider locale={enUS}>
    <ApolloProvider client={gqlClient}>
      <App />
    </ApolloProvider>
  </ConfigProvider>
);
