import "./employees-list-item.scss";

const EmployeesListItem = ({
	name,
	salary,
	onDelete,
	onToggleIncrease,
	onToggleRise,
	increase,
	like,
}: {
	name: string;
	salary: number;
	onDelete: any;
	onToggleIncrease: any;
	onToggleRise: any;
	increase: boolean;
	like: boolean;
}) => {
	let increaseClassName = "list-group-item d-flex justify-content-between";
	if (increase) {
		increaseClassName += " increase";
	}
	if (like) {
		increaseClassName += " like";
	}

	return (
		<li className={increaseClassName}>
			<span className="list-group-item-label" onClick={onToggleRise}>
				{name}
			</span>
			<input
				type="text"
				className="list-group-item-input"
				defaultValue={salary + "$"}
			/>
			<div className="d-flex justify-content-center align-items-center">
				<button
					type="button"
					className="btn-cookie btn-sm"
					onClick={onToggleIncrease}
				>
					<i className="fas fa-cookie"></i>
				</button>

				<button type="button" className="btn-trash btn-sm " onClick={onDelete}>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	);
};

export default EmployeesListItem;
