import * as React from 'react';
import Typist from 'react-typist';
import { useState } from 'react';
import './App.css';
import Doc from './components/Doc';
import MediaCard from './components/MediaCard';
import FauxStdOut from './components/FauxStdOut';
import NavItem from './components/NavItem';
import Splash from './components/Splash';
/**
App
*/
function App() {
  const [page, setPage] = useState(0);

  const navClick = (index: number) => {
    setPage(index);
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
        {page === 0 ?
          <Splash/>
          :
          null
        }
        {page === 1 ?
          <Doc/>
          :
          null
        }
        {page === 2 ?
          <Src/>
          :
          null
        }
        {page === 4 ?
          <FauxStdOut 
            command="./ext/linkedin.sh"
            link={linkedin}
          />
          :
          null
        }
        {page === 5 ?
          <FauxStdOut 
            command="./ext/github.sh"
            link={github}
          />
          :
          null
        }
        {page === 6 ?
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

export default App;

