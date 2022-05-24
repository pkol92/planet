import Loading from "../Loading/component";
import { Center } from "../Styled/component";
import TablePage from "../Table/component";
import FetchApi from "./fetchApi";

export const PlanetsData = () => {
	const { result, loading, error } = FetchApi();

	return (
		<div>
			{error ? (
				<Center>Ups, something go wrong...</Center>
			) : (
				<div>
					{loading && <Loading />}
					{!loading && <TablePage data={result}></TablePage>}
				</div>
			)}
		</div>
	);
};
