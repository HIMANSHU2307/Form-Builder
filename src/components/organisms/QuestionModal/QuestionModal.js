import React, { useState, useEffect } from "react";
import "./QuestionModal.css";
import { connect } from "react-redux";
import OrderedList from "../../molecules/OrderedList/OrderedList";
import ListItem from "../../atoms/ListItem/ListItem";

export const QuestionModal = ({ updateModal, onAddQuestion }) => {
  const [currentOption, setCurrentOption] = useState("");
  const [question, updateQuestion] = useState({questionType : "Text"})

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newQuestion = {...question}
    if(e.target.name !== "currentOption"){
      if (name == 'questionType') {
        newQuestion.questionOption = [];
      }
      newQuestion[name] = value
    }
    updateQuestion(newQuestion)
  }

  const handleOptionChange = (e) => {
    setCurrentOption(e.target.value);
  }

  const addQuestionOption = () => {
    const newQuestion = {...question}
    newQuestion.questionOption ? newQuestion.questionOption.push(currentOption) : newQuestion.questionOption = [currentOption]
    updateQuestion(newQuestion)
    setCurrentOption('');
  }

  const submitQuestion = (e) => {
    e.preventDefault();
    updateModal(false);
    debugger;
    onAddQuestion(question);
  }


  return (
    <div className="question-modal">

      <div className="question-modal__box">
        <h2>Add Question</h2>

        <div className="question-modal__box__question">
          <div>
            <label htmlFor="question-name">Question Title</label>
            <input name="questionName" id="question-name" type="text" onChange={handleChange} required/>
          </div>
          <div>
            <label htmlFor="question-type">Question Title</label>
            <select
              name="questionType"
              id="question-type"
              onChange={handleChange}
            >
              <option value="Text">Text</option>
              <option value="Multiple">Multiple Choice</option>
              <option value="Single">Single Radio</option>
            </select>
          </div>
        </div>

        <div className="question-modal__box__questionType">
          {question?.questionType === "Text" ? (
            <input placeholder="Answer will go here!!" disabled />
          ) : (
            <div>
              <OrderedList>
                {question.questionOption?.map((el) => <ListItem key={el}>{el}</ListItem>)}
              </OrderedList>
              <input placeholder="Options" name="currentOption" onChange={handleOptionChange} value={currentOption}/>
              <button type="button" onClick={addQuestionOption}>+</button>
            </div>
          )}
        </div>
        
        <button type="button" onClick={submitQuestion}>
          Save
        </button>
        <button type="button" onClick={() => updateModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
  };
};

const mapDispachToProps = (dispatch) => ({
  onAddQuestion: (questions) =>
    dispatch({ type: "ADD_QUESTION", value: questions }),
});

export default connect(mapStateToProps, mapDispachToProps)(QuestionModal);
