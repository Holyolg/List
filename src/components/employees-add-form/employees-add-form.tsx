import { useState } from 'react';
import './employees-add-form.css';



const EmployeesAddForm = (onAdd:any) => {
 const [name, setName] = useState('')   
 const [salary, setSalary] = useState('')
 

 const onNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
 }
 const onSalaryChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSalary(e.target.value)
 }

 function onValueChange( this: any, e:React.ChangeEvent<HTMLInputElement>) {
    this.setState({
        [e.target.name]: e.target.value
    })
 }

 const onSubmit = (e:any) => {
    e.preventDefault()
    onAdd(name, salary);
   
 }



    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form 
                className="add-form d-flex"
                onSubmit={onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    name='name'
                    onChange={onNameChange} 
                    value={name}
                   />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    name='salary'
                    onChange={onSalaryChange}
                    value={salary}/>

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                        
            </form>
        </div>
    )
}

export default EmployeesAddForm;