import { Button } from "@/components/ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
export default function NavbarPage() {
	return (
		<main className="flex flex-row gap-15 justify-center items-center px-20 py-2 fixed bg-amber-100">
			{/* Logo SDF  */}
			<div>
				<img
					className="w-50"
					src="https://sdfcambodia.org/wp-content/uploads/2025/07/SDF-logo-png-scaled-e1753349114197.png"
					alt="SDF Image"
				/>
			</div>
			<div className="flex flex-row justify-center items-center px-10">
				{/* List main content */}
				<div>
					<HoverCard openDelay={10} closeDelay={100}>
						<HoverCardTrigger asChild>
							<Button variant={"ghost"} size={"sm"}>
								About Us <ChevronDown />
							</Button>
						</HoverCardTrigger>
						<HoverCardContent>
							<div className="flex flex-col justify-start items-start">
								<Button variant={"ghost"} className="pr-30" size={"sm"}>
									Who We Are
								</Button>
								<Button variant={"ghost"} className="pr-30" size={"sm"}>
									New & Events
								</Button>
								<Button variant={"ghost"} className="pr-30" size={"sm"}>
									Career
								</Button>
							</div>
						</HoverCardContent>
					</HoverCard>
				</div>
				<div>
					<HoverCard openDelay={10} closeDelay={100}>
						<HoverCardTrigger asChild>
							<Button variant={"ghost"} size={"sm"}>
								Programs <ChevronDown />
							</Button>
						</HoverCardTrigger>
						<HoverCardContent>
							<div className="flex flex-col justify-start items-start">
								<Button variant={"ghost"} className="pr-20 py-7 flex flex-col" size={"sm"}>
									<p>Interprises / Business</p>
									<p>Associations</p>
								</Button>
								<Button variant={"ghost"} className="pr-30" size={"sm"}>
									Trainee Providers
								</Button>
								<Button variant={"ghost"} className="pr-30" size={"sm"}>
									Individaula
								</Button>
							</div>
						</HoverCardContent>
					</HoverCard>
				</div>
				<div>
					<HoverCard openDelay={10} closeDelay={100}>
						<HoverCardTrigger asChild>
							<Button variant={"ghost"} size={"sm"}>
								Online Services <ChevronDown />
							</Button>
						</HoverCardTrigger>
						<HoverCardContent>
							<div className="flex flex-col justify-start items-start">
								<Button variant={"ghost"} className="pr-30" size={"sm"}>
									Partnership Platform
								</Button>
								<Button variant={"ghost"} className="pr-30" size={"sm"}>
									E-Learning Programs
								</Button>
							</div>
						</HoverCardContent>
					</HoverCard>
				</div>
				<div>
					<Button variant={"ghost"} size={"sm"}>
						Resources
					</Button>
				</div>
				<div>
					<Button variant={"ghost"} size={"sm"}>
						Contact Us
					</Button>
				</div>
				<div>
					<Button variant={"ghost"} size={"sm"}>
						Login
					</Button>
				</div>
				<div>
					<HoverCard openDelay={10} closeDelay={100}>
						<HoverCardTrigger asChild>
							<Button variant={"ghost"} size={"sm"}>
								🇺🇸 English <ChevronDown />
							</Button>
						</HoverCardTrigger>
						<HoverCardContent>
							<div className="flex flex-col justify-start items-start">
								<Button variant={"ghost"} className="pr-30" size={"sm"}>
									🇰🇭 ភាសាខ្មែរ
								</Button>
								<Button variant={"ghost"} className="pr-30" size={"sm"}>
									🇺🇸 English
								</Button>
							</div>
						</HoverCardContent>
					</HoverCard>
				</div>
			</div>
			{/* Search bar  */}
			<div>
				<Input placeholder="Searching..." />
			</div>
		</main>
	);
}
