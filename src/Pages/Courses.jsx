import { Fragment } from "react";
import {
	Card,
	Container,
	Group,
	Image,
	Space,
	Text,
	Title,
} from "@mantine/core";
import { Link } from "react-router-dom";

const mockCourses = [
	{
		id: 1,
		name: "Матанализ",
		image: "https://sun6-21.userapi.com/s/v1/if2/LtlTV0nf-xY60SzqyMt_aKpsiexr6i0W_-KG81S7PPEPRVxCK_gMbiqKxbOGztgiC46WElI6JPKQwH9St3BPwtBf.jpg?size=512x512&quality=96&crop=0,0,512,512&ava=1",
		linkToCourse: "/course/1",
	},
	{
		id: 2,
		name: "Основы программирования на языке C++",
		image: "https://juststickers.in/wp-content/uploads/2016/09/c-plus-plus-badge.png",
		linkToCourse: "/course/2",
	},
	{
		id: 3,
		name: "Физика",
		image: "https://polotnos.cdnbro.com/posts/6517781-fizika-klipart-62.jpg",
		linkToCourse: "/course/3",
	},
];

export function Courses() {
	return (
		<>
			<Title>Курсы</Title>
			<Space h="md" />
			{mockCourses.map((course) => (
				<Fragment key={course.id}>
					<Link to={course.linkToCourse}>
						<Card withBorder shadow="sm" p="lg" key={course.id}>
							<Group align="start">
								<Image
									h={100}
									w="auto"
									src={course.image}
									alt={course.name}
								/>
								<Text
									weight={500}
									size="lg"
									mt="md"
									ta="center"
								>
									{course.name}
								</Text>
							</Group>
						</Card>
					</Link>
					<Space h="md" />
				</Fragment>
			))}
		</>
	);
}
