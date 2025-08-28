import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const MeasureField = ({
	setMeasurement,
	estimatedPrice,
	setEstimatedPrice,
}: {
	measurement: number | undefined;
	setMeasurement: (value: number) => void;
	estimatedPrice: number | undefined;
	setEstimatedPrice: (value: number) => void;
}) => {
	const handleMeasurementChange = (value: number) => {
		setMeasurement(value);
		setEstimatedPrice((value - 9) * 2 + 40);
	};

	return (
		<div className="flex flex-col w-full gap-4">
			<div className="flex flex-col gap-5">
				<h4 className="text-xl font-semibold ">
					Selecione o tamanho da pata
				</h4>
				<div className="flex flex-col gap-2  ">
					<Label
						htmlFor="measurement"
						className="text-sm font-normal"
					>
						Largura da pata (cm)
					</Label>
					<Select
						onValueChange={(value) =>
							handleMeasurementChange(Number(value))
						}
					>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Selecione a medida" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Valores</SelectLabel>
								<SelectItem value="10">10x10cm</SelectItem>
								<SelectItem value="11">11x11cm</SelectItem>
								<SelectItem value="12">12x12cm</SelectItem>
								<SelectItem value="13">13x13cm</SelectItem>
								<SelectItem value="14">14x14cm</SelectItem>
								<SelectItem value="15">15x15cm</SelectItem>
								<SelectItem value="16">16x16cm</SelectItem>
								<SelectItem value="17">17x17cm</SelectItem>
								<SelectItem value="18">18x18cm</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>
			<div className="border py-7 flex rounded-md items-center flex-col gap-1 bg-card/30">
				<span className="text-xs text-tertiary">Preço Estimado</span>
				<span className="text-xl text-center font-semibold">
					R$
					{estimatedPrice
						? estimatedPrice.toFixed(2).replace(".", ",")
						: "0,00"}
				</span>
			</div>
		</div>
	);
};

export default MeasureField;
