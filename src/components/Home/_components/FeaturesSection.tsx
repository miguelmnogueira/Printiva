import { Link } from "react-router";
import { FeaturesSectionWithHoverEffects } from "../../feature-section-with-hover-effects";
import { FaAngleRight } from "react-icons/fa";
import { Element } from "react-scroll";

const FeaturesSection = () => {
	return (
		<section className="flex flex-col gap-20">
			<div className="flex justify-between w-[90%]">
				<Element name="features">
					<h3 className="text-6xl font-poppins font-semibold">
						Feitos para todas as necessidades
					</h3>
				</Element>
				<div className="w-[70%] text-sm flex items-end text-subtitle">
					<div>
						<p>
							Na Printiva, combinamos precisão técnica,
							criatividade e agilidade para transformar ideias em
							realidade. Nosso processo une design, engenharia e
							personalização com excelência em cada detalhe.
						</p>
						<Link
							to={`/contact`}
							className="text-white/80 flex items-center gap-0 hover:text-white/90  transition-all duration-200 hover:gap-0.5 hover:ml-0.5"
						>
							<span>Comece aqui </span>
							<FaAngleRight />
						</Link>
					</div>
				</div>
			</div>
			<div className="mb-7 w-full">
				<FeaturesSectionWithHoverEffects />
			</div>
		</section>
	);
};

export default FeaturesSection;
