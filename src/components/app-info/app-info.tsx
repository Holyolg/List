import "./app-info.css";

const AppInfo = ({
	employeesNum,
	increased,
}: {
	employeesNum: number;
	increased: number;
}) => {
	return (
		<div className="app-info">
			<h1>Учет сотрудников</h1>
			<h2>Общее число сотрудников: {employeesNum} </h2>
			<h2>Премию получат: {increased} </h2>
		</div>
	);
};

export default AppInfo;
