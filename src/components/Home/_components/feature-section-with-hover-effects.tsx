import { cn } from "@/lib/utils";
import { FiPrinter } from "react-icons/fi";
import {
	TbPencilCog,
	TbEyeSearch,
	TbLayersSubtract,
	TbMessageChatbot,
	TbMedal,
	TbSend,
	TbSparkles,
} from "react-icons/tb";

export function FeaturesSectionWithHoverEffects() {
	const features = [
		{
			title: "Impressão sob demanda",
			description:
				"Sem estoques, sem desperdícios. Produzimos só o que você precisa, quando você quiser.",
			icon: <FiPrinter />,
		},
		{
			title: "Personalização total",
			description:
				"De bustos a suportes, criamos peças únicas a partir das suas ideias (ou fotos!).",
			icon: <TbPencilCog />,
		},
		{
			title: "Visualize antes de imprimir",
			description:
				"Receba uma prévia renderizada do seu modelo antes de confirmar a produção.",
			icon: <TbEyeSearch />,
		},
		{
			title: "Materiais premium",
			description:
				"Escolha entre PLA, resina e outros — tudo com acabamento profissional.",
			icon: <TbLayersSubtract />,
		},
		{
			title: "Atendimento humano de verdade",
			description:
				"Nada de bots. Fale direto com alguém que entende de 3D e resolve de verdade.",
			icon: <TbMessageChatbot />,
		},
		{
			title: "Entrega com qualidade de estúdio",
			description:
				"Acabamento limpo, sem linhas aparentes. Sua peça vai parecer saída de uma vitrine.",
			icon: <TbMedal />,
		},
		{
			title: "Projetos por encomenda",
			description:
				"Envie uma ideia ou rascunho e a gente transforma em algo real — modelado e impresso.",
			icon: <TbSend />,
		},
		{
			title: "E mais...",
			description:
				"Artes decorativas, utilitários ou até memes — se cabe numa impressora, a gente imprime.",
			icon: <TbSparkles />,
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
			{features.map((feature, index) => (
				<Feature key={feature.title} {...feature} index={index} />
			))}
		</div>
	);
}

const Feature = ({
	title,
	description,
	icon,
	index,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
	index: number;
}) => {
	return (
		<div
			className={cn(
				"flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
				(index === 0 || index === 4) &&
					"lg:border-l dark:border-neutral-800",
				index < 4 && "lg:border-b dark:border-neutral-800"
			)}
		>
			{index < 4 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
			)}
			{index >= 4 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
			)}
			<div className="group-hover/feature:text-[25px] duration-200 transition-all mb-4 text-[24px] relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
				{icon}
			</div>
			<div className="text-lg font-bold mb-2 relative z-10 px-10">
				<div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
				<span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
					{title}
				</span>
			</div>
			<p className="group-hover/feature:translate-x-2 duration-200 transition-all text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
				{description}
			</p>
		</div>
	);
};
