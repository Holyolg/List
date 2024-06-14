import { useState } from "react";
import "./search-panel.scss";

const SearchPanel = ({ onUpdateSearchProps }: { onUpdateSearchProps: any }) => {
	const [term, setTerm] = useState("");

	const onUpdateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const term = e.target.value;
		setTerm(term);
		onUpdateSearchProps(term);
	};

	return (
		<input
			type="text"
			className="form-control search-input"
			placeholder="Найти сотрудника"
			value={term}
			onChange={onUpdateSearch}
		/>
	);
};

export default SearchPanel;
