import PrintivaLogo from "./PrintivaLogo";

import { animateScroll as scroll } from "react-scroll";
import Navigation from "./Navigation";

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
			<Navigation />
		</header>
	);
};

export default Navbar;
