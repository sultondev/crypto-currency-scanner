import { useRecoilState } from "recoil";
import { navBarDefaultStateData } from "../../recoil/atoms";
("./NavBar.style.css");
const NavBar = () => {
  const [menuState, setMenuState] = useRecoilState<string>(
    navBarDefaultStateData
  );
  console.log(menuState);
  return (
    <>
      <nav
        className={`nav sm:absolute top-0 w-[40%] bg-white h-full px-4 ${menuState} z-10`}
      >
        <ul className="nav-list flex sm:flex-col">
          <li className="nav-list__item py-3">
            <a href="#" className="nav-list__links ">
              Dashboard
            </a>
          </li>
          <li className="nav-list__item py-3">
            <a href="#" className="nav-list__links ">
              Alerts
            </a>
          </li>
          <li className="nav-list__item py-3">
            <a href="#" className="nav-list__links ">
              Screeners
            </a>
          </li>
          <li className="nav-list__item py-3">
            <a href="#" className="nav-list__links ">
              Support
            </a>
          </li>
          <li className="nav-list__item py-3">
            <a href="#" className="nav-list__links ">
              More
            </a>
          </li>
        </ul>
      </nav>

      {menuState === "animate-show-menu left-0" ? (
        <div
          className={`absolute w-full bg-slate-300/50 h-full left-0 top-0 -z-2`}
          onClick={() => {
            setMenuState("animate-hide-menu -left-1/2");
          }}
        ></div>
      ) : (
        false
      )}
    </>
  );
};

export default NavBar;
