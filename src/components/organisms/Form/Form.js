import React, { useEffect, useState } from 'react'
import OrderedList from '../../molecules/OrderedList/OrderedList';
import ListItem from '../../atoms/ListItem/ListItem';
import './Form.css';

const Form = ({ match }) => {
    const [form, setForm] = useState({})

    useEffect(() => {
        let formSaved = JSON.parse(localStorage.getItem('formList'));
        let arr = [];
        arr = formSaved.filter(el => el.id === (match.params.id));
        setForm(arr[0]);
    }, [])

    return (
        <div>
            <h2>{form.formTitle}</h2>
            <hr/>
            <main>
            {
                !!form.questions?.length && 
                <OrderedList>
                    {

                        form.questions.map((question, i) => (
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
                                {
                                    question.questionType === 'Text' && <textarea type="text" placeholder="your answer goes here!"></textarea>
                                }
                                {
                                    question.questionType === 'Multiple' && question.questionOption.map(el => 
                                        (<>
                                            <input type="checkbox" id={el} name={el} value={el} />
                                            <label for={el}>{el}</label><br />
                                        </>)
                                        )
                                }
                                {
                                    question.questionType === 'Single' && question.questionOption.map(el => 
                                        (<>
                                            <input type="radio" id={el} name={question.questionType} value={el} />
                                            <label for={el}>{el}</label><br />
                                        </>)
                                        )
                                }
                                <div>

                                </div>
                                { /*<OrderedList>
                                    {
                                        question.questionOption && question.questionOption.map((option, i) => (
                                            <ListItem key={i}>
                                                {option}
                                            </ListItem>
                                        ))
                                    }
                                </OrderedList>*/}
                                
                            </div>
                            <hr/>
                        </>
                        ))
                    }
                </OrderedList>
            }
            </main>
            <button>Submit</button>
            
        </div>
    )
}

export default Form
