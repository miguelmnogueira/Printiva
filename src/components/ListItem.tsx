import React from "react";
import { NavigationMenuLink } from "./ui/navigation-menu";

interface ListItemProps {
	title: string;
	icon?: React.ReactNode;
	href: string;
	children: React.ReactNode;
}

const ListItem = ({ title, href, children, icon }: ListItemProps) => {
	return (
		<li>
			<NavigationMenuLink asChild className="text-left">
				<a
					href={href}
					className={
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
					}
				>
					<div className="!m-0 text-md font-medium leading-none flex gap-2  text-primary [&>svg]:!size-4.5 items-center">
						{icon}
						<span>{title}</span>
					</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
};

export default ListItem;
