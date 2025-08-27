import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ListItem from "./ListItem";
import { Gamepad2, PackageSearch, PawPrint, User } from "lucide-react";

const Navigation = () => {
	return (
		<NavigationMenu viewport={false} className="max-md:hidden">
			<NavigationMenuList className="text-text-tertiary lg:gap-5">
				<NavigationMenuItem>
					<NavigationMenuLink href="/home">
						Página Inicial
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						Nossos Produtos
						<NavigationMenuContent className=" !bg-background">
							<ul className="grid gap-3 p-2 md:w-[400px] lg:w-[550px] lg:grid-cols-[.75fr_1.1fr] lg:grid-rows-[.5fr,.5fr,.5fr]">
								<li className="row-span-3">
									<NavigationMenuLink asChild>
										<div className="relative text-left flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
											<div className="mb-2  text-lg font-medium">
												Produtos
											</div>
											<p className="text-sm leading-tight text-muted-foreground ">
												Aqui você encontra uma variedade
												de produtos, com atenção aos
												detalhes.
											</p>
											<PackageSearch
												className="absolute bottom-0 right-0 size-24 text-[#494949]"
												color="#494949"
												strokeWidth={1.6}
											/>
										</div>
									</NavigationMenuLink>
								</li>
								<ListItem
									href="/products/pets"
									title="Linha Pets"
									icon={<PawPrint />}
								>
									Faça recordações e presentes para seus
									amigos peludos favoritos.
								</ListItem>
								<ListItem
									href="/products/miniatures"
									title="Linha Miniaturas"
									icon={<User />}
								>
									Crie miniaturas customizadas para
									colecionar, presentear ou decorar.
								</ListItem>

								<ListItem
									href="/products/gamer"
									title="Linha Gamer"
									icon={<Gamepad2 />}
								>
									De suportes para controles a acessórios
									gamers, temos tudo o que você precisa.
								</ListItem>
							</ul>
						</NavigationMenuContent>{" "}
					</NavigationMenuTrigger>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink href="/contact">
						Contato
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink href="/aboutus">
						Sobre Nós
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Navigation;
