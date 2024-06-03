import { useEffect, useState } from 'react'
import './App.css'
import AppFilter from './components/app-filter/app-filter'
import AppInfo from './components/app-info/app-info'
import EmployeesAddForm from './components/employees-add-form/employees-add-form'
import EmployeesList from './components/employees-list/employees-list'
import SearchPanel from './components/search-panel/search-panel'

interface IData  {
  name: string,
  salary: string,
  increase: boolean,
  like: boolean,
  id: number
}

function App() {
	const list: IData[] = [
		{name: 'A', salary: '900', increase: true, like:true, id: 1},
		{name: 'B', salary: "2000", increase: false, like:false, id: 2},
		{name: 'C', salary: "3000", increase: false, like:false, id: 3},
	]
	const [data, setData] = useState<IData[]>(list)

	const deleteItem = (id:number) => {
		setData(data.filter((item) => item.id !== id))
	
	}

	const addItem = (name:string, salary:string) => {
		const newItem = {name:name, salary:salary, increase: false, like: false, id: 4}
		setData([...data, newItem])
	}

	const onToggleIncrease = (id: number) => {
		data.map(item => {
			if (item.id ==id) {
				return {...item, increase, !increase}
			}
			return item
		})
	}
   
	const onToggleRise = (id: number) => {
		console.log(id)

	}

	return (
		<div className="app">
   			 <AppInfo></AppInfo>

		<div className="search-panel">
			<SearchPanel></SearchPanel>
			<AppFilter></AppFilter>
		</div>

			<EmployeesList data={data}
			onDelete={(id:number) => deleteItem(id)}
			onToggleIncrease={onToggleIncrease}
			onToggleRise={onToggleRise}
			/>
			<EmployeesAddForm onAdd={addItem}></EmployeesAddForm>
		</div>
	)
}

export default App