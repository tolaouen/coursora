"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import {
	Card,
	CardContent,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { useState } from "react";
export default function CoursePage() {
	const description: string = `Explore computer science courses on Coursora to equip your with job relevant skills for variety of roles. Learn programming techniques and build technical skills on course on software development, algorithm design, system architecture, and more.`;
	const courses = ["All", "Beginner", "Intermediate", "Advance"];
	const [active, setActive] = useState<string | null>(null);

	// variable card view
	const course_card_1 = [
		{
			id: 1,
			image: "/computer-science.jpeg",
			provider: {
				icon: "/harvard.png",
				name: "Harvard University",
			},
			title: "Introduction to Python Programming",
			description: "Course",
			status: "Preview",
		},
		{
			id: 2,
			image: "/computer-science.jpeg",
			provider: {
				icon: "/harvard.png",
				name: "Harvard University",
			},
			title: "Data Science and Machine Learning",
			description: "Course",
			status: "Free Trial",
		},
	];

	const course_card_2 = [
		{
			id: 1,
			image: "/computer-science.jpeg",
			provider: {
				icon: "/harvard.png",
				name: "Harvard University",
			},
			title: "Cybersecurity and Networking",
			description: "Course",
			status: "Free Trial",
			bill: {
				icon: <GraduationCap />,
				name: "Build toward a degree",
			},
		},
		{
			id: 2,
			image: "/computer-science.jpeg",
			provider: {
				icon: "/harvard.png",
				name: "Harvard University",
			},
			title: "System Admistater and Design",
			description: "Course",
			status: "Preview",
			bill: {
				icon: <GraduationCap />,
				name: "Build toward a degree",
			},
		},
	];

	const course_card_3 = [
		{
			id: 1,
			image: "/computer-science.jpeg",
			provider: {
				icon: "/harvard.png",
				name: "Harvard University",
			},
			title: "Computer Science",
			description: "Course",
			status: "Free Trial",
		},
		{
			id: 2,
			image: "/computer-science.jpeg",
			provider: {
				icon: "/harvard.png",
				name: "Harvard University",
			},
			title: "Computer Science",
			description: "Course",
			status: "Free Trial",
		},
		{
			id: 3,
			image: "/computer-science.jpeg",
			provider: {
				icon: "/harvard.png",
				name: "Harvard University",
			},
			title: "Computer Science",
			description: "Course",
			status: "Free Trial",
		},
		{
			id: 4,
			image: "/computer-science.jpeg",
			provider: {
				icon: "/harvard.png",
				name: "Harvard University",
			},
			title: "Computer Science",
			description: "Specialization",
			status: "Free Trial",
		},
		{
			id: 5,
			image: "/computer-science.jpeg",
			provider: {
				icon: "/harvard.png",
				name: "Harvard University",
			},
			title: "Computer Science",
			description: "Course",
			status: "Free Trial",
		},
		{
			id: 6,
			image: "/computer-science.jpeg",
			provider: {
				icon: "/harvard.png",
				name: "Harvard University",
			},
			title: "Computer Science",
			description: "Guided Project",
			status: "Free Trial",
		},
		{
			id: 7,
			image: "/computer-science.jpeg",
			provider: {
				icon: "/harvard.png",
				name: "Harvard University",
			},
			title: "Computer Science",
			description: "Course",
			status: "Free Trial",
		},
		{
			id: 8,
			image: "/computer-science.jpeg",
			provider: {
				icon: "/harvard.png",
				name: "Harvard University",
			},
			title: "Computer Science",
			description: "Course",
			status: "Free Trial",
		},
	];
	return (
		<div>
			<section className="flex flex-row justify-between items-center gap-2 ">
				<div className="w-[800]">
					<div>
						<h1 className="text-[32px] font-semibold mb-2">Computer Science</h1>
						<p className="w-[700] text-muted-foreground">{description}</p>
					</div>
				</div>
				<div className="flex flex-col gap-6 mt-10">
					<div className="flex flex-row gap-4  justify-center items-center">
						<div>
							<h1 className="text-black font-semibold">373</h1>
							<p className="text-muted-foreground">credentials</p>
						</div>
						<div className="border-r border-l px-3">
							<h1 className="text-black font-semibold">19</h1>
							<p className="text-muted-foreground">online degrees</p>
						</div>
						<div>
							<h1 className="text-black font-semibold">2,347</h1>
							<p className="text-muted-foreground">courses</p>
						</div>
					</div>
					<div className="flex flex-row gap-2">
						{courses.map((item) => (
							<Button
								key={item}
								onClick={() => setActive(item)}
								className={`rounded-3xl text-[12px] border hover:bg-black hover:text-white transition-all ${active === item ? "bg-black text-white" : "bg-white text-black"}`}>
								{item}
							</Button>
						))}
					</div>
				</div>
			</section>
			<section className="my-4">
				<div>
					<h1 className="text-[20px] font-semibold mb-1">
						Introduction to Computer Programming Using Python
					</h1>
				</div>
				{/* card content related course search review on the tops */}
				<div className="flex flex-row gap-4">
					<div className="flex flex-row gap-4 justify-between">
						{course_card_1.map((item) => (
							<Card key={item.id} className="p-2 relative w-80">
								{/* Badge */}
								<Badge
									variant="default"
									className="absolute top-3 right-3 bg-white text-black text-[12px]">
									{item.status}
								</Badge>

								<div className="flex flex-col items-center gap-3">
									{/* Course Image */}
									<img
										src={item.image}
										alt={item.title}
										width={320}
										height={120}
										className="w-full h-40 rounded-lg object-cover"
									/>

									{/* Provider */}
									<div className="flex flex-row gap-3 items-center font-medium text-muted-foreground text-[13px] w-full">
										<img
											src={item.provider.icon || "/placeholder.svg"}
											alt={item.provider.name}
											className="w-7 h-7 rounded-full object-cover"
										/>
										<h2>{item.provider.name}</h2>
									</div>

									{/* Title */}
									<div className="text-[16px] h-[55] w-full">
										<CardTitle>{item.title}</CardTitle>
									</div>

									{/* Description */}
									<div className="text-muted-foreground text-[13px] w-full">
										<p>{item.description}</p>
									</div>
								</div>
							</Card>
						))}
					</div>

					<div>
						<div className="flex flex-row gap-4 justify-between">
							{course_card_2.map((item) => (
								<Card key={item.id} className="p-2 relative w-80">
									{/* Badge */}
									<Badge
										variant="default"
										className="absolute top-3 right-3 bg-white text-black text-[12px]">
										{item.status}
									</Badge>

									<div className="flex flex-col items-center gap-3">
										{/* Course Image */}
										<img
											src={item.image}
											alt={item.title}
											width={320}
											height={120}
											className="w-full h-40 rounded-lg object-cover"
										/>

										{/* Provider */}
										<div className="flex flex-row gap-3 items-center font-medium text-muted-foreground text-[13px] w-full">
											<img
												src={item.provider.icon || "/placeholder.svg"}
												alt={item.provider.name}
												className="w-7 h-7 rounded-full object-cover"
											/>
											<h2>{item.provider.name}</h2>
										</div>

										{/* Title */}
										<div className="text-[16px] h-[35] w-full">
											<CardTitle>{item.title}</CardTitle>
										</div>

										{/* Description */}
										<div className="text-muted-foreground text-[13px] w-full">
											<div className="flex flex-row gap-2 items-center text-green-400">
												<h1>{item.bill.icon}</h1>
												<p>{item.bill.name}</p>
											</div>
											<p>{item.description}</p>
										</div>
									</div>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="mt-10">
				<div className="grid grid-cols-4 gap-4">
					{course_card_3.map((item) => (
						<Card key={item.id} className="p-2 relative w-80">
							{/* Badge */}
							<Badge
								variant="default"
								className="absolute top-3 right-3 bg-white text-black text-[12px]">
								{item.status}
							</Badge>

							<div className="flex flex-col items-center gap-3">
								{/* Course Image */}
								<img
									src={item.image}
									alt={item.title}
									width={320}
									height={120}
									className="w-full h-40 rounded-lg object-cover"
								/>

								{/* Provider */}
								<div className="flex flex-row gap-3 items-center font-medium text-muted-foreground text-[13px] w-full">
									<img
										src={item.provider.icon || "/placeholder.svg"}
										alt={item.provider.name}
										className="w-7 h-7 rounded-full object-cover"
									/>
									<h2>{item.provider.name}</h2>
								</div>

								{/* Title */}
								<div className="text-[16px] h-[55] w-full">
									<CardTitle>{item.title}</CardTitle>
								</div>

								{/* Description */}
								<div className="text-muted-foreground text-[13px] w-full">
									<p>{item.description}</p>
								</div>
							</div>
						</Card>
					))}
				</div>
			</section>
		</div>
	);
}
