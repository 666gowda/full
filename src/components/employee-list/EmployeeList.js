import React, { useEffect, useState } from 'react';
import { getEmployees } from "../../services/ProductServices";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProductDetailsModal from '../product-detail-model/ProductDetailsModal';

const EmployeeList = (props) => {
    const [employees, setEmployees] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [requestComplete, setRequestComplete] = useState(false);
    const [sortBy, setSortBy] = useState(1); // Default sort value
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getData = () => {
        getEmployees(sortBy)
            .then(
                (httpResponse) => {
                    const records = httpResponse.data;
                    setEmployees(records);
                    setErrorMessage('');
                    setRequestComplete(true);
                }
            )
            .catch(
                (err) => {
                    setEmployees(undefined);
                    setErrorMessage(err.message);
                    setRequestComplete(true);
                }
            )
    }

    useEffect(() => {
        getData();
    }, [sortBy]); // Trigger getData when sortBy changes

    const handleAction = (action, productId) => {
        console.log(`Performing ${action} on product ${productId}`);
        // Implement your logic for each action here
    }

    let design;
    if (!requestComplete) {
        design = <span>Loading...please wait</span>;
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>;
    } else if (!employees || employees.length === 0) {
        design = <span>No records</span>;
    } else {
        design = (
            <>
                <div>
                    <select value={sortBy} onChange={(e) => setSortBy(parseInt(e.target.value))}>
                        {[1, 2, 3, 4, 5, 6].map((value) => (
                            <option key={value} value={value}>{value}</option>
                        ))}
                    </select>
                </div>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Price</th>
                            <th>Product Code</th>
                            <th>Release Data</th>
                            <th>Image URL</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((e) => (
                            <tr key={e.product_id}>
                                <td>{e.product_id}</td>
                                <td>{e.price}</td>
                                <td>{e.product_code}</td>
                                <td>{e.release_date}</td>
                                <td>
                                    <img src={e.image_url} alt={e.product_name} style={{ width: '100px', height: '100px' }} />
                                </td>
                                <td>
                                    <div className="btn-group">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Actions
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item variant="primary" onClick={handleShow}>View</Dropdown.Item>
                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Modal heading</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <ProductDetailsModal/>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" onClick={handleClose}>
                                                            Save Changes
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                                <Dropdown.Item onClick={() => handleAction('Edit', e.product_id)}>Edit</Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleAction('Delete', e.product_id)}>Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
    return design;
}

export default EmployeeList;
