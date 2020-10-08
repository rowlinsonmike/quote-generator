import React, { useEffect, useState } from "react";
import GlobalStyle from "./global-styles";
import AppContainer from "./app-styles";
import Fade from "./components/fade";
import Spinner from "./components/spinner";
import getQuote from "../utils/get-quote";

function App() {
  const [show, setShow] = useState(false);
  const [quoteData, setQuoteData] = useState({
    quoteText: null,
    quoteAuthor: null,
  });
  const updateQuote = async () => {
    setShow(false);
    const { quoteText, quoteAuthor } = await getQuote();
    setQuoteData({ quoteText, quoteAuthor });
    setShow(true);
  };
  useEffect(() => {
    updateQuote();
  }, []);
  return (
    <AppContainer>
      <GlobalStyle />
      <Fade show={!show}>
        <Spinner />
      </Fade>
      <Fade show={show}>
        <div className="quote-container" id="quote-container">
          <div
            className={`quote-text ${
              (quoteData?.quoteText?.length || 0) > 50 && "long-text"
            }`}
            id="quote-text"
          >
            <i className="las la-quote-left"></i>
            <span id="quote">{quoteData.quoteText}</span>
          </div>
          <div className="quote-author">
            <span id="author">
              <i className="las la-at"></i>
              <span>{quoteData.quoteAuthor}</span>
            </span>
          </div>
          <div className="button-container">
            <button onClick={updateQuote} className="new-quote">
              <i className="las la-sync"></i>
              <span>New Quote</span>
            </button>
          </div>
        </div>
        <div id="footer">
          Made with <span style={{ color: "#e25555" }}>&hearts;</span> by
          Michael Rowlinson
        </div>
      </Fade>
    </AppContainer>
  );
}

export default App;
