import {
	Card,
	Group,
	Space,
	Title,
	Text,
	Image,
	Center,
	rem,
	Box,
} from "@mantine/core";
import { useParams, Link } from "react-router-dom";
import { Fragment } from "react";
import { IconArrowLeft } from "@tabler/icons-react";

const mockCourse = {
	coursesData: [
		{
			id: 1,
			name: "Математический анализ",
			image: "https://via.placeholder.com/150",
			lecturer: "Теляковский Дмитрий Сергеевич",
			lectures: [
				{
					id: 1,
					name: "Лемма об отделимости",
					link: "/videoLecture",
					video: "https://www.youtube.com/embed/Q4ShStGSKdc&t=1s",
				},
				{
					id: 2,
					name: "Дедекиндово сечение",
					link: "/videoLecture/",
					video: "https://www.youtube.com/embed/1UCwTCWk5ro",
				},
				{
					id: 3,
					name: "Счетные и несчетные множества",
					link: "/videoLecture/",
					video: "https://www.youtube.com/embed/eC2Fmy8mTH4&t=2480s",
				},
			],
		},
		{
			id: 2,
			name: "Основы программирования на языке C++",
			image: "https://via.placeholder.com/150",
			lecturer: "Иванов Иван Иванович",
			lectures: [
				{
					id: 1,
					name: "Введение в язык C++. Основы",
					link: "/videoLecture",
					video: "https://www.youtube.com/embed/V58rHMUVmDU",
				},
			],
		},
		{
			id: 3,
			name: "Физика",
			image: "https://via.placeholder.com/150",
			lecturer: "Гервидс Валериан Иванович",
			lectures: [
				{
					id: 1,
					name: "Скамья Жуковского",
					link: "/videoLecture",
					video: "https://www.youtube.com/embed/8BB5sWXBKos",
				},
				{
					id: 1,
					name: "Колумбово яйцо",
					link: "/videoLecture",
					video: "https://www.youtube.com/embed/rc7kDML0vNQ",
				},
				{
					id: 1,
					name: "Маятник Максвелла",
					link: "/videoLecture",
					video: "https://www.youtube.com/embed/4ynUF1Jy2sE",
				},
				{
					id: 1,
					name: "Туннельный эффект",
					link: "/videoLecture",
					video: "https://www.youtube.com/embed/CcT_PlX46KM",
				},
			],
		},
	],
};
export function Course() {
	const { id: courseId } = useParams();

	const filteredCourse = mockCourse.coursesData.find(
		(course) => course.id === parseInt(courseId, 10)
	);

	if (!filteredCourse) {
		return <div>Курс не найден</div>;
	}

	return (
		<>
			<Title>{filteredCourse.name}</Title>
			<Space h="md" />
			<Title order={5}>Лектор: {filteredCourse.lecturer}</Title>
			<Space h="md" />
			{filteredCourse.lectures.map((lecture) => (
				<Fragment key={lecture.id}>
					<Link
						to={`${lecture.link}?video=${lecture.video}&name=${lecture.name}&id=${lecture.id}`}
					>
						<Card withBorder shadow="sm" p="lg" key={lecture.id}>
							<Group align="start">
								<Image
									src={mockCourse.image}
									alt={mockCourse.name}
								/>
								<Text weight={500} size="lg" mt="md">
									{lecture.name}
								</Text>
							</Group>
						</Card>
					</Link>
					<Space h="md" />
				</Fragment>
			))}
			<Link to="/courses">
			<Center inline>
				<IconArrowLeft
					style={{ width: rem(12), height: rem(12) }}
					stroke={1.5}
				/>
				<Box ml={5}>Вернуться</Box>
			</Center>
			</Link>
		</>
	);
}
