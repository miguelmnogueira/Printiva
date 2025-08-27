import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { useState } from "react";

const InfoDialog = () => {
	const [open, setOpen] = useState(true);

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogContent
				className="sm:max-w-[455px]"
				onEscapeKeyDown={(e) => e.preventDefault()}
			>
				<form
					onSubmit={(e) => {
						setOpen(false);
						e.preventDefault();
					}}
					className="flex flex-col gap-4"
				>
					<AlertDialogHeader>
						<div className="flex flex-col gap-1">
							<AlertDialogTitle>
								Antes de começar, insira suas informações
							</AlertDialogTitle>
							<AlertDialogDescription>
								Não se preocupe, não iremos compartilhar suas
								informações a terceiros.
							</AlertDialogDescription>
						</div>
					</AlertDialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="name-1">Nome</Label>
							<Input
								id="name-1"
								name="name"
								placeholder="Digite seu nome"
								required
							/>
						</div>
						<div className="grid gap-3">
							<Label htmlFor="username-1">Telefone</Label>
							<PhoneInput
								defaultCountry="BR"
								placeholder="Digite seu telefone"
								required
							/>
						</div>
					</div>
					<AlertDialogFooter>
						<Button type="submit">Pronto</Button>
					</AlertDialogFooter>
				</form>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default InfoDialog;
