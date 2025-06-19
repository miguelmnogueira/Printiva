import React from "react";
import CallToAction from "./CallToAction";
import InfiniteGrid from "./InfiniteGrid";

const MainSection = () => {
	return (
		<section className="mt-32 flex flex-col">
			<CallToAction />
			<InfiniteGrid />
		</section>
	);
};

export default MainSection;
