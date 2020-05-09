import React from "react";

import GithubLogo from '../assets/images/github.svg';

function Header() {
  return (
    <header className="App-header">
      <h1>Ballcapz</h1>
      <div className="social-links">
        <a href="https://github.com/Ballcapz"><img src={GithubLogo} alt="Github" /></a>
        <a href="mailto:zachary.a.johnson.10@gmail.com">Contact</a>
      </div>
    </header>
  );
}

export default Header;