import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

interface IData {
	name: string;
	salary: number;
	increase: boolean;
	like: boolean;
	id: number;
}

const EmployeesList = ({
	data,
	onDelete,
	onToggleIncrease,
	onToggleRise,
}: {
	data: IData[];
	onDelete: Function;
	onToggleIncrease: Function;
	onToggleRise: Function;
}) => {
	const elements = data.map(item => {
		const { id, ...itemProps } = item;
		return (
			<EmployeesListItem
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToggleIncrease={() => onToggleIncrease(id)}
				onToggleRise={() => onToggleRise(id)}
			/>
		);
	});

	return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
