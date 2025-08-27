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
			<div className="flex gap-24 px-12">
				<BlurFade
					duration={0.6}
					delay={0.6}
					inView
					className="flex flex-col items-end gap-6"
				>
					<DropzoneField files={files} setFiles={setFiles} />
					<div className="flex items-center">
						<Button className="px-6 !py-5" variant={"default"}>
							Enviar
						</Button>
					</div>
				</BlurFade>
				<BlurFade
					className="flex flex-col"
					duration={0.6}
					delay={1}
					inView
				>
					<Steps open={open} files={files} />
				</BlurFade>
			</div>

			<InfoDialog open={open} setOpen={setOpen} />
		</main>
	);
};

export default Paws;
