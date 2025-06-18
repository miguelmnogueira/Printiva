import { Link } from "react-router";
import { FeaturesSectionWithHoverEffects } from "../../feature-section-with-hover-effects";

const FeaturesSection = () => {
	return (
		<section className="flex flex-col gap-20">
			<div className="flex justify-between w-[90%]">
				<h3 className="text-6xl font-poppins font-semibold">
					Feitos para todas as necessidades
				</h3>
				<div className="w-[70%] text-sm flex items-end text-subtitle">
					<p>
						Na Printiva, combinamos precisão técnica, criatividade e
						agilidade para transformar ideias em realidade. Nosso
						processo une design, engenharia e personalização com
						excelência em cada detalhe.
					</p>
					<Link to={`/contact`}></Link>
				</div>
			</div>
			<div className="min-h-screen w-full">
				<FeaturesSectionWithHoverEffects />
			</div>
		</section>
	);
};

export default FeaturesSection;
