import DropzoneField from "@/components/Products/Pets/DropzoneField";
import InfoDialog from "@/components/Products/Pets/InfoDialog";

const Paws = () => {
	return (
		<main className="flex flex-col gap-12">
			<div>
				<h1 className="font-inter text-4xl font-semibold !mt-12">
					Encomende já a pata de seu pet personalizada!
				</h1>
				<p className="max-w-[60%] text-tertiary">
					Ao enviar a foto da pata de seu animal, entraremos em
					contato pelo WhatsApp, envieremos o modelo para aprovação,
					junto do valor total da sua encomenda.
				</p>
			</div>
			<DropzoneField />
			<InfoDialog />
		</main>
	);
};

export default Paws;
