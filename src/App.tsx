import * as React from 'react';
import { useState } from 'react';
import './App.css';

/**
App
  Single Page Application.
*/
function App() {

  const [activeIndex, setActiveIndex] = useState(0);

  const navClick = (index: number) => {
    setActiveIndex(index);
    console.log("clicked:", activeIndex);
  };

  const linkedin = "https://linkedin.com/in/thatnealpatel";
  const github = "https://github.com/nealdotpy";
  const resume = "https://nealdotpy.dev/static/media/resume.ce359c80.pdf";

  return (
    <div className="App">
      <nav className="min-nav no-select">
        <NavItem link="#" index={0} isActive={activeIndex === 0} onClick={navClick} name="/neal.html" />
        <NavItem link="#" index={1} isActive={activeIndex === 1} onClick={navClick} name="/doc/" />
        <NavItem link="#" index={2} isActive={activeIndex === 2} onClick={navClick} name="/src/" />
        <NavItem link={resume} index={3} isActive={activeIndex === 3} onClick={navClick} name="/ext/resume.pdf" />
        <NavItem link={linkedin} index={4} isActive={activeIndex === 4} onClick={navClick} name="/ext/linkedin.txt" /> 
        <NavItem link={github} index={5} isActive={activeIndex === 5} onClick={navClick} name="/ext/github.txt" />     
      </nav>
    </div>
  );
}


/*
NavItem
  Abstraction for nav elements.
  Takes NavItemProps in order to faciliate dynamic class assignment.
  Additionally, there exists one hard-coded component: 
    this.props.index >= 3 :: indicates that NavItem's with index gte 3 
    are externally linked elements, while all else renders on page.
*/
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
      { this.props.index >= 3 ?
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