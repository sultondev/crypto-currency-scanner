import HeaderMenu from "../HeaderMenu/HeaderMenu.component";
import "./App.style.css";
import Footer from "../Footer/Footer.component";
import Main from "../Main/Main.component";

const App = () => {
  return (
    <section className="app h-screen flex flex-col justify-between">
      <HeaderMenu />
      <Main />
      <Footer />
    </section>
  );
};

export default App;
