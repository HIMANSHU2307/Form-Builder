import React, { useState, useEffect } from 'react'
import './CreateForm.css'
import QuestionModal from '../QuestionModal';
import { connect } from "react-redux";
import OrderedList from '../../molecules/OrderedList/OrderedList';
import ListItem from '../../atoms/ListItem/ListItem';

const CreateForm = ({questions, onSaveForm, onResetForm, history}) => {

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
        const id = Date.now().toString()
        const finalForm = {
            formTitle,
            questions,
            id,
            url: `form/${id}`
        }
        e.preventDefault();
        if(!questions.length){
            alert('No questions added to the Form');
            return false;
        }
        onSaveForm(finalForm);
        setFormTitle('');
        history.push('/');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="form-title">Form Title</label>
                <input type="text" 
                    name="formTitle" 
                    id="form-title" 
                    onChange={handleTitleChange} 
                    placeholder="Enter Form Name"
                    value={formTitle} required/>
            </div>
            
            {showModal && <QuestionModal updateModal={handleModal}/>}
            {
                
                !!questions?.length && 
                <>
                <OrderedList>
                    {

                        questions.map((question, i) => (
                            <>
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
                                        question.questionOption && question.questionOption.map((option, i) => (
                                            <ListItem key={i}>
                                                {option}
                                            </ListItem>
                                        ))
                                    }
                                </OrderedList>
                            </div>
                            <hr/>
                            </>
                        ))
                    }
                </OrderedList>
                </>
            }
            <button type="button" onClick={() => handleModal(true)}>Add Question</button>
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