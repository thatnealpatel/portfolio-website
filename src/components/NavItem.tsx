import React from 'react';
/**
NavItem
  Abstraction for nav elements.
  Takes NavItemProps in order to faciliate dynamic class assignment.
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
        { this.props.link != "#" ?
          <a
            target="_blank"
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
export default NavItem;