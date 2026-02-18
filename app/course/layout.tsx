import {
	Home,
	ChevronRight,
	Languages,
	UsersRound,
	Clock9,
	CalendarCheck2,
	MapPin,
} from "lucide-react";
export default function CourseLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="lg:mx-15 md:mx-13 sm:mx-10 mx-5 my-10">
			<div className="mt-23">
				<div className="flex flex-row font-sm text-[12px] items-center gap-1 text-muted-foreground font-semibold">
					<div>
						<a href="/">Explore Categories</a>
					</div>
					<div>
						<ChevronRight width={15} />
					</div>
					<div className="text-black">
						<a href="/course">Computer Science</a>
					</div>
				</div>
			</div>
			<div>{children}</div>
		</main>
	);
}
