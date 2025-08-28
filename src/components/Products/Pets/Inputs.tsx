import { BlurFade } from "@/components/ui/blur-fade";
import DropzoneField from "./DropzoneField";
import MeasureField from "./MeasureField";
import { Package } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const StepInput = ({
	files,
	setFiles,
	currentStep,
	measurement,
	setMeasurement,
	estimatedPrice,
	setEstimatedPrice,
	terms,
	setTerms,
}: {
	files: File[] | undefined;
	setFiles: (files: File[] | undefined) => void;
	currentStep: number;
	measurement: number | undefined;
	setMeasurement: (value: number) => void;
	estimatedPrice: number | undefined;
	setEstimatedPrice: (value: number) => void;
	terms: boolean;
	setTerms: (value: boolean) => void;
}) => {
	switch (currentStep) {
		case 1:
			return (
				<BlurFade
					duration={0.8}
					delay={0.7}
					className="h-full w-full md:w-112"
					inView
				>
					<DropzoneField files={files} setFiles={setFiles} />
				</BlurFade>
			);
		case 2:
			return (
				<BlurFade
					duration={0.8}
					className="h-full flex flex-col gap-10 w-full md:w-112"
				>
					<MeasureField
						measurement={measurement}
						setMeasurement={setMeasurement}
						estimatedPrice={estimatedPrice}
						setEstimatedPrice={setEstimatedPrice}
					/>
					<div className="flex items-start gap-3">
						<Checkbox
							id="terms-2"
							checked={terms}
							onCheckedChange={setTerms}
						/>
						<div className="grid gap-2">
							<Label htmlFor="terms-2">
								Aceito os termos e condições
							</Label>
							<p className="text-muted-foreground text-sm max-w-xs">
								Ao clicar nesta caixa de seleção, você concorda
								com os termos e condições.
							</p>
						</div>
					</div>
				</BlurFade>
			);
		case 3:
			return (
				<BlurFade
					duration={0.8}
					className="h-full w-full md:w-138 flex flex-col gap-4 "
				>
					<div className="flex flex-col border py-8 px-8 rounded-lg gap-2">
						<div className="flex items-center gap-3">
							<Package size={32} />
							<h4 className="text-3xl font-semibold">
								Já recebemos seu pedido!
							</h4>
						</div>
						<p className="text-base text-muted-foreground  pl-7 max-w-lg">
							Estamos processando seu pedido e você receberá uma
							notificação com a pré-visualização e método de
							pagamento, te chamamos em breve.
						</p>
					</div>
				</BlurFade>
			);
		default:
			return null;
	}
};

export default StepInput;
