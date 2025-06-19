import { Link } from "react-router";
import { FeaturesSectionWithHoverEffects } from "./feature-section-with-hover-effects";
import { FaAngleRight } from "react-icons/fa";
import { Element } from "react-scroll";
import { BlurFade } from "@/components/ui/blur-fade";

const FeaturesSection = () => {
	return (
		<section className="flex flex-col gap-20 max-sm:gap-5">
			<BlurFade delay={0.25 * 3} duration={1} inView>
				<div className="flex flex-col md:flex-row justify-between max-md:gap-3 md:w-[90%]">
					<Element name="features">
						<h3 className="text-5xl md:text-6xl font-poppins font-semibold lg:w-[90%]">
							Feitos para todas as necessidades
						</h3>
					</Element>
					<div className="w-[70%] text-sm flex items-end text-subtitle">
						<div>
							<p className="hidden md:block">
								Na Printiva, combinamos precisão técnica,
								criatividade e agilidade para transformar ideias
								em realidade. Nosso processo une design,
								engenharia e personalização com excelência em
								cada detalhe.
							</p>
							<p className="md:hidden ">
								Na Printiva, design, engenharia e personalização
								se unem com agilidade e precisão para dar vida
								às suas ideias.
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
			</BlurFade>
			<BlurFade delay={0.25 * 4} duration={1} inView>
				<div className="mb-7 w-full">
					<FeaturesSectionWithHoverEffects />
				</div>
			</BlurFade>
		</section>
	);
};

export default FeaturesSection;
