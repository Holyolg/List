import './app.css'
import SearchPanel from '../search-panel/search-panel'
import AppInfo from '../app-info/app-info'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

function App() {

	const data = [
		{name: 'A', salary: 900, increase: true, id: 1},
		{name: 'B', salary: 2000, increase: false, id: 2},
		{name: 'C', salary: 3000, increase: false, id: 3},
	]

	return (
		<div className="app">
   			 <AppInfo></AppInfo>

		<div className="search-panel">
			<SearchPanel></SearchPanel>
			<AppFilter></AppFilter>
		</div>

			<EmployeesList data={data}/>
			<EmployeesAddForm></EmployeesAddForm>
		</div>
	)
}

export default App