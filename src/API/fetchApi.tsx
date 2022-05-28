import axios from "axios";
import React, { useEffect, useState } from "react";

export interface Planet {
	id: string;
	englishName: string;
	escape: number;
	bodyType: string;
	density: number;
	gravity: number;
}

//API: https://api.le-systeme-solaire.net/en/

const FetchApi = () => {
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
	return { result, loading, error };
};

export default FetchApi;
