import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import { Layout } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import Home from "components/Home";
import Text from "antd/lib/typography/Text";
import MenuItems from "./components/MenuItems";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <MenuItems />
          <div style={styles.headerRight}>
            <Chains />
            <NativeBalance />
            <Account />
          </div>
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/ethereum-boilerplate">
              <Redirect to="/home" />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
      </Footer>
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex" }}>
<svg width="100" height="36" viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)"><path fillRule="evenodd" clipRule="evenodd" d="M5.902.002 27.94 23.348V.736a.742.742 0 0 1 .448-.68.718.718 0 0 1 .278-.056h6.762v36h-6.654l-.003-.01-.014.01L7.05 13.18v22.084a.74.74 0 0 1-.212.52.722.722 0 0 1-.514.216H0V0h5.9l.002.002Zm83.606 27.305.36-.924h-.004l-4.837-11.766h2.206l3.63 9.804 3.427-9.806h2.116l-4.79 12.653h-.005a10.187 10.187 0 0 1-.965 1.951c-1.399 1.936-4.512 1.129-4.512 1.129l-.013-1.74c.333.062.67.099 1.01.11 1.376.065 1.668-.347 1.847-.543a2.98 2.98 0 0 0 .531-.866v-.002ZM48.32 14.392c1.597-.003 2.95.321 3.804 1.296.937 1.213 1.188 3.114.855 5.612l-.014-.014h-7.803c-.006 1.023.164 1.964.712 2.721.832.995 2.297 1.016 3.854.894.99-.1 1.957-.28 2.883-.62l-.004 1.644c-1.227.558-2.665.843-4.3.872-2.249-.028-3.792-.797-4.521-2.425-.642-1.624-.693-3.503-.504-5.489l-.008-.018c.088-.727.208-1.37.567-2.11.756-1.563 1.976-1.92 2.44-2.069a6.876 6.876 0 0 1 2.039-.294Zm16.377 8.703v-6.764h-1.775v-1.715h1.775l.312-2.89h1.62v2.89h4.214v1.715H66.63v6.222c.045.924.251 1.699.63 1.963.98.649 2.308.517 3.708.22l-.018 1.674a8.623 8.623 0 0 1-3.556.28c-2.672-.5-2.68-2.933-2.7-3.592l.004-.003Zm14.024-8.456h-1.785v1.716h1.785v10.246h1.959V16.355h3.744V14.64H80.68v-.875c-.014-.478.161-.93.595-1.348.82-.546 2.135-.455 3.53-.261l-.012-1.679a8.681 8.681 0 0 0-3.303-.11c-1.996.416-2.939 1.959-2.77 4.273v-.001Zm-3.86 11.94V14.615h-1.96v11.962h1.96Zm-18.49-11.963h-1.785v1.715h1.785v10.247h1.96V16.331h3.743v-1.715H58.33v-.874c-.014-.478.16-.93.595-1.348.82-.546 2.134-.455 3.53-.261l-.013-1.68a8.703 8.703 0 0 0-3.302-.11c-1.996.417-2.94 1.96-2.77 4.273Zm-5.093 4.989h-6.12a6.571 6.571 0 0 1 .075-1.119c.22-1.394.883-1.804 1.284-1.977.513-.224 1.162-.316 1.891-.313v-.005c.705-.015 1.375.091 1.973.444.83.627 1.008 1.7.898 2.97h-.001Zm23.657-9.135v2.098h-2.114V10.47h2.114Z" fill="#272255"/><path d="M97.59 30.607c1.331 0 2.41-1.092 2.41-2.44 0-1.347-1.079-2.439-2.41-2.439-1.33 0-2.409 1.092-2.409 2.44 0 1.347 1.079 2.44 2.41 2.44Z" fill="#ED6DCD"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h100v36H0z"/></clipPath></defs></svg>
  </div>
);

export default App;
