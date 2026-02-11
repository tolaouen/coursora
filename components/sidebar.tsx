import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarGroup,
	SidebarProvider,
	SidebarTrigger,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
	BadgeCheckIcon,
	BellIcon,
	CreditCardIcon,
	LogOutIcon,
	Settings,
	House,
	TableOfContents,
	Component,
	EqualApproximately,
} from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Asidebar() {
	return (
		<main>
			<SidebarProvider>
				<div>
					<Sidebar>
						<SidebarContent>
							<div>
								{/* Avatar preview profile*/}

								<div>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<div className="flex flex-row gap-2 p-5 items-center">
												<div>
													<Avatar>
														<AvatarImage
															src="https://github.com/shadcn.png"
															title="Image"
														/>
													</Avatar>
												</div>

												<div>
													<p className="text-[15px] font-semibold ">
														Oppa Jonhy
													</p>
													<small className="text-[12px] text-gray-500">
														oppajonhy@gmail.com
													</small>
												</div>
											</div>
										</DropdownMenuTrigger>
										<DropdownMenuContent>
											<DropdownMenuGroup>
												<DropdownMenuItem>
													<BadgeCheckIcon />
													Account
												</DropdownMenuItem>
												<DropdownMenuItem>
													<Settings />
													Settings
												</DropdownMenuItem>
												<DropdownMenuItem>
													<BellIcon />
													Notifications
												</DropdownMenuItem>
												<DropdownMenuSeparator />
											</DropdownMenuGroup>
											<DropdownMenuItem variant="destructive">
												<LogOutIcon />
												<h3>Sign Out</h3>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							</div>
							<div className="flex flex-col gap-5 justify-center p-10 list-none text-[15px]">
								<SidebarMenuItem>
									<a href="/" className="flex flex-row gap-4">
										<div>
											<House />
										</div>
										<div>Home</div>
									</a>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<a href="/docs" className="flex flex-row gap-4">
										<div>
											<TableOfContents />
										</div>
										<div>Docs</div>
									</a>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<a href="/components" className="flex flex-row gap-4">
										<div>
											<Component />
										</div>
										<div>Components</div>
									</a>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<a href="/about" className="flex flex-row gap-4">
										<div>
											<EqualApproximately />
										</div>
										<div>About</div>
									</a>
								</SidebarMenuItem>
							</div>
						</SidebarContent>
					</Sidebar>
				</div>
				<SidebarTrigger />
			</SidebarProvider>
		</main>
	);
}
