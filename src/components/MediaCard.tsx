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