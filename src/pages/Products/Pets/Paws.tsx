import DropzoneField from "@/components/Products/Pets/DropzoneField";
import InfoDialog from "@/components/Products/Pets/InfoDialog";
import MainTitle from "@/components/Products/Pets/MainTitle";
import Steps from "@/components/Products/Pets/Steps";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Paws = () => {
	const [open, setOpen] = useState(true);
	const [files, setFiles] = useState<File[] | undefined>();

	return (
		<main className={`flex flex-col gap-12 ${open && "hidden"}`}>
			<MainTitle />
			<div className="flex gap-24 md:px-12 md:flex-row flex-col">
				<div className="flex items-end gap-6 flex-col md:flex-row">
					<BlurFade
						duration={0.8}
						delay={0.6}
						inView
						className="h-full w-full"
					>
						<DropzoneField files={files} setFiles={setFiles} />
					</BlurFade>
					<BlurFade duration={0.8} delay={0.7} inView>
						<Button className="px-6 !py-5" variant={"default"}>
							Enviar
						</Button>
					</BlurFade>
				</div>
				<BlurFade
					className="flex flex-col"
					duration={0.8}
					delay={1}
					inView
				>
					<Steps open={open} files={files} />
				</BlurFade>
			</div>
			{/* TODO Dynamic filling in process*/}

			<InfoDialog open={open} setOpen={setOpen} />
		</main>
	);
};

export default Paws;
