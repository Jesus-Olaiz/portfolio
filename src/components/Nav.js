import { Link } from "react-router-dom";

import { useState } from "react";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSquareJs, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const square = <FontAwesomeIcon className='file-svg' icon={faSquareJs} />;

const github = <FontAwesomeIcon className="git-hub-svg" icon={faGithub} />

const linkedin = <FontAwesomeIcon className="linkedIn-svg" icon={faLinkedin} />

export default function Nav(props) {
  const [selected, setSelected] = useState("Home");

  const onClick = (e) => {
    setSelected(e.target.name);
  };

  return (
    <>
      <div className='nav'>
        <div className='pages'>
          <Link onClick={onClick} name='Home' className='link' to={"/"}>
            {selected === "Home" ? <div className='border'></div> : null}
            <span className='linkIcon'>{square}</span>Home.js
          </Link>
          <Link onClick={onClick} name='About' className='link' to={"/about"}>
            {selected === "About" ? <div className='border'></div> : null}
            <span className='linkIcon'>{square}</span>About.js
          </Link>
          <Link
            onClick={onClick}
            name='Projects'
            className='link'
            to={"/projects"}
          >
            {selected === "Projects" ? <div className='border'></div> : null}
            <span className='linkIcon'>{square}</span>Projects.js
          </Link>
        </div>

        <div className='socialContacts'>
          <a href='https://github.com/Jesus-Olaiz'>{github}</a>

          <a href="https://www.linkedin.com/in/jesus-olaiz-469355296">{linkedin}</a>
        </div>
      </div>

      <div className="filepath">
        {`src > components >`} <span className="filePathIcon">{square}</span> {selected}{`.js > ...`}
      </div>
    </>
  );
}
