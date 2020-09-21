import React from 'react';
import { FormAdd } from '../Components';

const AddPage = (props) => {
    return (
        <>
            {
                props.location.pathname === '/expenses' ? <FormAdd page="Expense"/> : <FormAdd page="Income"/>
            }
        </>
    )
}

export default AddPage