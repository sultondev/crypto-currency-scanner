import NavBar from "../NavBar/NavBar.component";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import { useRecoilState } from "recoil";
import { navBarDefaultStateData } from "../../recoil/atoms";

const HeaderMenu = () => {
  const [menuState, setMenuState] = useRecoilState<string>(
    navBarDefaultStateData
  );

  function setClassState(
    state: string,
    stateChanger: (value: string) => void,
    firstClass: string,
    secondClass: string
  ) {
    if (state === firstClass) {
      stateChanger(secondClass);
    } else {
      stateChanger(firstClass);
    }
  }

  return (
    <header className="header w-full flex justify-between items-center bg-slate-800 px-4 sm: py-6">
      <h1 className="text-2xl text-white">Logo</h1>
      <div className="absolute-wrapper">
        <NavBar />
      </div>
      <div className="button-wrapper">
        <button className="text-white">
          <PersonIcon color="inherit" fontSize="large" />
        </button>
        <button
          className="text-white"
          onClick={() => {
            setClassState(
              menuState,
              setMenuState,
              "animate-show-menu left-0",
              "animate-hide-menu -left-1/2"
            );
          }}
        >
          <MenuIcon color="inherit" fontSize="large" />
        </button>
      </div>
    </header>
  );
};

export default HeaderMenu;
