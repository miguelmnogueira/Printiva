"use client";

import * as React from "react";
import {
	Menu,
	ChevronDown,
	ChevronRight,
	LucideGamepad2,
	PawPrint,
	User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

type MenuItem = {
	title: string;
	href?: string;
	submenu?: MenuItem[];
	icon?: React.ReactNode;
	desc?: string;
};

const menuItems: MenuItem[] = [
	{ title: "Página Inicial", href: "/" },
	{
		title: "Produtos",
		submenu: [
			{
				title: "Linha Pet",
				href: "/products/pets",
				icon: <PawPrint size={18} />,
				desc: "Recordações e presentes para seus pets.",
			},
			{
				title: "Linha Minis",
				href: "/products/miniatures",
				icon: <User size={18} />,
				desc: "Miniaturas customizadas sua ou de quem quiser.",
			},
			{
				title: "Linha Gamer",
				href: "/products/gamer",
				icon: <LucideGamepad2 size={18} />,
				desc: "De suportes para controles a acessórios gamers.",
			},
		],
	},
	{ title: "Sobre Nós", href: "/aboutus" },
	{ title: "Contato", href: "/contact" },
];

const MenuItemComponent: React.FC<{ item: MenuItem; depth?: number }> = ({
	item,
	depth = 0,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);

	if (item.submenu) {
		return (
			<Collapsible open={isOpen} onOpenChange={setIsOpen}>
				<CollapsibleTrigger asChild>
					<button
						className={cn(
							"flex w-full items-center justify-between py-2 text-2xl font-medium transition-colors hover:text-primary pr-8",
							depth > 0 && "pl-4"
						)}
					>
						{item.title}
						{isOpen ? (
							<ChevronDown className="h-4 w-4" />
						) : (
							<ChevronRight className="h-4 w-4" />
						)}
					</button>
				</CollapsibleTrigger>
				<CollapsibleContent>
					{item.submenu.map((subItem) => (
						<MenuItemComponent
							key={subItem.title}
							item={subItem}
							depth={depth + 1}
						/>
					))}
				</CollapsibleContent>
			</Collapsible>
		);
	}

	return (
		<a
			href={item.href}
			className={cn(
				" flex-col py-2 flex text-2xl font-medium transition-colors hover:text-primary",
				depth > 0 && "pl-4",
				item.href === "/" && "text-primary"
			)}
		>
			{item.icon ? (
				<span>
					<span className="flex gap-2 items-center text-xl">
						{item.icon}
						{item.title}
					</span>
					<p className="text-sm text-tertiary pr-4">{item.desc}</p>
				</span>
			) : (
				<span>{item.title}</span>
			)}
		</a>
	);
};

export default function HamburgerMenu() {
	const [open, setOpen] = React.useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild className="md:hidden">
				<Button
					variant="ghost"
					size="icon"
					className="md:hidden my-auto"
				>
					<Menu className="size-6" />
					<span className="sr-only">Toggle menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent
				side="right"
				className="w-[240px] sm:w-[300px] md:hidden [&>button:first-of-type>svg]:size-6 [&>button:first-of-type>svg]:mt-3"
			>
				<nav className="flex flex-col space-y-4 pl-6 mt-14">
					{menuItems.map((item) => (
						<MenuItemComponent key={item.title} item={item} />
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
}
