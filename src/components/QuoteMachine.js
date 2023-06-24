import React from "react";
// import Button from "./Button";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
  IconButton
} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


const QuoteMachine = ({ selectedQuote, assignNewQuoteIndex }) => (
  <Card>
    <CardContent>
      <Typography id="text">
        <span id="new-quote">{selectedQuote.quote}</span> - <span id="author">{selectedQuote.author}</span>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={assignNewQuoteIndex}>
        New Quote
      </Button>
      <IconButton
        id="tweet-quote"
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=freeCodeCamp`}>
        <FontAwesomeIcon icon={faTwitter} size="sm"></FontAwesomeIcon>
      </IconButton>
    </CardActions>
  </Card>
);

export default QuoteMachine;
