"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import {
	Card,
	CardContent,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { useState } from "react";
import { div } from "motion/react-client";
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
			bill: null,
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
			bill: null,
		},
		{
			id: 3,
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
			id: 4,
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
			title: "Software Developement",
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
			title: "Software Engineering",
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
			title: "Ethical Hacking",
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
			title: "Linux System Admistater",
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
			title: "Bckend Development",
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
			title: "Full-Stack Development",
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
			title: "Network and Security",
			description: "Course",
			status: "Free Trial",
		},
	];
	return (
		<div>
			<section className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-2 md:flex md:flex-row md:justify-between md:items-center md:gap-2">
				<div className="lg:w-[800]">
					<div>
						<h1 className="lg:text-[32px] md:text-[28px] sm:text-[25px] text-[20] font-semibold mb-2">
							Computer Science
						</h1>
						<p className="lg:w-[700] text-muted-foreground lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]">
							{description}
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-6 mt-10">
					<div className="flex flex-row gap-4  justify-center items-center  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] ">
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
					<div className="flex flex-row gap-2 items-center justify-center">
						{courses.map((item) => (
							<Button
								key={item}
								onClick={() => setActive(item)}
								size="default"
								className={`rounded-3xl lg:text-[12px] text-[10px] border hover:bg-black hover:text-white transition-all ${active === item ? "bg-black text-white" : "bg-white text-black"} `}>
								{item}
							</Button>
						))}
					</div>
				</div>
			</section>
			<section className="my-4">
				<div>
					<h1 className="lg:text-[20px] md:text-[20px] sm:text-[18px] text-[16px] font-semibold mb-1">
						Introduction to Computer Programming Using Python
					</h1>
				</div>
				{/* card content related course search review on the tops */}
				<div>
					<div className="grid grid-cols-2 gap-1 sm:grid sm:grid-cols-2 sm:gap-2  md:grid md:grid-cols-3 md:gap-3 lg:grid lg:grid-cols-4 lg:gap-4 lg:justify-center">
						{course_card_1.map((item) => (
							<motion.div
								key={item.id}
								whileHover={{ y: -6, scale: 1.03 }}
								whileTap={{ scale: 0.98 }}
								transition={{ type: "spring", stiffness: 260 }}
								className="h-full">
								<Card className="p-2 relative flex flex-col justify-between h-full cursor-pointer hover:shadow-xl transition-shadow duration-300">
									{/* Badge */}
									<Badge
										variant="default"
										className="absolute top-3 right-3 bg-white text-black text-[12px]">
										{item.status}
									</Badge>

									<div className="flex flex-col gap-3">
										{/* Course Image */}
										<img
											src={item.image}
											alt={item.title}
											className="w-full h-40 rounded-lg object-cover"
										/>

										{/* Provider */}
										<div className="flex gap-3 items-center text-muted-foreground text-[13px]">
											<img
												src={item.provider.icon || "/placeholder.svg"}
												alt={item.provider.name}
												className="w-7 h-7 rounded-full object-cover"
											/>
											<h2>{item.provider.name}</h2>
										</div>

										{/* Title */}
										<div className="lg:text-[16px] md:text-[15px] sm:text-[14px] text-[13px] h-[40]">
											<CardTitle>{item.title}</CardTitle>
										</div>
									</div>

									{/* Bottom Section */}
									<div className="text-muted-foreground text-[13px] mt-2">
										{item.bill ? (
											<div className="flex gap-2 items-center text-blue-500">
												<span>{item.bill.icon}</span>
												<span>{item.bill.name}</span>
											</div>
										) : null}
										<p>{item.description}</p>
									</div>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>
			<section className="mt-10 hidden md:block">
				<div className="lg:grid lg:grid-cols-4 lg:gap-4 md:grid md:grid-cols-3 md:gap-3 sm:grid sm:grid-cols-3 sm:gap-2 grid grid-cols-2 gap-1">
					{course_card_3.map((item) => (
						<motion.div
							key={item.id}
							whileHover={{ y: -6, scale: 1.03 }}
							whileTap={{ scale: 0.98 }}
							transition={{ type: "spring", stiffness: 260 }}
							className="h-full">
							<Card
								key={item.id}
								className="p-2 relative flex flex-col justify-between lg:w-80">
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
									<div className="lg:text-[16px] md:text-[15px] sm:text-[14px] text-[12px] h-[55] w-full">
										<CardTitle>{item.title}</CardTitle>
									</div>

									{/* Description */}
									<div className="text-muted-foreground text-[13px] w-full">
										<p>{item.description}</p>
									</div>
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</section>
		</div>
	);
}
