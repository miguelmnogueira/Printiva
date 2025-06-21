import PrintivaLogo from "./PrintivaLogo";

import { Link } from "react-router";
import { animateScroll as scroll } from "react-scroll";

const links = [
	{ name: "Página Inicial", href: "/home" },
	{ name: "Nossos Produtos", href: "/catalog" },
	{ name: "Contato", href: "/contact" },
	{ name: "Sobre Nós", href: "/aboutus" },
];

const Navbar = () => {
	const scrollToTop = () => {
		scroll.scrollToTop({ duration: 600 });
	};
	return (
		<header className="md:px-padding z-20 h-20 w-full flex px-sm-padding bg-linear-to-b from-background to-background/80 fixed top-0 left-0 border-b border-border/50 justify-between backdrop-blur-[12px]">
			<a
				onClick={scrollToTop}
				className="flex justify-center items-center gap-1.5 cursor-pointer"
			>
				<PrintivaLogo />
				<span className="text-xl font-inter font-semibold hidden md:block">
					Printiva
				</span>
			</a>
			<nav className="md:flex hidden justify-center items-center h-full gap-10 text-text-tertiary">
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
