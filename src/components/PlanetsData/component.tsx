import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/component";
import { Center } from "../Styled/component";
import TablePage from "../Table/component";

//API: https://api.le-systeme-solaire.net/en/

export interface Planet {
	id: string;
	englishName: string;
	escape: number;
	bodyType: string;
	density: number;
	gravity: number;
}

export const PlanetsData = () => {
	const [result, setResult] = useState<Planet[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	//take data from API
	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data: response } = await axios.get(
					"https://api.le-systeme-solaire.net/rest/bodies/?data=id,englishName,escape,bodyType,density,gravity",
				);
				setResult(response.bodies);
				setError(false);
			} catch (err) {
				console.log(err);
				setError(true);
			}
			setLoading(false);
		};

		fetchData();
	}, []);

	return (
		<div>
			{error ? (
				<Center>Ups, something go wrong.</Center>
			) : (
				<div>
					{loading && <Loading />}
					{!loading && <TablePage data={result}></TablePage>}
				</div>
			)}
		</div>
	);
};
