import React, { Component, useEffect, useState } from "react";
import { random } from 'lodash';
import 'typeface-roboto';
import QuoteMachine from "./components/QuoteMachine";
import { Grid, withStyles } from "@material-ui/core";

const styles = {
  container: {
    height: '100vh',
    margin: 'auto',
    width: '50%',
  }
}

function App({ classes }) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     quotes: [],
  //     selectedQuoteIndex: null,
  //   };
  //   this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this)
  //   this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
  // }
  const [quotes, setQuotes] = useState([]);
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json");
      const quotes = await data.json();
      setQuotes(quotes);
      setSelectedQuoteIndex(random(0, quotes.length - 1));
    } 
    fetchData();
  }, []);

  function getSelectedQuote() {
    if (!quotes.length || !Number.isInteger(selectedQuoteIndex)) {
      return undefined;
    }
    return quotes[selectedQuoteIndex]
  }

  /**
   * Returns an integer representing an index in state.quotes
   * If state.quotes is empty, returns undefined
   * @returns state.quote
   */
  function generateNewQuoteIndex() {
    if (!quotes.length) {
      return undefined;
    }
    return random(0, quotes.length - 1);
  }

  function assignNewQuoteIndex() {
    setSelectedQuoteIndex(generateNewQuoteIndex())
  }

  return (
    <Grid className={classes.container} id="quote-box" container justifyContent="center" alignContent="center">
      <Grid item xs={11} lg={8}>
        {
          getSelectedQuote()
          ? <QuoteMachine
            selectedQuote={getSelectedQuote()}
            assignNewQuoteIndex={assignNewQuoteIndex} />
            : null
        }
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(App);
