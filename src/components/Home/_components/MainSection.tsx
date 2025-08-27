import CallToAction from "./CallToAction";
import InfiniteGrid from "./InfiniteGrid";

const MainSection = () => {
	return (
		<section className=" flex flex-col gap-12">
			<CallToAction />
			<InfiniteGrid />
		</section>
	);
};

export default MainSection;
