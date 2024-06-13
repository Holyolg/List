import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./chart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

interface IData {
	name: string;
	salary: number;
	increase: boolean;
	like: boolean;
	id: number;
}

const Chart = ({ dataChart }: { dataChart: IData[] }) => {
	const names = dataChart.map(item => item.name);
	const salaries = dataChart.map(item => item.salary);

	console.log(names);

	const data = {
		labels: names,
		datasets: [
			{
				label: "Зарплата",
				data: salaries,
				backgroundColor: [
					"rgb(157, 182, 231)",
					"rgb(232, 102, 91)",
					"rgb(255, 196, 90)",
					"rgb(87, 46, 153)",
					"rgb(232, 102, 91)",
					"rgb(169, 76, 255)",
				],
				borderColor: [
					"rgb(157, 182, 231)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 0,
			},
		],
	};

	return (
		<div className="chartModule">
			<p className="chartName">Статистика по сотрудникам</p>
			<Doughnut className="doughnut" data={data} />;
		</div>
	);
};
export default Chart;
