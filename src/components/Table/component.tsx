import { FC, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Authorization/context";
import { Planet } from "../PlanetsData/fetchApi";
import { Button, TablePageStyles, TableStyles } from "../Styled/component";
import Table from "./TableStructure";

interface Props {
	data: Planet[];
}

const TablePage: FC<Props> = ({ data }) => {
	let navigate = useNavigate();
	const auth = useContext(AuthContext);

	const handleLogout = () => {
		auth.signout(() => navigate("/planet"));
	};

	const columns = useMemo(
		() => [
			{
				Header: "Name",
				accessor: "englishName",
			},
			{
				Header: "Body type",
				accessor: "bodyType",
			},
			{
				Header: "Flattening",
				accessor: "escape",
			},
			{
				Header: "Density",
				accessor: "density",
			},
			{
				Header: "Gravity",
				accessor: "gravity",
			},
		],
		[],
	);

	return (
		<TablePageStyles>
			<Button onClick={handleLogout}>Sign out</Button>
			<TableStyles>
				<Table columns={columns} data={data} />
			</TableStyles>
		</TablePageStyles>
	);
};

export default TablePage;
