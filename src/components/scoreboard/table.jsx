import { useState } from "react";
import TableCol from "./tableCol";

export default function TableHead() {
	const [data, getData] = useState([
		{ name: "User1", score: 0 },
		{ name: "User2", score: 1 },
		{ name: "User3", score: 2 },
	]);

	function addUser() {
		getData;
	}
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Score</th>
					</tr>
				</thead>
				<tbody>
					{data.map((user, index) => (
						<TableCol
							key={index}
							index={index}
							name={user.name}
							score={user.score}
						/>
					))}
				</tbody>
			</table>
			<button onClick={addUser}>add user</button>
		</div>
	);
}
