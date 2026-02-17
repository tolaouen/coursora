import NavbarPage from "@/components/navbar";
import {
	Home,
	ChevronRight,
	Languages,
	UsersRound,
	Clock9,
	CalendarCheck2,
	MapPin,
} from "lucide-react";
export default function DetailLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="mx-10 my-10">
			{/* <div className="flex flex-col w-full">
				<NavbarPage />
			</div> */}
			<div className="my-2">
				<div className="flex flex-row font-sm text-[12px] items-center gap-1 text-muted-foreground font-semibold">
					<div>
						<a href="/">
							<Home width={15} />
						</a>
					</div>
					<div>
						<ChevronRight width={15} />
					</div>
					<div>
						<a href="#">Browse</a>
					</div>
					<div>
						<ChevronRight width={15} />
					</div>
					<div>
						<a href="/course">Computer Science</a>
					</div>
					<div>
						<ChevronRight width={15} />
					</div>
					<div className="text-black">
						<a href="/detail">Software Development</a>
					</div>
				</div>
			</div>
			<div>{children}</div>
		</main>
	);
}
