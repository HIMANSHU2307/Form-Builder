import React, { useState, useEffect } from 'react'
import './CreateForm.css'
import QuestionModal from '../QuestionModal';
import { connect } from "react-redux";
import OrderedList from '../../molecules/OrderedList/OrderedList';
import ListItem from '../../atoms/ListItem/ListItem';

const CreateForm = ({questions, onSaveForm, onResetForm}) => {

    const [showModal, setShowModal] = useState(false);
    const [formTitle, setFormTitle] = useState('');

    useEffect(() => {
        onResetForm();
    }, [])

    const handleModal = (value) => {
        setShowModal(value)
    }

    const handleTitleChange = (e) => {
        setFormTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        const finalForm = {
            formTitle,
            questions
        }
        e.preventDefault();
        debugger;
        onSaveForm(finalForm);
        setFormTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="form-title">Form Title</label>
            <input type="text" name="formTitle" id="form-title" onChange={handleTitleChange} value={formTitle} required/>
            <button type="button" onClick={() => handleModal(true)}>Add Question</button>
            {showModal && <QuestionModal updateModal={handleModal}/>}
            {
                !!questions?.length && 
                <OrderedList>
                    {

                        questions.map((question, i) => (
                            <div key={i}>
                                <div>
                                    <p>
                                        <strong>Question {i+1}: </strong>{question.questionName}
                                    </p>
                                    <p>
                                        <em>(type: {question.questionType})</em>
                                    </p>
                                    
                                </div>
                                <OrderedList>
                                    {
                                        question.questionOption.map((option, i) => (
                                            <ListItem key={i}>
                                                {option}
                                            </ListItem>
                                        ))
                                    }
                                </OrderedList>
                            </div>
                        ))
                    }
                </OrderedList>
            }

            <button type="submit">Save form</button>
        </form>
    )
}

const mapStateToProps = state => ({
    questions: state.questions
});

const mapDispachToProps = (dispatch) => ({
    onSaveForm: (finalForm) =>
      dispatch({ type: "ADD_FORM", value: finalForm }),

    onResetForm: () =>
    dispatch({ type: "RESET_FORM", value: null }),
  });

export default connect(mapStateToProps, mapDispachToProps)(CreateForm);