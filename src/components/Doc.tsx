import Typist from 'react-typist';
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