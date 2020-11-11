import Link from 'next/link';
import axios from 'axios';

let state = {
    inputName: '',
    inputEmail: '',
    inputRole: '',
    inputBirthdate: '',
    inputAdress: '',
    inputSkill: '',
};

const handleInputName = e => { state.inputName = e.target.value; };
const handleInputEmail = e => { state.inputEmail = e.target.value; };
const handleInputRole = e => { state.inputRole = e.target.value; };
const handleInputBirthdate = e => { state.inputBirthdate = e.target.value; };
const handleInputAdress = e => { state.inputAdress = e.target.value; };
const handleInputSkill = e => { state.inputSkill = e.target.value; };

const createEmployee = async (e) => {
    e.preventDefault();

    if (state.inputName === ''
    || state.inputEmail === ''
    || state.inputRole === ''
    || state.inputBirthdate === ''
    || state.inputAdress === ''
    || state.inputSkill === '') {
        // console.log('object')
        return;
    }

    const request = {
        name: state.inputName,
        email: state.inputEmail,
        role: state.inputRole,
        birdate: state.inputBirthdate,
        adress: state.inputAdress,
        skill: state.inputSkill
    };

    let url = `http://localhost:3001/employee/create`;
    await axios.post(url, request)
    .then(function (response){
        // console.log(response);
    })
    .catch(function (error){
        console.log(error);
    });
    window.location = "/";
};

const DataRow = (props) => {
    return (
        <div className="row">
            <div className="col-xs-12 col-md-4 col-lg-4 col-xl-4">
                <form onSubmit={createEmployee}>
                    <div className="form-group">
                        <label key="name"><span className="text-danger">*</span> Name: </label>
                        <input className="form-control" 
                        
                        onChange={handleInputName}
                        required
                        id="name" type="text" required />
                    </div>
                    <div className="form-group">
                        <label key="email"><span className="text-danger">*</span> Email: </label>
                        <input className="form-control" id="email" onChange={handleInputEmail}  type="text" required />
                    </div>
                    <div className="form-group">
                        <label key="role"><span className="text-danger">*</span> Role: </label>
                        <input className="form-control" id="role" onChange={handleInputRole}  type="text" required />
                    </div>
                    <div className="form-group">
                        <label key="birthdate"><span className="text-danger">*</span> Birthdate: </label>
                        <input className="form-control" id="birthdate" onChange={handleInputBirthdate}  type="text" required />
                    </div>
                    <div className="form-group">
                        <label key="adress"><span className="text-danger">*</span> Adress: </label>
                        <input className="form-control" id="adress" onChange={handleInputAdress}  type="text" required />
                    </div>
                    <div className="form-group">
                        <label key="skill"><span className="text-danger">*</span> Skill: </label>
                        <input className="form-control" id="skill" onChange={handleInputSkill}  type="text" required />
                    </div>
                    <button type="submit" className="btn btn-success">Add</button>
                </form>
            </div>
            <div className="col-xs-12 col-md-8 col-lg-8 col-xl-8">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Birthdate</th>
                            <th>Adress</th>
                            <th>Skill</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        props.employees.length > 0 ? props.employees.map(employee => (
                            <tr key={employee.name}>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.role}</td>
                                <td>{employee.birdate}</td>
                                <td>{employee.adress}</td>
                                <td>{employee.skill}</td>
                            </tr>
                        )) : (
                                <tr>
                                    <td>
                                        <p className="text-danger">List is empty</p>
                                    </td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataRow;