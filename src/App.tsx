import { useState } from "react";
import "./App.css";
import AppFilter from "./components/app-filter/app-filter";
import AppInfo from "./components/app-info/app-info";
import EmployeesAddForm from "./components/employees-add-form/employees-add-form";
import EmployeesList from "./components/employees-list/employees-list";
import SearchPanel from "./components/search-panel/search-panel";

interface IData {
	name: string;
	salary: number;
	increase: boolean;
	like: boolean;
	id: number;
}

function App() {
	const list: IData[] = [
		{ name: "A", salary: 900, increase: true, like: true, id: 1 },
		{ name: "B", salary: 1000, increase: false, like: false, id: 2 },
		{ name: "C", salary: 2000, increase: false, like: false, id: 3 },
	];
	const [data, setData] = useState<IData[]>(list);
	const [term, setTerm] = useState("");
	const [filter, setFilter] = useState("all");

	const deleteItem = (id: number) => {
		setData(data.filter(item => item.id !== id));
	};

	const addItem = (name: string, salary: number) => {
		const newItem = {
			name: name,
			salary: salary,
			increase: false,
			like: false,
			id: Math.random(),
		};
		setData([...data, newItem]);
	};

	const onToggleIncrease = (id: number): void => {
		setData(
			data.map(item =>
				item.id === id ? { ...item, increase: !item.increase } : item
			)
		);
	};

	const onToggleRise = (id: number) => {
		setData(
			data.map(item => (item.id === id ? { ...item, like: !item.like } : item))
		);
	};

	const onUpdateSearch = (term: string) => {
		setTerm(term);
	};

	const employeesNum = data.length;
	const increased = data.filter(item => item.increase == true).length;

	const searchEmp = (items: IData[], term: string) => {
		return term.length === 0
			? items
			: items.filter(item => {
					return item.name.indexOf(term) > -1;
			  });
	};

	const filterPost = (items: IData[], filter: string) => {
		switch (filter) {
			case "increase":
				return items.filter(item => item.increase == true);
			case "more1000":
				return items.filter(item => item.salary > 1000);
			default:
				return items;
		}
	};

	const visibleData = filterPost(searchEmp(data, term), filter);

	const onFilterSelect = (filter: string) => {
		setFilter(filter);
	};

	return (
		<div className="app">
			<AppInfo employeesNum={employeesNum} increased={increased}></AppInfo>

			<div className="search-panel">
				<SearchPanel onUpdateSearchProps={onUpdateSearch}></SearchPanel>
				<AppFilter filter={filter} onFilterSelect={onFilterSelect}></AppFilter>
			</div>

			<EmployeesList
				data={visibleData}
				onDelete={(id: number) => deleteItem(id)}
				onToggleIncrease={onToggleIncrease}
				onToggleRise={onToggleRise}
			/>
			<EmployeesAddForm onAdd={addItem}></EmployeesAddForm>
		</div>
	);
}

export default App;
