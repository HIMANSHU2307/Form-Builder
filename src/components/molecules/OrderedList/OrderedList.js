import React from 'react'
import './OrderedList.css'

const OrderedList = ({children}) => {
    
    return (
        <ol className="ordered-list">
            {children}
        </ol>
    )
}

export default OrderedList;