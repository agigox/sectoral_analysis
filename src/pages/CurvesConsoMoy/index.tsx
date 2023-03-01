import React from "react";
import {ICurvesConsoContextType, useCurvesConsoContext} from "pages/context";
import ButtonDefault from "components/Button";
import {Container} from "reactstrap";
import NavDataviz from "components/Nav";

interface IDataViz {
	dataViz: React.ReactNode;
}
const DataVizCurrentYear: React.FC<IDataViz> = ({dataViz}) => {
	const {fetchData}: ICurvesConsoContextType = useCurvesConsoContext();
	return (
		<Container className="border py-2">
			<NavDataviz>
				{/* (2014 - 2029) */}
				<ButtonDefault
					color="blue"
					label="Consommation attendue "
					size="xs"
					className="btn btn-info m-lg-2 py-2 m-lg-2"
					onClick={fetchData}
				/>
				{/* (2014 - 2021) */}
				<ButtonDefault
					color="blue"
					label="Consommation réalisées"
					size="xs"
					className="btn btn-primary py-2 m-lg-2"
					onClick={fetchData}
				/>
				<ButtonDefault
					color="blue"
					label="Consommation année 2022"
					size="xs"
					className="btn btn-success py-2 m-lg-2"
					onClick={fetchData}
				/>
				<ButtonDefault
					color="blue"
					label="Temperature normale"
					size="xs"
					className="btn btn-secondary py-2 m-lg-2"
					onClick={fetchData}
				/>
				<ButtonDefault
					color="blue"
					label="Sobriété"
					size="xs"
					className="btn btn-info py-2 m-lg-2"
					onClick={fetchData}
				/>
				<ButtonDefault
					color="blue"
					label="Climat"
					size="xs"
					className="btn btn-warning py-2 m-lg-2"
					onClick={fetchData}
				/>
			</NavDataviz>
			{dataViz}
		</Container>
	);
};

export default DataVizCurrentYear;
