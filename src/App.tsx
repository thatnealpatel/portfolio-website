import * as React from 'react';
import Typist from 'react-typist';
import { useState } from 'react';
import './App.css';

/**
App
  Single Page Application.
  I am aware that you typically re-factor things into a src/components folder; however,
  I really like the way this looks inside of one source file. In addition, this project
  is all about minimialism... why not live on the edge a little? 
*/
function App() {
  const [page, setPage] = useState(0);

  const navClick = (index: number) => {
    setPage(index);
    // console.log("clicked:", activeIndex);
  };

  const linkedin = "https://linkedin.com/in/thatnealpatel";
  const github = "https://github.com/thatnealpatel";
  const fork_me = "https://github.com/thatnealpatel/portfolio-website";

  return (
    <div className="App">
      <nav className="min-nav no-select">
        <NavItem link="#" index={0} isActive={page === 0} onClick={navClick} name="/neal.html" />
        <NavItem link="#" index={1} isActive={page === 1} onClick={navClick} name="/doc/" />
        <NavItem link="#" index={2} isActive={page === 2} onClick={navClick} name="/src/" />
        <NavItem link={linkedin} index={4} isActive={page === 4} onClick={navClick} name="/ext/linkedin.sh" /> 
        <NavItem link={github} index={5} isActive={page === 5} onClick={navClick} name="/ext/github.sh" />
        <NavItem link={fork_me} index={6} isActive={page === 6} onClick={navClick} name="/ext/fork_me.sh" />       
      </nav>

      <div className="faux-paper">
        {page == 0 ?
          <Splash/>
          :
          null
        }
        {page == 1 ?
          <Doc/>
          :
          null
        }
        {page == 2 ?
          <Src/>
          :
          null
        }
        {page == 4 ?
          <FauxStdOut 
            command="./ext/linkedin.sh"
            link={linkedin}
          />
          :
          null
        }
        {page == 5 ?
          <FauxStdOut 
            command="./ext/github.sh"
            link={github}
          />
          :
          null
        }
        {page == 6 ?
          <FauxStdOut 
            command="./ext/fork_me.sh"
            link={fork_me}
          />
          :
          null
        }
      </div>
    </div>
  );
}


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


/**
FauxStdOut
  Abstraction for the fake stdout that is printed when a user clicks an external nav link.
*/
interface FauxStdOutProps {
  command: string;
  link: string;
}

interface FauxStdOutState {
}

class FauxStdOut extends React.Component<FauxStdOutProps, FauxStdOutState> {
  
  constructor(props) {
      super(props);
  }

  render() {
    return <div>
      <p className="fp-header">{`> ${this.props.command}`}</p>
      <p className="fp-body">
        {"HTTP 200 "}
        <span className="status-green">OK</span>
        {` ${this.props.link}`}
      </p>
    </div>
  }

}


/**
Splash
  Refactored FauxPage component.
  This component fits into the FauxPaper div and has basic information about
  myself and navigation.
*/
class Splash extends React.Component {

  // <p className="fp-header">{"> render /neal.html --ascii-only"}</p>
  render() {
    return <div>
      <Typist avgTypingDelay={25} cursor={{show: false}}>
        <p className="fp-header">{"> render /neal.html --ascii-only --enable-typing"}</p>
      </Typist>
      <Typist avgTypingDelay={1} stdTypingDelay={10} cursor={{show: false}}>
        <Typist.Delay ms={1500+500} />
        <p className="fp-body">
          {"hi, i'm neal."}
          <br/><br/>{"i am a software engineer who vicariously lives through the terminal."}
          <br/>{"hobbies include: cooking, reading, finance, and painting."}
          <br/><br/>{"this portfolio is meant to mimick my personal system's theme."} 
          <br/>{"additionally, it was designed with minimalism in mind."}
          <br/>{"eventually, i would like to publish a noscript compatible version."} 
          <br/><br/><br/><br/>{"navigation:"}
          <br/><br/>{`/doc/ contains a collection of medium articles i have written, 
          often coinciding with projects that i've completed.`}
          <br/><br/>{"/src/ contains a collection of projects and their respective codebases."}
          <br/><br/>{"/ext/* are various external links that might be relevant."} 
        </p>
      </Typist>
      <div className="gutter">
        <p className="fp-header">{"total 4K, read-only, no-error"}</p>
      </div>
    </div>
  }
}


/**
Doc
  Refactored FauxPage component.
  This component fits into the FauxPaper div and maps each of the desired cards containing
  medium article previews.
  Eventually, it would be nice to use an API for this; however, for the time being
  it will remain hardcoded.
*/
function Doc() {

  const cards = [
    {
      title: "I Cheated On Windows And It Was The Best Decision Of My Life",
      body: `The Windows Operating System and I had been together for around four years. 
              I admit: I had been in an open relationship with both Windows and macOS for some time; 
              however, Windows and I finally went exclusive. The straw that broke the camel’s back 
              was the constant nagging. I’m sorry Windows, it’s not you; it’s me...no seriously, 
              I cheated on you.`,
      link: "https://nealdotpy.medium.com/i-cheated-on-windows-and-it-was-the-best-decision-of-my-life-b380a2f9d9c9",
      linkLabel: "Read More >",
      wait: 100+1500
    },
    {
      title: "If I Can’t Make Money, My Python Trading Bot Will...",
      body: `When I was a student in my first year at University, my classes bore me. I wanted to 
      learn how to make money to get paid to go to the classes I didn’t like.`,
      link: "https://nealdotpy.medium.com/if-i-cant-make-money-my-python-trading-bot-will-368a592b3c6d",
      linkLabel: "Read More >",
      wait: 225+1500
    },
    {
      title: "I Couldn’t Decided What Camera To Buy So I Made One With A Brain",
      body: `TRecently, I’ve taken up uploading videos to YouTube that combine various passions of 
      mine including: coding and comedy. I’ve been trying to decide what kind of camera I want to 
      get, and while it may not be an urgent problem to solve, I ended up researching cameras for 
      longer than I’d like to admit.`,
      link: "https://nealdotpy.medium.com/i-couldnt-decided-what-camera-to-buy-so-i-made-one-with-a-brain-c3e7a83faa0e",
      linkLabel: "Read More >",
      wait: 300+1500
    }
  ];

  return( 
    <div className="faux-terminal">
      <Typist avgTypingDelay={25} cursor={{show: false}}>
        <p className="fp-header">{"> ls /doc/ | render --use-card Doc"}</p>
      </Typist>
      <div className="media">
        {cards.map( (card) => (
          <MediaCard wait={card.wait}
            title={card.title}
            body={card.body}
            link={card.link}
            linkLabel={card.linkLabel} />
        ))}
      </div>
      <div className="gutter">
        <p className="fp-header">{"total "}{cards.length * 20}{"K, read-only, no-error"}</p>
      </div>
    </div>
  );
}


/**
Src
  Refactored FauxPage component.
  This component fits into the FauxPaper div and maps each of the desired cards containing
  codebase information. 
  Eventually, it would be nice to use an API for this; however, for the time being
  it will remain hardcoded.
*/
function Src() {

  const cards = [
    {
      title: "cli-stonks",
      body: `A command line interface for running real-time ticker tapes, checking account 
      information, and obtaining real-time quotes for various instruments, and more!`,
      link: "https://github.com/nealdotpy/cli-stonks",
      linkLabel: "View on Github >",
      wait: 100+1500
    },
    {
      title: "ml-cam",
      body: `Raspberry Pi Zero Camera Pi implementation powered by Machine Learning via 
      Google Cloud Platform's Compute Engine.`,
      link: "https://github.com/nealdotpy/ml-cam",
      linkLabel: "View on Github >",
      wait: 170+1500
    },
    {
      title: "public-trading-bot",
      body: `A python-based implementation of a stock trading bot that uses the Alpaca API to 
      conduct live and paper trades.`,
      link: "https://github.com/nealdotpy/public-trading-bot",
      linkLabel: "View on Github >",
      wait: 300+1500
    } 
  ];

  return( 
    <div className="faux-terminal">
      <Typist avgTypingDelay={25} cursor={{show: false}}>
        <p className="fp-header">{"> ls /src/ | render --use-card Src"}</p>
      </Typist>
      <div className="media">
        {cards.map( (card) => (
          <MediaCard wait={card.wait} 
            title={card.title} 
            body={card.body} 
            link={card.link} 
            linkLabel={card.linkLabel} />
        ))}
      </div>
      <div className="gutter">
        <p className="fp-header">{"total "}{cards.length * 20}{"K, read-only, no-error"}</p>
      </div>
    </div>
  );
}


/**
MediaCard
  Minimal card for displaying information.
  Note: Only using target="_blank" since this is merely a personal website.
*/
interface MediaCardProps {
  title: string;
  body: string;
  link: string;
  linkLabel: string;
  wait: number;
}

interface MediaCardState {
  hidden: boolean;
}

class MediaCard extends React.Component<MediaCardProps, MediaCardState> {

  constructor(props) {
    super(props);
    this.state = {hidden: true};
  }

  getInitalState = () => {
    return({hidden: "hidden"});
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({hidden: false})
    }, this.props.wait);
  }

  render() {
    return this.state.hidden ? '' : <div className={`media-card`}>
      <p className="card-title">{this.props.title}</p>
      <p className="card-body">{this.props.body}</p>
      <div className="">
        <a target="_blank" className="card-link" href={this.props.link}>{this.props.linkLabel}</a>
      </div>
    </div>
  }
}


export default App;

