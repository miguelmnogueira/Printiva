import PrintivaLogo from "./PrintivaLogo";

import Navigation from "./Navigation";
import { Link } from "react-router";

const Navbar = () => {
	return (
		<header className="md:px-padding z-20 h-20 w-full flex px-sm-padding bg-linear-to-b from-background to-background/80 fixed top-0 left-0 border-b border-border/50 justify-between backdrop-blur-[12px]">
			<Link to={"/"} className="flex items-center gap-2">
				<PrintivaLogo />
				<span className="text-xl font-inter font-semibold hidden md:block">
					Printiva
				</span>
			</Link>
			<Navigation />
		</header>
	);
};

export default Navbar;
