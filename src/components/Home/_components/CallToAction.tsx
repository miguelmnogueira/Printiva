import { FaAngleRight } from "react-icons/fa6";

const CallToAction = () => {
	return (
		<div className="font-poppins w-[950px] flex flex-col gap-5">
			<h1 className="text-6xl font-semibold">
				Criação, personalização e impressão 3D em um só lugar.
			</h1>
			<h3 className="text-2xl max-w-[60%] font-medium bg-linear-to-r from-subtitle to-subtitle/60 bg-clip-text text-transparent">
				Design, arte e tecnologia trabalhando juntos para materializar o
				que você imagina.
			</h3>
			<div className="flex gap-5 items-center mt-5 font-inter">
				<button className="px-4 h-10 bg-foreground/90 rounded-lg text-primary-foreground font-semibold text-[15px] hover:bg-white transition-colors cursor-pointer">
					Inicie seu projeto
				</button>
				<a
					href=""
					className="h-10 flex items-center text-primary/65 text-[16px]  gap-2 hover:ml-0.5 hover:gap-3 hover:text-primary/90 transition-all"
				>
					Veja mais sobre nossos projetos
					<FaAngleRight />
				</a>
			</div>
		</div>
	);
};

export default CallToAction;
