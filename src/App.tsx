import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "components/Layout";
import DataVizCurrentYear from "pages/CurvesConsoMoy";
import Header from "components/Header";
import {Col} from "reactstrap";
import {ICurvesConsoContextType, useCurvesConsoContext} from "pages/context";
import DataVizConsumption20192022 from "modules/DataVizConso-2019-2022";

const App: React.FC<{}> = () => {
	const {dataFetch}: ICurvesConsoContextType = useCurvesConsoContext();
	console.log(dataFetch, "data");
	return (
		<Layout>
			<Header>
				<Col className="border w-100 py-4 text-xl-center">
					<h1 className="fw-bold">
						Analyse de la consommation de cet hiver 24-02-2023
					</h1>
				</Col>
			</Header>
			<DataVizCurrentYear
				dataViz={<DataVizConsumption20192022 dataApi={dataFetch} />}
			/>
		</Layout>
	);
};

export default App;
