import React from 'react'
import OrderedList from '../../molecules/OrderedList/OrderedList'
import ListItem from '../../atoms/ListItem/ListItem'
import './FormList.css';
import { Link } from 'react-router-dom';

const FormList = () => {
    const formList = localStorage.getItem('formList') ? JSON.parse(localStorage.getItem('formList')) : [];

    const getDate = (id) => {
        const date = new Date(id);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return day + "/" + month + "/" + year;
    }

    return (
        <main className="form-list">
            <h2>Form List</h2>
            <hr/>
            <table style={{width:'100%'}}>
                <tr>
                  <th>Sr No.</th>
                  <th>Form Title</th>
                  <th>Form URL</th>
                  <th>Create Date</th>
                </tr>
                {
                    formList.map((form, i) => 
                        <tr>
                          <td>{i + 1}</td>
                          <td>{form.formTitle}</td>
                          <td><Link to={`${form.url}`} target="_blank">
                            {`${window.location.origin}/${form.url}`}
                            </Link>
                          </td>
                          <td>
                            {getDate(form.id * 1)}
                          </td>
                        </tr>
                    )
                }
            </table>
        </main>
    )
}

export default FormList;
