import {IdataResponse} from "pages/context";
import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
} from "chart.js";
import {Line} from "react-chartjs-2";
import {labels} from "utils";

interface IDataViz20192022 {
	dataApi: IdataResponse[];
}

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);
const DataVizConsumption20192022: React.FC<IDataViz20192022> = ({dataApi}) => {
	console.log(dataApi, "dataApi fetch");
	const data = {
		labels,
		datasets: [
			{
				data: [5850, 6000, 7000, 7500, 8000, 6500, 7850],
				borderColor: "rgb(0, 0, 0)",
				backgroundColor: "rgb(0, 0, 0)"
			}
		]
	};
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const
			},
			title: {
				display: true,
				text: "Consommation attendu 2014 - 2020"
			}
		}
	};
	return (
		<div>
			<Line options={options} data={data} />
		</div>
	);
};

export default DataVizConsumption20192022;
