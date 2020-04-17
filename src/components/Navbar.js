import React, {useState} from "react";
import { FaSun, FaMoon, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "gatsby";

const Navbar = ({isDarkMode, changeMode}) => {

  const icon = isDarkMode ? <FaSun /> : <FaMoon />;
  const [index, setIndex] = useState(0);

  const changeLeft = () => {
    console.log(content)
    if (index === 0)
      setIndex(content.length - 1);
    else
      setIndex(index - 1);
  };

  const changeRight = () => {
    if (index === content.length - 1)
      setIndex(0);
    else
      setIndex(index + 1);
  };

  const content = [
    <Link className={`nav-item link ${index === 0 ? 'active-item': ''}`} to="/">Início</Link>,
    <Link className={`nav-item link ${index === 1 ? 'active-item': ''}`} to="/">Blog</Link>,
    <Link className={`nav-item link ${index === 2 ? 'active-item': ''}`} to="/">Portfólio</Link>,
    <Link className={`nav-item link ${index === 3 ? 'active-item': ''}`} to="/">Contato</Link>,
  ];

  return (
    <nav className="navbar">
      <div className="nav-items">
        <FaAngleLeft className="nav-item link nav-arrow" onClick={changeLeft} />
        <div style={{width: '110px', textAlign: 'center'}}>
          {content.map(item => item)}
        </div>
        <FaAngleRight className="nav-item link nav-arrow" onClick={changeRight} />
      </div>
      <div className="nav-item theme-changer" onClick={changeMode} >{icon}</div>
    </nav>
  )
};

export default Navbar;