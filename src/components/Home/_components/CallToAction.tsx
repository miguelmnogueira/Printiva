import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-scroll";
import { BlurFade } from "@/components/ui/blur-fade";

const CallToAction = () => {
	return (
		<div className="font-poppins  md:w-[80%] flex flex-col gap-2 ">
			<BlurFade delay={0.3} duration={1.5} inView>
				<h1 className=" md:hidden text-center  text-4xl font-semibold">
					Criação e impressão 3D em um só lugar.
				</h1>
				<h1 className="max-md:hidden max-w-[80%] text-5xl font-semibold">
					Criação, personalização e impressão 3D em um só lugar.
				</h1>
			</BlurFade>
			<BlurFade delay={0.3 * 2.2} duration={1.5} inView>
				<h3 className="text-2xl md:hidden font-medium text-subtitle text-center ">
					Design e tecnologia para dar vida às suas ideias.
				</h3>
				<h3 className="text-2xl hidden md:flex  max-w-[60%] font-medium bg-linear-to-r from-subtitle to-subtitle/60 bg-clip-text text-transparent ">
					Design, arte e tecnologia trabalhando juntos para
					materializar o que você imagina.
				</h3>
			</BlurFade>
			<BlurFade delay={0.3 * 3.2} duration={1.5} inView>
				<div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center mt-5 font-inter">
					<Link
						to={"/contact"}
						className="flex items-center px-4 h-10 bg-foreground/90 rounded-lg text-primary-foreground font-semibold text-[15px] hover:bg-white transition-colors cursor-pointer"
					>
						Inicie seu projeto
					</Link>
					<Link
						to={"features"}
						smooth={`500`}
						offset={-130}
						className="h-10 flex items-center text-primary/65 text-[16px]  gap-2 hover:ml-0.5 hover:gap-2.5 hover:text-primary/90 transition-all cursor-pointer"
					>
						Veja mais sobre nossos projetos
						<FaAngleRight />
					</Link>
				</div>
			</BlurFade>
		</div>
	);
};

export default CallToAction;
