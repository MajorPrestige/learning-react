import Painting from "./components/painting";
import data from "./sample.json";
import Section from "./components/section";

export default function App() {
	return (
		<div>
			<Section />
			<ul>
				{data.map(el => (
					<Painting key={el.symbol} dataName={el.symbol} dataCount={el.count} />
				))}
			</ul>
		</div>
	);
}
