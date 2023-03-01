import React, {createContext, useContext, useState} from "react";

export type ICurvesConsoContextType = {
	fetchData: () => void;
	dataFetch: IdataResponse[];
};
export interface IdataResponse {
	climat: number;
	consumption_average: number;
	consumption_moy: number;
	consumption_norm_2022: number;
	consumption_norm_moy: number;
	day_week: string;
	sobriety: number;
	target_date: string;
	week: number;
	year: number;
}

interface Props {
	children: React.ReactNode;
}

export const CurvesConsoContext = createContext<ICurvesConsoContextType>(
	{} as ICurvesConsoContextType
);
export const ContextProvider: React.FC<Props> = ({children}) => {
	const [data, SetData] = useState<IdataResponse[]>([]);

	const fetchData = () => {
		fetch("http://localhost:8080/data", {
			mode: "cors",
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				SetData(response);
			})
			.catch((error) => {
				throw new Error("Failed dataviz", error);
			});
	};

	const valueContext = {
		fetchData,
		dataFetch: data
	};

	return (
		<CurvesConsoContext.Provider value={valueContext}>
			{children}
		</CurvesConsoContext.Provider>
	);
};

export const useCurvesConsoContext = () => {
	return useContext(CurvesConsoContext) as ICurvesConsoContextType;
};
