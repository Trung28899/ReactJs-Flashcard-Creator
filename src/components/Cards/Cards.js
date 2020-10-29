import React, { useState } from "react";
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
  const [cardActive, setCardActive] = useState([classes.card]);
  const [addContainer, setAddContainer] = useState([classes.addContainer]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [qAndA, setQAndA] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  function toggleAddContainer() {
    addContainer.length > 1
      ? setAddContainer([classes.addContainer])
      : setAddContainer([classes.addContainer, classes.show]);
    setAnswer("");
    setQuestion("");
  }

  function toggleShowAnswer() {
    cardActive.includes(classes.showAnswer)
      ? setCardActive([classes.card, classes.active])
      : setCardActive([classes.card, classes.active, classes.showAnswer]);
  }

  function onChangeQuestion(event) {
    setQuestion(event.target.value);
  }

  function onChangeAnswer(event) {
    setAnswer(event.target.value);
  }

  function createCard() {
    setQAndA([...qAndA, { question: question, answer: answer }]);
    toggleAddContainer();
  }

  function prevCard() {
    const compareIndex = qAndA.length;
    const currentActive = activeIndex;
    if (activeIndex === 0) {
      setActiveIndex(compareIndex - 1);
    } else {
      setActiveIndex(currentActive - 1);
    }
  }

  function nextCard() {
    const compareIndex = qAndA.length;
    const currentActive = activeIndex;
    if (activeIndex === compareIndex - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(currentActive + 1);
    }
  }

  function clearCards() {
    setQAndA([]);
  }

  const cardItems = qAndA.map((item, index) => {
    let cardItem = [];
    cardItem.push(cardActive[0]);
    if (index === activeIndex) {
      cardItem.push(classes.active);
    }
    if (cardActive.includes(classes.showAnswer)) {
      cardItem.push(classes.showAnswer);
    }

    return (
      <div
        onClick={toggleShowAnswer}
        key={index}
        className={cardItem.join(" ")}
      >
        <div className={classes.innerCard}>
          <div className={classes.innerCardFront}>
            <p>{item.question}</p>
          </div>
          <div className={classes.innerCardBack}>
            <p>{item.answer}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={classes.body}>
      <Button
        id="clear"
        buttonClasses={clearButton.join(" ")}
        iconObject={faTrash}
        content="Clear Cards"
        clicked={clearCards}
      />

      <h1>
        Memory Cards
        <Button
          id="show"
          buttonClasses={addCardButton.join(" ")}
          iconObject={faPlus}
          content="Add New Card"
          clicked={toggleAddContainer}
        />
      </h1>

      <div id="cards-container" className={classes.cards}>
        {cardItems}
      </div>

      <div className={classes.navigation}>
        <Button
          id="prev"
          buttonClasses={classes.navButton}
          iconObject={faArrowLeft}
          clicked={prevCard}
        ></Button>

        <p id="current">
          {activeIndex + 1}/{qAndA.length}
        </p>

        <Button
          id="next"
          buttonClasses={classes.navButton}
          iconObject={faArrowRight}
          clicked={nextCard}
        ></Button>
      </div>

      <div id="add-container" className={addContainer.join(" ")}>
        <h1>
          Add New Card &nbsp;
          <Button
            id="hide"
            buttonClasses={addCardHidden.join(" ")}
            iconObject={faTimes}
            content="Cancel"
            clicked={toggleAddContainer}
          />
        </h1>

        <div className={classes.formGroup}>
          <label>Question</label>
          <textarea
            onChange={onChangeQuestion}
            id="question"
            placeholder="Enter question..."
            value={question}
          ></textarea>
        </div>

        <div className={classes.formGroup}>
          <label>Answer</label>
          <textarea
            onChange={onChangeAnswer}
            id="answer"
            placeholder="Enter Answer..."
            value={answer}
          ></textarea>
        </div>

        <Button
          id="add-card"
          buttonClasses={classes.btn}
          iconObject={faPlus}
          content="Add Card"
          clicked={createCard}
        ></Button>
      </div>
    </div>
  );
}

export default Cards;
