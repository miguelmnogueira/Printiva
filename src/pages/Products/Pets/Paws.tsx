import InfoDialog from "@/components/Products/Pets/InfoDialog";
import StepInput from "@/components/Products/Pets/Inputs";
import MainTitle from "@/components/Products/Pets/MainTitle";
import Steps from "@/components/Products/Pets/Steps";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Paws = () => {
	const [open, setOpen] = useState(true);
	const [files, setFiles] = useState<File[] | undefined>();
	const [measurement, setMeasurement] = useState<number | undefined>(
		undefined
	);
	const [estimatedPrice, setEstimatedPrice] = useState<number | undefined>(
		undefined
	);
	const [terms, setTerms] = useState<boolean>(false);
	const [steps, setSteps] = useState<number>(1);

	const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

	const [userInfo, setUserInfo] = useState<{
		name: string;
		phone: number | undefined;
	}>({
		name: "",
		phone: undefined,
	});

	const handleDisable = () => {
		if (steps === 1 && files?.length !== undefined) {
			return false;
		}

		if (steps === 2 && measurement !== undefined && terms) {
			return false;
		}
		return true;
	};

	const handleButton = () => {
		if (steps < 2) {
			setSteps(steps + 1);
		} else {
			if (files && files.length > 0) {
				sendToDiscord(files[0]);
				setSteps(steps + 1);
			}
		}
	};

	const sendToDiscord = async (file: File) => {
		const formData = new FormData();
		formData.append("file", file, file.name);
		formData.append(
			"payload_json",
			JSON.stringify({
				content: `
📦 **Novo pedido feito!**

🙍 Nome: **${userInfo.name}**
📱 Telefone: **${userInfo.phone}**

📏 Medida: **${measurement}cm**
💰 Preço estimado: **R$${estimatedPrice}**`,
				embeds: [
					{
						image: {
							url: `attachment://${file.name}`,
						},
					},
				],
			})
		);

		const res = await fetch(webhookUrl, {
			method: "POST",
			body: formData,
		});

		console.error("Failed:", await res.text());
	};

	return (
		<main className={`flex flex-col gap-12 ${open && "hidden"}`}>
			<MainTitle />
			<div className="flex gap-24 md:px-12 md:flex-row flex-col">
				<div className="flex items-end gap-6 flex-col md:flex-row">
					<StepInput
						files={files}
						setFiles={setFiles}
						currentStep={steps}
						measurement={measurement}
						setMeasurement={setMeasurement}
						estimatedPrice={estimatedPrice}
						setEstimatedPrice={setEstimatedPrice}
						terms={terms}
						setTerms={setTerms}
					/>
					<BlurFade duration={0.8} delay={0.7} inView>
						{steps < 3 && (
							<Button
								className="px-6 !py-5"
								variant={"default"}
								onClick={handleButton}
								disabled={handleDisable()}
							>
								{steps === 2 ? "Finalizar" : "Próximo"}
							</Button>
						)}
					</BlurFade>
				</div>
				<BlurFade
					className="flex flex-col"
					duration={0.8}
					delay={1}
					inView
				>
					<Steps
						open={open}
						files={files}
						steps={steps}
						measurements={measurement}
					/>
				</BlurFade>
			</div>
			{/* TODO Dynamic filling in process*/}

			<InfoDialog
				open={open}
				setOpen={setOpen}
				userInfo={userInfo}
				setUserInfo={setUserInfo}
			/>
		</main>
	);
};

export default Paws;
