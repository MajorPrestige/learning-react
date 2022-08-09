import PropTypes from "prop-types";

export default function Painting({ dataName, dataCount }) {
	return (
		<li>
			Name: {dataName} <br />
			Count: {dataCount ? dataCount : "not available"}
		</li>
	);
}

Painting.propTypes = {
	dataName: PropTypes.string.isRequired,
	dataCount: PropTypes.number,
};
