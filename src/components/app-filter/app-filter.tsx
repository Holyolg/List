import "./app-filter.scss";

const AppFilter = ({
	filter,
	onFilterSelect,
}: {
	filter: string;
	onFilterSelect: Function;
}) => {
	const buttonsData = [
		{
			name: "all",
			label: "Все сотрудники",
		},
		{
			name: "like",
			label: "На повышение",
		},
		{
			name: "more1000",
			label: "З/П больше 1000",
		},
	];

	const buttons = buttonsData.map(({ name, label }) => {
		const active = filter === name;
		const clazz = active ? "btn-light" : "btn-outline-light";
		return (
			<button
				className={`btn ${clazz}`}
				type="button"
				key={name}
				onClick={() => onFilterSelect(name)}
			>
				{label}
			</button>
		);
	});

	return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
