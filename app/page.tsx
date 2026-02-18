"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	BriefcaseBusiness,
	TrendingUp,
	Code,
	Laptop,
	Hospital,
	Rocket,
	Users,
	PencilLine,
	Grid2x2X,
	FlaskConical,
	Sparkles,
	Search,
	Globe,
	ArrowRight,
	Star,
} from "lucide-react";

export default function Home() {
	const [search, setSearch] = React.useState("");
	const categories_first = [
		{
			icon: <BriefcaseBusiness />,
			name: "Business",
		},
		{
			icon: <Sparkles />,
			name: "Artificial Inteligence",
		},
		{
			icon: <TrendingUp />,
			name: "Data Science",
		},
		{
			icon: <Laptop />,
			name: "Computer Science",
		},
		{
			icon: <Code />,
			name: "Information Technology",
		},

		{
			icon: <Rocket />,
			name: "Personal Development",
		},
		{
			icon: <Hospital />,
			name: "Healthcare",
		},
		{
			icon: <Globe />,
			name: "Language Learning",
		},
	];
	const categories_second = [
		{
			icon: <Users />,
			name: "Social Sciences",
		},
		{
			icon: <PencilLine />,
			name: "Arts And Humanities",
		},
		{
			icon: <FlaskConical />,
			name: "Physical Science And Engineering",
		},
		{
			icon: <Grid2x2X />,
			name: "Math and Logic",
		},
	];

	const card_items = [
		{
			id: 1,
			image: "/image.jpeg",
			provider: {
				src: "/google.png",
				name: "Google",
			},
			title: "Google People Management Essentials",
			description: "Specialization",
			rate: {
				icon: <Star width={20} />,
				point: 4.5,
			},
		},
		{
			id: 2,
			image: "/image.jpeg",
			provider: {
				src: "/google.png",
				name: "Google",
			},
			title: "Google People Management Essentials",
			description: "Specialization",
			rate: {
				icon: <Star width={20} />,
				point: 4.5,
			},
		},
		{
			id: 3,
			image: "/image.jpeg",
			provider: {
				src: "/google.png",
				name: "Google",
			},
			title: "Google People Management Essentials",
			description: "Specialization",
			rate: {
				icon: <Star width={20} />,
				point: 4.5,
			},
		},
		{
			id: 4,
			image: "/image.jpeg",
			provider: {
				src: "/google.png",
				name: "Google",
			},
			title: "Google People Management Essentials",
			description: "Specialization",
			rate: {
				icon: <Star width={20} />,
				point: 4.5,
			},
		},
	];

	const career_explorer = [
		{
			id: 1,
			image: "/image.jpeg",
			title: "Video Game Developer",
			description:
				"A Video Game Developer designs and codes games, create engining...",
		},
		{
			id: 2,
			image: "/image.jpeg",
			title: "Video Game Developer",
			description:
				"A Video Game Developer designs and codes games, create engining...",
		},
		{
			id: 3,
			image: "/image.jpeg",
			title: "Video Game Developer",
			description:
				"A Video Game Developer designs and codes games, create engining...",
		},
		{
			id: 4,
			image: "/image.jpeg",
			title: "Video Game Developer",
			description:
				"A Video Game Developer designs and codes games, create engining...",
		},
		{
			id: 5,
			image: "/image.jpeg",
			title: "Video Game Developer",
			description:
				"A Video Game Developer designs and codes games, create engining...",
		},
	];

	const popular_categories = [
		{
			id: 1,
			button: {
				title: "Popular Business",
				icon: <ArrowRight />,
			},
			card: [
				{
					id: 1,
					image: "/image.jpeg",
					name: "Google",
					title: "Google Project Management",
					description: "Professional Certificate",
					logo: "/google.png",
					icon: <Star width={15} />,
					point: 4.5,
				},
				{
					id: 2,
					image: "/image.jpeg",
					name: "Google",
					title: "Google Project Management",
					description: "Professional Certificate",
					logo: "/google.png",
					icon: <Star width={15} />,
					point: 4.5,
				},
				{
					id: 3,
					image: "/image.jpeg",
					name: "Google",
					title: "Google Project Management",
					description: "Professional Certificate",
					logo: "/google.png",
					icon: <Star width={15} />,
					point: 4.5,
				},
			],
		},
		{
			id: 2,
			button: {
				title: "Popular Business",
				icon: <ArrowRight />,
			},
			card: [
				{
					id: 1,
					image: "/image.jpeg",
					name: "Google",
					title: "Google Project Management",
					description: "Professional Certificate",
					logo: "/google.png",
					icon: <Star width={15} />,
					point: 4.5,
				},
				{
					id: 2,
					image: "/image.jpeg",
					name: "Google",
					title: "Google Project Management",
					description: "Professional Certificate",
					logo: "/google.png",
					icon: <Star width={15} />,
					point: 4.5,
				},
				{
					id: 3,
					image: "/image.jpeg",
					name: "Google",
					title: "Google Project Management",
					description: "Professional Certificate",
					logo: "/google.png",
					icon: <Star width={15} />,
					point: 4.5,
				},
			],
		},
		{
			id: 3,
			button: {
				title: "Popular Business",
				icon: <ArrowRight />,
			},
			card: [
				{
					id: 1,
					image: "/image.jpeg",
					name: "Google",
					title: "Google Project Management",
					description: "Professional Certificate",
					logo: "/google.png",
					icon: <Star width={15} />,
					point: 4.5,
				},
				{
					id: 2,
					image: "/image.jpeg",
					name: "Google",
					title: "Google Project Management",
					description: "Professional Certificate",
					logo: "/google.png",
					icon: <Star width={15} />,
					point: 4.5,
				},
				{
					id: 3,
					image: "/image.jpeg",
					name: "Google",
					title: "Google Project Management",
					description: "Professional Certificate",
					logo: "/google.png",
					icon: <Star width={15} />,
					point: 4.5,
				},
			],
		},
	];
	return (
		<div className="w-full max-w-7xl mx-auto my-22">
			{/* Categories section */}
			<section className="flex flex-col gap-2 mt-10">
				<div className="flex flex-col gap-2">
					<h4 className="text-[20px] font-bold text-black">
						Explore Categories
					</h4>
				</div>
				{/* List items categoriese first*/}
				<div className="flex flex-row lg:gap-5">
					<div className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:flex-nowrap lg:gap-2 md:flex md:flex-row md:flex-wrap md:jusitify-center md:items-center sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:items-center md:gap-2 sm:gap-2 flex flex-row flex-wrap  items-center gap-2">
						{categories_first.map((items) => (
							<Button
								key={items.name}
								variant={"secondary"}
								className="text-[8px] rounded-2xl md:text-[10px] lg:text-[11px] capitalize">
								{items.icon}
								{items.name}
							</Button>
						))}
					</div>
					{/* Search dialog  content */}
					<div>
						<Dialog>
							<DialogTrigger asChild>
								<Button className="text-[12px] bg-blue-500 rounded-full">
									<Search />
								</Button>
							</DialogTrigger>
							<DialogContent className="!max-w-none lg:w-[70vw] lg:top-80 md:top-103 top-105 pt-14 px-15 flex flex-col gap-5">
								<div className="flex flex-row gap-1 justify-center h-0">
									<div className="w-full">
										<InputGroup>
											<InputGroupInput
												placeholder="Search..."
												onChange={(e) => setSearch(e.target.value)}
											/>
											<InputGroupAddon>
												<Search />
											</InputGroupAddon>
										</InputGroup>
									</div>
									<div>
										<Button
											className="rounded-sm bg-green-500 text-white"
											variant={"outline"}
											disabled={!search.trim()}>
											Search
										</Button>
									</div>
								</div>
								{/* Categories list in search dialog */}
								<div className="flex flex-row flex-wrap gap-2 lg:flex lg:flex-row lg:flex-nowrap md:flex md:flex-row md:flex-wrap sm:flex sm:flex-row sm:flex-wrap mt-7">
									{categories_second.map((items) => (
										<div key={items.name}>
											<Button
												variant={"secondary"}
												className="text-[8px] rounded-2xl lg:text-[10px]">
												{items.icon}
												{items.name}
											</Button>
										</div>
									))}
								</div>
								{/* line break card*/}
								<hr />
								{/* Search card content list appear higtlight view when user searched input*/}
								<div>
									<div className="w-full">
										<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
											{card_items.map((item) => (
												<Card
													key={item.id}
													className="lg:px-3 lg:py-3 md:px-2 md:py-2 sm:px-2 sm:py-2 px-1 py-1 hover:shadow-xl transition duration-300 hover:-translate-y-1 cursor-pointer flex flex-col">
													<div className="flex flex-col gap-3 h-full">
														<div className="flex flex-col gap-2 flex-1">
															<div>
																{/* Image */}
																<Image
																	src={item.image || "/placeholder.svg"}
																	alt={item.title}
																	width={320}
																	height={120}
																	className="rounded-lg object-cover w-full h-32"
																/>
															</div>
															{/* Provider */}
															<div className="flex items-center gap-2">
																<Badge variant="ghost" className="p-1">
																	<Image
																		src={
																			item.provider.src || "/placeholder.svg"
																		}
																		alt={item.provider.name}
																		width={16}
																		height={16}
																	/>
																</Badge>

																<span className="text-xs md:text-sm font-semibold text-gray-500">
																	{item.provider.name}
																</span>
															</div>

															{/* Title */}
															<CardTitle className="text-sm md:text-base leading-snug line-clamp-2">
																{item.title}
															</CardTitle>
														</div>

														<div className="space-y-2 pt-2 border-t">
															{/* Description */}
															<CardDescription className="text-xs md:text-sm">
																{item.description}
															</CardDescription>

															{/* Rating */}
															<div className="flex items-center gap-1 text-gray-500 text-xs">
																{item.rate.icon}
																<span className="font-medium">
																	{item.rate.point}
																</span>
															</div>
														</div>
													</div>
												</Card>
											))}
										</div>
									</div>
								</div>
							</DialogContent>
						</Dialog>
					</div>
				</div>
				{/* List items categories second */}
				<div className="lg:flex lg:flex-row lg:gap-2 lg:flex-nowrap md:flex md:flex-row md:flex-wrap md:gap-2 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-2 flex flex-row flex-wrap gap-2 ">
					{categories_second.map((items) => (
						<div key={items.name} className="hidden md:block">
							<Button variant={"secondary"} className="text-[12px] rounded-2xl">
								{items.icon}
								{items.name}
							</Button>
						</div>
					))}
				</div>
			</section>
			{/* Card Section display courses review */}
			<section className="my-8 md:px-0">
				<main>
					<Card className="flex flex-col lg:flex-row gap-3 p-4 md:p-6 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg">
						<div className="flex flex-col justify-center gap-3 lg:min-w-[180] w-[350]">
							<h3 className="text-xl md:text-2xl font-semibold text-white text-balance">
								Hot new releases
							</h3>
							<Button variant={"outline"} className="text-blue-600 w-fit">
								Explore Courses <ArrowRight width={16} height={16} />
							</Button>
						</div>
						<div className="w-full">
							<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
								{card_items.map((item) => (
									<Card
										key={item.id}
										className="lg:px-3 lg:py-3 md:px-2 md:py-2 sm:px-2 sm:py-2 px-1 py-1 hover:shadow-xl transition duration-300 hover:-translate-y-1 cursor-pointer flex flex-col">
										<div className="flex flex-col gap-3 h-full">
											<div className="flex flex-col gap-2 flex-1">
												<div>
													{/* Image */}
													<Image
														src={item.image || "/placeholder.svg"}
														alt={item.title}
														width={320}
														height={120}
														className="rounded-lg object-cover w-full h-32"
													/>
												</div>
												{/* Provider */}
												<div className="flex items-center gap-2">
													<Badge variant="ghost" className="p-1">
														<Image
															src={item.provider.src || "/placeholder.svg"}
															alt={item.provider.name}
															width={16}
															height={16}
														/>
													</Badge>

													<span className="text-xs md:text-sm font-semibold text-gray-500">
														{item.provider.name}
													</span>
												</div>

												{/* Title */}
												<CardTitle className="text-sm md:text-base leading-snug line-clamp-2">
													{item.title}
												</CardTitle>
											</div>

											<div className="space-y-2 pt-2 border-t">
												{/* Description */}
												<CardDescription className="text-xs md:text-sm">
													{item.description}
												</CardDescription>

												{/* Rating */}
												<div className="flex items-center gap-1 text-gray-500 text-xs">
													{item.rate.icon}
													<span className="font-medium">{item.rate.point}</span>
												</div>
											</div>
										</div>
									</Card>
								))}
							</div>
						</div>
					</Card>
				</main>
			</section>
			{/* Section Card Explore Career */}
			<section className="my-8 px-1 md:px-0">
				<main className="flex flex-col gap-4">
					<div className="flex flex-col sm:flex-row sm:items-center gap-2">
						<h3 className="text-xl md:text-2xl font-semibold">
							Explore Careers
						</h3>
						<Button variant={"link"} className="text-blue-600 w-fit p-0">
							Explore all <ArrowRight width={16} height={16} />
						</Button>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
						{career_explorer.map((item) => (
							<Card
								key={item.id}
								className="px-3 py-3 hover:shadow-lg transition duration-300 hover:-translate-y-1 cursor-pointer rounded-lg flex flex-col h-full">
								<div className="flex flex-col gap-3 h-full">
									<div className="flex flex-col gap-3 flex-1">
										<div>
											{/* Image */}
											<Image
												src={item.image || "/placeholder.svg"}
												alt={item.title}
												width={320}
												height={120}
												className="rounded-md object-cover w-full h-32"
											/>
										</div>

										{/* Title */}
										<div>
											<CardTitle className="text-sm md:text-base leading-snug line-clamp-2">
												{item.title}
											</CardTitle>
										</div>
										<div>
											{/* Description */}
											<CardDescription className="text-xs md:text-sm line-clamp-2">
												{item.description}
											</CardDescription>
										</div>
									</div>
								</div>
							</Card>
						))}
					</div>
				</main>
			</section>
			{/* Card Section display popular in the coursora */}
			<section className="my-5">
				<main className="flex flex-col gap-3">
					<div>
						<h3 className="text-xl md:text-2xl font-semibold">
							Most popular by category
						</h3>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
						{popular_categories.map((item) => (
							<Card
								key={item.id}
								className="p-2 bg-linear-to-tl from-[#00d2fc] to-[#009efa] rounded-md">
								<div>
									<Button
										key={item.button.title}
										variant={"link"}
										className="text-white font-semibold text-[18px]">
										{item.button.title}
										{item.button.icon}
									</Button>
								</div>
								{/*  */}
								<div className="grid gap-2">
									{/* Horizontal Card Content */}
									{item.card.map((categories) => (
										<Card
											key={categories.id}
											className="p-1 hover:shadow-lg transition cursor-pointer rounded-xl">
											<div className="flex gap-4">
												<Image
													src={categories.image}
													alt={categories.title}
													width={80}
													height={50}
													className="rounded-md object-cover"
												/>

												<div className="flex flex-col justify-between flex-1">
													{/* Top */}
													<div className="space-y-1">
														<Badge
															variant="secondary"
															className="flex items-center gap-1 w-fit">
															<Image
																src={categories.logo}
																alt={categories.title}
																width={16}
																height={16}
															/>
															<span className="text-xs font-semibold text-muted-foreground">
																{categories.name}
															</span>
														</Badge>

														<CardTitle className="text-sm leading-tight">
															{categories.title}
														</CardTitle>
													</div>

													{/* Bottom */}
													<div className="flex items-center gap-1">
														<CardDescription className="text-xs">
															{categories.description}
														</CardDescription>

														<div className="flex items-center gap-1 text-xs text-muted-foreground">
															{categories.icon}
															{categories.point}
														</div>
													</div>
												</div>
											</div>
										</Card>
									))}
								</div>
							</Card>
						))}
					</div>
				</main>
			</section>
		</div>
	);
}
