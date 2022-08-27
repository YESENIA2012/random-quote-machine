import React from 'react';
import arrayQuotes from './array-quotes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTumblr } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

class Bodybox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayQuotesIndex: 0,
    };
    this.paintQuote = this.paintQuote.bind(this);
  }

  paintQuote() {
    let randomIndex = Math.floor(
      Math.random() * (arrayQuotes.length - 1 - 0 + 1) + 0
    );
    this.setState({ arrayQuotesIndex: randomIndex });
  }

  render() {
    const quoteElement = arrayQuotes[this.state.arrayQuotesIndex];
    const backgroundColorStyle = { backgroundColor: quoteElement.background };
    const colorStyle = { color: quoteElement.color };

    return (
      <div className="box-container" style={backgroundColorStyle}>
        <div className="quote-box">
          <p className="text" style={colorStyle}>
            <FontAwesomeIcon icon={faQuoteLeft} /> {quoteElement.quote}
          </p>
          <span className="author" style={colorStyle}>
            -{quoteElement.author}
          </span>
          <div className="buttons">
            <a
              className="share-quote"
              href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Either%20you%20run%20the%20day%2C%20or%20the%20day%20runs%20you.%22%20Jim%20Rohn"
              target={'_blanck'}
            >
              <FontAwesomeIcon icon={faTwitter} style={backgroundColorStyle} />
            </a>
            <a
              className="share-quote"
              href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DBuddha%26content%3DThe%2Bmind%2Bis%2Beverything.%2BWhat%2Byou%2Bthink%2Byou%2Bbecome.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"
              target={'_blanck'}
            >
              <FontAwesomeIcon icon={faTumblr} style={backgroundColorStyle} />
            </a>
            <button
              className="new-quote"
              onClick={this.paintQuote}
              style={backgroundColorStyle}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Bodybox;
