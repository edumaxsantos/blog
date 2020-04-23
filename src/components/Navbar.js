import React, {useState, useEffect} from "react";
import { FaSun, FaMoon, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "gatsby";
import { Location } from "@reach/router";

const Navbar = ({isDarkMode, changeMode, location }) => {

  const locationsTo = ['/', '/blog/', '/portfolio/', '/contact'];

  const findIndex = () => {
    const rootPath = location.pathname.match(/(\/\D*\/*).*/);
    return locationsTo.findIndex((el) => rootPath[1] === el);
  };

  const icon = isDarkMode ? <FaSun /> : <FaMoon />;
  const [index, setIndex] = useState(findIndex());
  const [classIndex, setClassIndex] = useState(['', '', '', '']);

  const changeLeft = () => {
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


  useEffect(() => {
    const copyOfClassIndex = classIndex.map((item, i) => {
      if (i === index)
        return 'active-item';
      return '';
    });
    
    setClassIndex(copyOfClassIndex);
  // eslint-disable-next-line
  }, [index]);
  

  

  const content = [
    <Link key="0" className={`nav-item nav-link ${classIndex[0]}`} tabIndex="-1" to="/">Início</Link>,
    <Link key="1" className={`nav-item nav-link ${classIndex[1]}`} tabIndex="-1" to="/blog/">Blog</Link>,
    <Link key="2" className={`nav-item nav-link ${classIndex[2]}`} tabIndex="-1" to="/">Portfólio</Link>,
    <Link key="3" className={`nav-item nav-link ${classIndex[3]}`} tabIndex="-1" to="/">Contato</Link>,
  ];

  return (
    <nav className="navbar">
      <div className="nav-items">
        <FaAngleLeft className="nav-item nav-link nav-arrow" onClick={changeLeft} />
        <div className="nav-menu">
          {content.map(item => item)}
        </div>
        <FaAngleRight className="nav-item nav-link nav-arrow" onClick={changeRight} />
      </div>
      <div className="nav-item theme-changer" onClick={changeMode} role="button" tabIndex="-1" >{icon}</div>
    </nav>
  )
};

export default props => (
  <Location>
    {locationProps => <Navbar {...locationProps} {...props} />}
    </Location>
);