import { Link } from "react-router";

const NoRoutes = () => {
	return (
		<div className="flex flex-col items-center justify-center h-[60vh] gap-8">
			<div className="flex flex-col items-center">
				<h1 className="font-poppins text-6xl uppercase font-bold">
					Error 404
				</h1>
				<h3 className="text-4xl capitalize">Rota não encontrada</h3>
			</div>
			<Link
				className="h-12 px-4 rounded-lg font-medium text-lg text-primary-foreground flex items-center bg-foreground/90 hover:bg-white transition-colors"
				to={`/home`}
			>
				Voltar para o início
			</Link>
		</div>
	);
};

export default NoRoutes;
