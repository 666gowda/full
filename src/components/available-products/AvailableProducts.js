import React, { useEffect, useState } from 'react';
import { getEmployees } from "../../services/ProductServices";

const AvailableProducts = () => {
    const [productIds, setProductIds] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [requestComplete, setRequestComplete] = useState(false);

    const getProductIds = () => {
        getEmployees(1)
            .then(
                (httpResponse) => {
                    const records = httpResponse.data;
                    const ids = records.map((record) => record.product_id);
                    setProductIds(ids);
                    setTotalProducts(ids.length);
                    setErrorMessage('');
                    setRequestComplete(true);
                }
            )
            .catch(
                (err) => {
                    setProductIds([]);
                    setTotalProducts(0);
                    setErrorMessage(err.message);
                    setRequestComplete(true);
                }
            )
    }

    useEffect(() => {
        getProductIds();
    }, []);

    let design;
    if (!requestComplete) {
        design = <span>Loading...please wait</span>;
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>;
    } else {
        design = (
            <div>
                <h2>Total Number of Products: {totalProducts}</h2>
                <h2>Product IDs:</h2>
                <ul>
                    {productIds.map((id) => (
                        <li key={id}>{id}</li>
                    ))}
                </ul>
            </div>
        );
    }
    return design;
}

export default AvailableProducts;
