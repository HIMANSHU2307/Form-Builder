import React from 'react'
import OrderedList from '../../molecules/OrderedList/OrderedList'
import ListItem from '../../atoms/ListItem/ListItem'
import './FormList.css';

const FormList = () => {
    const formList = localStorage.getItem('formList') ? JSON.parse(localStorage.getItem('formList')) : [];
    return (
        <main className="form-list">
            <OrderedList >
                {
                    formList.map(form => <ListItem>{form.formTitle}</ListItem>)
                }
            </OrderedList>
        </main>
    )
}

export default FormList;
