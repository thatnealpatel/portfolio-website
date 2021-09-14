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
  