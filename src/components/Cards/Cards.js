import React from "react";
import Button from "../UI/Button/Button";
import {
  faTrash,
  faPlus,
  faArrowLeft,
  faArrowRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Cards.module.css";

function Cards() {
  const clearButton = [classes.btn, classes.clear];
  const addCardButton = [classes.btn, classes.btnSmall];
  const addCardHidden = [classes.btn, classes.btnSmall, classes.btnGhost];
  const cardActive = [classes.card, classes.active];
  return (
    <div className={classes.body}>
      <Button
        id="clear"
        buttonClasses={clearButton.join(" ")}
        iconObject={faTrash}
        content="Clear Cards"
      />

      <h1>
        Memory Cards
        <Button
          id="show"
          buttonClasses={addCardButton.join(" ")}
          iconObject={faPlus}
          content="Add New Card"
        />
      </h1>

      <div id="cards-container" className={classes.cards}>
        <div className={cardActive.join(" ")}>
          <div className={classes.innerCard}>
            <div className={classes.innerCardFront}>
              <p>What is PHP?</p>
            </div>
            <div className={classes.innerCardBack}>
              <p>A programming language</p>
            </div>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.innerCard}>
            <div className={classes.innerCardFront}>
              <p>What is PHP?</p>
            </div>
            <div className={classes.innerCardBack}>
              <p>A programming language</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.navigation}>
        <Button
          id="prev"
          buttonClasses={classes.navButton}
          iconObject={faArrowLeft}
        ></Button>

        <p id="current"></p>

        <Button
          id="next"
          buttonClasses={classes.navButton}
          iconObject={faArrowRight}
        ></Button>
      </div>

      <div id="add-container" className={classes.addContainer}>
        <h1>
          Add New Card
          <Button
            id="hide"
            buttonClasses={addCardHidden}
            iconObject={faTimes}
          />
        </h1>

        <div className={classes.formGroup}>
          <label for="question">Question</label>
          <textarea id="question" placeholder="Enter question..."></textarea>
        </div>

        <div className={classes.formGroup}>
          <label for="answer">Answer</label>
          <textarea id="answer" placeholder="Enter Answer..."></textarea>
        </div>

        <Button
          id="add-card"
          buttonClasses={classes.btn}
          iconObject={faPlus}
          content="Add Card"
        ></Button>
      </div>
    </div>
  );
}

export default Cards;
