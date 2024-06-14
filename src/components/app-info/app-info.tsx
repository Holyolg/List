import "./app-info.scss";

const AppInfo = ({
	employeesNum,
	increased,
}: {
	employeesNum: number;
	increased: number;
}) => {
	return (
		<div className="app-info">
			<div className="user-info">
				<img className="user-icon" src='/img/icons/user.png' alt="employees" />
				<h1>Учет сотрудников</h1>
				</div>
				<div className="user-info">
				<img className="user-icon" src='/img/icons/users.png' alt="employees" />

				<h2>Общее число сотрудников: {employeesNum} </h2>
				</div>
				<div className="user-info">
				<div className="user-icon fas fa-cookie"></div>

				<h2>Премию получат: {increased} </h2>
				</div>
		</div>
	);
};

export default AppInfo;
