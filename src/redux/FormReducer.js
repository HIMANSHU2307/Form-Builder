const initialState = {
    id: '',
    formTitle: '',
    questions: [],
    url: ''
};

const reducer = (state = initialState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case "ADD_QUESTION":
            newState = {...newState, questions: [...newState.questions, action.value]};
            break;

        case "ADD_FORM_ASYNC":
            debugger;
            newState = {...newState, formTitle: action.value};
            break;   
            
        case "RESET_FORM":
            newState = initialState;
            break;      

        // case "ADD_FORM_ASYNC":
        //     newState.age = { ...newState, name: action.formTitle };
        //     break;
    }
    return newState;
};

export default reducer;