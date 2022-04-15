import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ButtonItems from "./components/ButtonItems";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import CommunityItems from "./components/CommunityItems";
import { Layout } from "antd";
import "antd/dist/antd.min.css";
import HOME_BG from "./assets/HOME_BG.png";
import MMW_Logo from "./assets/MMW_Logo.png";
import "./style.css";

const { Header, Footer } = Layout;

const styles = {
  layout: {
    backgroundImage: `url(${HOME_BG})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    overflow: "auto",
    
  },
  content: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    marginTop: "100px",
    padding: "10px",
    marginBottom: "70px",
    overflow: "auto",
    fontFamily: "LeonSans-Regular",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "transparent",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0",
    fontFamily: "LeonSans-Regular",
  },
  logo: {
    display: "flex",
    width: "20%",
    margin: "40px 0 0 30px"
  },
  footer: {
    width: "100%",
    overflow: "auto",
    position: "fixed",
    bottom: "0",
    backgroundColor: "transparent"
  }
};

function App() {
  return (
    <Layout style={styles.layout}>
      <Router>
        <Header style={styles.header}>
          <Link to='/'>
            <div style={styles.logo}>
              <img src={MMW_Logo} alt='MMW_Logo' />
            </div>
          </Link>
          <ButtonItems />
        </Header>
        <div style={styles.content}>
          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </div>
        <Footer style={styles.footer}>
          <CommunityItems />
        </Footer>
      </Router>
    </Layout>
  );
}

export default App;
