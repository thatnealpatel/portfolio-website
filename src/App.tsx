import * as React from 'react';
import { useState } from 'react';
import './App.css';


function App() {

  const [activeIndex, setActiveIndex] = useState(0);

  const navClick = (index: number) => {
    setActiveIndex(index);
    console.log("clicked:", activeIndex);
  };

  const linkedin = "https://linkedin.com/in/thatnealpatel";
  const github = "https://github.com/nealdotpy"

  return (
    <div className="App">
      <nav className="min-nav no-select">
        <NavItem link="#" index={0} isActive={activeIndex === 0} onClick={navClick} name="/neal.html" />
        <NavItem link="#" index={1} isActive={activeIndex === 1} onClick={navClick} name="/doc/" />
        <NavItem link="#" index={2} isActive={activeIndex === 2} onClick={navClick} name="/src/" />
        <NavItem link="#" index={3} isActive={activeIndex === 3} onClick={navClick} name="/ext/resume.pdf" />
        <NavItem link={linkedin} index={4} isActive={activeIndex === 4} onClick={navClick} name="/ext/linkedin.txt" /> 
        <NavItem link={github} index={5} isActive={activeIndex === 5} onClick={navClick} name="/ext/github.txt" />     
      </nav>
    </div>
  );
}


interface NavItemProps {
  link: string;
  index: number;
  isActive: boolean;
  onClick: Function;
  name: string;
}

interface NavItemState {
}

class NavItem extends React.Component<NavItemProps, NavItemState> {
  handleClick = () => this.props.onClick(this.props.index)

  render() {
    return <li className="nav-item">
      { this.props.index >= 4 ?
        <a 
          href={this.props.link}
          className={this.props.isActive ? 'nav-item__selected' : ''} 
          onClick={this.handleClick}>{this.props.name}
        </a>
        :
        <a
          className={this.props.isActive ? 'nav-item__selected' : ''} 
          onClick={this.handleClick}>{this.props.name}
        </a>
      }
    </li>
  }
}

export default App;

/*
<li className={`nav-item ${activeIndex === 1 ? 'nav-item__selected' : ''}`}>
          <a>{"/doc/"}</a>
        </li>
        <li className="nav-item">
          <a>{"/src/"}</a>
        </li>
        <li className="nav-item">
          <a>{"/ext/resume.pdf"}</a>
        </li>
        <li className="nav-item">
          <a href="https://linkedin.com/in/thatnealpatel">{"/ext/linkedin.txt"}</a>
        </li>
        <li className="nav-item">
          <a href="https://github.com/nealdotpy">{"/ext/github.txt"}</a>
        </li>
*/