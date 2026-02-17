import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Home,
	ChevronRight,
	Languages,
	UsersRound,
	Clock9,
	CalendarCheck2,
	MapPin,
} from "lucide-react";

import {
	Pagination,
	PaginationItem,
	PaginationContent,
	PaginationLink,
	PaginationNext,
} from "@/components/ui/pagination";
import {
	Card,
	CardContent,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
export default function DetailPage() {
	// Objective of this course
	const objective_li_1: string = `Strengthen skill in using digital platforms (Tiktok, Telegram, KHQR) for effective selling and operations.`;
	const objective_li_2: string = `Equip participantst with partical tactics for content creation, customer engagement, and low-cost marketing.`;
	const objective_li_3: string = `Raise awareness about online scams, fraud, and digital safety.`;
	// Learning about skill provider
	const learning_li_1: string = `Participants can set up and improve online sell channels with basic digital marketing skills.`;
	const learning_li_2: string = `Increased confidence in managing customer messages, online orders, and promotions.`;
	const learning_li_3: string = `Participants know how to indentify and avoid scams, fake buyers, hacks, and fraudulent loans.`;
	const learning_li_4: string = `Participants use digital bank payment (KHQR) effectively, leading to proper transaction records which are part of formal load readiness.`;
	// course overview
	const course = [
		{
			id: 1,
			icon: <Languages />,
			tags: {
				title: "Course Language",
				description: "English",
			},
		},
		{
			id: 2,
			icon: <Clock9 />,
			tags: {
				title: "Training Length",
				description: "2 Day (16hours)",
			},
		},
		{
			id: 3,
			icon: <UsersRound />,
			tags: {
				title: "Class Size",
				description: "30 - 50 Trainee",
			},
		},
		{
			id: 4,
			icon: <CalendarCheck2 />,
			tags: {
				title: "Training Schedule",
				description: "Mon - Sun",
			},
		},
		{
			id: 5,
			icon: <MapPin />,
			tags: {
				title: "Training Location",
				description: "Phnom Penh",
			},
		},
	];
	return (
		<section>
			{/* Card display detail view course */}
			<div>
				<Card className="lg:p-3 md:p-3 sm:p-2 p-1 lg:rounded-4xl md:rounded-3xl sm:rounded-2xl rounded-md bg-[#D9D9D9]">
					{/* Card detail about course */}
					<div>
						<Card className="flex flex-row lg:gap-10 md:gap-7 sm:gap-5 gap-2 items-center p-1 lg:p-4 md:p-3 sm:p-2 ">
							<div>
								<img
									src="/image.jpeg"
									alt="Image"
									className="rounded-lg object-cover lg:w-[600] md:w-[400] sm:w-[300] w-[200] "
								/>
							</div>
							<div className="flex flex-col lg:gap-6 md:gap-4 sm:gap-2 gap-1">
								<div>
									<CardTitle className="font-meduim lg:text-[14px] md:text-[14px] sm:text-[12px] text-[10px] text-muted-foreground">
										សេដ្ឋកិច្ចក្រៅប្រព័ន្ធ
									</CardTitle>
									<CardDescription className="font-semibold text-[12px] lg:text-[28px] md:text-[20px] sm:text-[18px] text-black ">
										Web Development and Cloud Computing Specialization
									</CardDescription>
								</div>
								<div className="flex flex-row lg:gap-3 md:gap-2 sm:gap-2 gap-1 items-center border-b pb-2 lg:w-100 md:w-100 sm:w-85 w-50">
									<img
										src="/google.png"
										alt="Google"
										className="lg:w-[25] lg:h-[25] md:w-[25] md:h-[25] sm:w-[20] sm:h-[20] h-[18] w-[18]"
									/>
									<p className="text-[8px] font-medium lg:text-[16px] md:text-[14px] sm:text-[12px]">
										Google Adcademy
									</p>
								</div>
								<div className="flex flex-row lg:gap-38 md:gap-40 sm:gap-30 gap-12 items-center">
									<div className="flex flex-col lg:gap-2 text-[18px]">
										<h3 className="font-semibold  lg:text-[18px] md:text-[16px] sm:text-[12px] text-[8px]">
											Course Fee
										</h3>
										<p className="text-green-500 font-semibold lg:text-[16px] md:text-[14px] sm:text-[12px] text-[8px]">
											៛ 480000 /Person
										</p>
									</div>
									{/* Button Enrollment */}
									<div>
										<Dialog>
											<DialogTrigger asChild>
												<Button
													variant={"outline"}
													className="font-bold bg-linear-to-tl from-[#6DCC56] to-[#2D6C68] text-white hover:text-white text-[8px] rounded-2xl md:text-[12px] lg:text-[14px] sm:text-[11px] capitalize lg:size-10 lg:w-30 lg:h-10 sm:size-10 sm:h-8 sm:w-30 size-10 w-21 h-6">
													Enroll Now
													<ChevronRight />
												</Button>
											</DialogTrigger>
											{/* Card dialog content login and register top up size */}
											<DialogContent className="sm:max-w-md lg:w-[95%] md:w-[95%] sm:w-[95%] w-full rounded-xl p-6 fixed lg:top-65 top-55">
												<div className="flex flex-col mt-5 gap-6">
													<div>
														<h3 className="text-2xl sm:text-3xl font-semibold">
															Log in or create account
														</h3>
														<p className="text-sm sm:text-base text-muted-foreground">
															Learn on your own time from top universities and
															business.
														</p>
													</div>

													<div className="flex flex-col gap-4">
														<div className="flex flex-col gap-2">
															<Label>Email</Label>
															<Input
																placeholder="name@gmail.com"
																className="h-12"
															/>
														</div>

														<div className="flex flex-col gap-2">
															<Label>Password</Label>
															<Input
																type="password"
																placeholder="password"
																className="h-12"
															/>
														</div>

														<Button className="h-12 font-bold bg-blue-700 text-white">
															Continue
														</Button>
													</div>
												</div>
											</DialogContent>
										</Dialog>
									</div>
								</div>
							</div>
						</Card>
					</div>
					{/* Course description detail */}
					<div className="flex flex-row lg:gap-4 p-4 items-center justify-between">
						<div className="lg:w-[800] md:w-[600]">
							<div className="mb-2">
								{/* Objective course */}
								<CardTitle className="font-semibold capitalize lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">
									Objective
								</CardTitle>
								<ul className="list-disc px-6 text-muted-foreground font-medium lg:text-[16px] md:text-[14px] sm:text-[12px] text-[8px]">
									<li>{objective_li_1}</li>
									<li>{objective_li_2} </li>
									<li>{objective_li_3} </li>
								</ul>
							</div>
							<div className="mt-5">
								{/* Learning outcomin course */}
								<CardTitle className="lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] font-semibold capitalize">
									Learning Outcoming
								</CardTitle>
								<ul className="list-disc px-6 text-muted-foreground font-medium lg:text-[16px] md:text-[14px] sm:text-[12px] text-[8px]">
									<li>{learning_li_1}</li>
									<li>{learning_li_2}</li>
									<li>{learning_li_3}</li>
									<li>{learning_li_4}</li>
								</ul>
							</div>
						</div>
						<div className="border border-[#aaa3a3] rounded-2xl lg:p-3 md:p-2 sm:p-1 p-1 w-60 ">
							<div>
								<h3 className="lg:text-[20px] md:text-[16px] sm:text-[14px] text-[10px] font-bold">
									Course Overview
								</h3>
							</div>
							{course.map((item) => (
								<div
									key={item.id}
									className="flex flex-row gap-3 items-center capitalize mt-2">
									<div>
										<Button
											variant={"secondary"}
											className="font-bold rounded-full bg-[#9294f8] text-white w-[10] h-[23] sm:w-[25] sm:h-[25] md:w-[35] md:h-[30] lg:w-[40] lg:h-[40] object-cover">
											{item.icon}
										</Button>
									</div>
									<div className="lg:text-[14px] md:text-[12px] sm:text-[10px] text-[6px] font-meduim">
										<h4 className="text-muted-foreground">{item.tags.title}</h4>
										<h5 className="text-">{item.tags.description}</h5>
									</div>
								</div>
							))}
						</div>
					</div>
				</Card>
			</div>
		</section>
	);
}
