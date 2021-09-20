import Typist from 'react-typist';
import * as React from 'react';
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
export default Splash;