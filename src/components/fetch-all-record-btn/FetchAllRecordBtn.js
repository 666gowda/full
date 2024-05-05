import React, { useState } from 'react';
import EmployeeList from '../employee-list/EmployeeList';

const FetchAllRecordBtn = () => {
    const [isLoading, setIsLoading] = useState(false);

    const getData = () => {
        setIsLoading(true);
    };

    return (
        <>
            <div>
                <button type='button' onClick={getData}>Load Data</button>
            </div>
            {isLoading && <EmployeeList />}
        </>
    );
};

export default FetchAllRecordBtn;
