import DropzoneField from "@/components/Products/Pets/DropzoneField";
import InfoDialog from "@/components/Products/Pets/InfoDialog";
import Steps from "@/components/Products/Pets/Steps";
import type { TimelineItem } from "@/components/timeline";

const Paws = () => {
	const items: TimelineItem[] = [
		{
			id: "1",
			title: "Preencher informações",
			description: "Preencha suas informações na caixa",
			timestamp: "Passo 1",
			status: "completed",
		},
		{
			id: "2",
			title: "Adicionar a foto da pata",
			description: "A foto da pata do seu pet deve ser adicionada",
			timestamp: "Passo 2",
			status: "active",
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
		<main className="flex flex-col gap-12">
			<div className="flex flex-col gap-2">
				<h1 className="font-inter text-3xl font-semibold !mt-12">
					Encomende já a pata de seu pet personalizada!
				</h1>
				<p className="max-w-2xl text-tertiary/80">
					Ao enviar a foto da pata de seu animal, entraremos em
					contato pelo WhatsApp, envieremos o modelo para aprovação,
					junto do valor total da sua encomenda.
				</p>
			</div>
			<div className="flex justify-between items-center px-12">
				<DropzoneField />
				<Steps items={items} />
			</div>
			<InfoDialog />
		</main>
	);
};

export default Paws;
