import { BlurFade } from "@/components/ui/blur-fade";

const MainTitle = () => {
	return (
		<div className="flex flex-col gap-2">
			<BlurFade duration={0.5} delay={0.2} inView>
				<h1 className="font-inter text-3xl font-semibold !mt-12">
					Encomende já a pata de seu pet personalizada!
				</h1>
			</BlurFade>
			<BlurFade duration={0.5} delay={0.3} inView>
				<p className="max-w-2xl text-tertiary/80">
					Ao enviar a foto da pata de seu animal, entraremos em
					contato pelo WhatsApp, envieremos o modelo para aprovação,
					junto do valor total da sua encomenda.
				</p>
			</BlurFade>
		</div>
	);
};

export default MainTitle;
