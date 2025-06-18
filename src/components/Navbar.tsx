import PrintivaLogo from "./PrintivaLogo";

import { Link } from "react-router";

const links = [
	{ name: "Página Inicial", href: "/home" },
	{ name: "Nossos Produtos", href: "/catalog" },
	{ name: "Contato", href: "/contact" },
	{ name: "Sobre Nós", href: "/aboutus" },
];

const Navbar = () => {
	return (
		<header className="h-20 w-full flex px-padding bg-linear-to-b from-background to-background/80 fixed top-0 left-0 border-b border-border/50 justify-between backdrop-blur-[12px]">
			<a
				href="/home"
				className="flex justify-center items-center gap-1.5"
			>
				<PrintivaLogo />
				<span className="text-xl font-poppins font-semibold">
					Printiva
				</span>
			</a>
			<nav className="flex justify-center items-center h-full gap-10 text-text-tertiary">
				{links.map((link) => (
					<Link
						key={link.href}
						to={link.href}
						className={
							`${location.pathname === link.href ? "" : ""}` +
							" hover:underline underline-offset-2 text-sm "
						}
					>
						{link.name}
					</Link>
				))}
			</nav>
		</header>
	);
};

export default Navbar;
