import { Timeline, type TimelineItem } from "@/components/timeline";

export default function Steps({
	open,
	files,
}: {
	open: boolean;
	files: File[] | undefined;
}) {
	const items: TimelineItem[] = [
		{
			id: "1",
			title: "Preencher informações",
			description: "Preencha suas informações na caixa",
			timestamp: "Passo 1",
			status: open ? "active" : "completed",
		},
		{
			id: "2",
			title: "Adicionar a foto da pata",
			description: "A foto da pata do seu pet deve ser adicionada",
			timestamp: "Passo 2",
			status: files == undefined ? "active" : "completed",
		},
		{
			id: "3",
			title: "Selecionar o tamanho da impressão",
			description: "Selecione o tamanho da impressão desejado",
			timestamp: "Passo 3",
			status: "pending",
		},
		{
			id: "4",
			title: "Enviar as informações",
			description: "Pressione o botão para enviar as informações",
			timestamp: "Passo 4",
			status: "pending",
		},
	];
	return (
		<div>
			<Timeline
				items={items}
				className="max-md:hidden"
				variant={"spacious"}
			/>
			<Timeline items={items} className="md:hidden" variant={"compact"} />
		</div>
	);
}
