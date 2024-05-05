import Axios from 'axios'
//1. fetch() API of browser (DOM library)
//2. axios package: 3rd party package

//call RESTful API to get all records of employees
//url: http://localhost:8001/employees/sort/{sortchoice} (GET)

const baseUrl = 'http://localhost:8082/employees'

export function getEmployees(sortChoice) {
    //get() method sends the request to RESTful API asynchronously and the method returns a Promise object of type AxiosResponse (Promise<AxiosResponse>)
    return Axios.get(`${baseUrl}/sort/${sortChoice}`)
}


//call RESTful API to get a single record of an employee
//url: http://localhost:8001/employees/view/{eid} (GET)
export function getEmployee(id) {
    return Axios.get(`${baseUrl}/view/${id}`)
}
//call RESTful API to pass a newly created employee data
//so that it can saved in the database table
//url: http://localhost:8001/employees/add (POST)
export function addEmployee(empObject) {
    return Axios.post(`${baseUrl}/add`, empObject)
}

//call RESTful API to pass a newly updated an existing employee data so that it can updated also in the database table
//url: http://localhost:8001/employees/update/{eid} (PUT)
export function updateEmployee(id, empObject) {
    return Axios.put(`${baseUrl}/update/${id}`, empObject)
}
//call RESTful API to delete an employee record from database tabke
//url: http://localhost:8001/employees/delete/{eid} (DELETE)
export function deleteEmployee(id) {
    return Axios.delete(`${baseUrl}/delete/${id}`)
}