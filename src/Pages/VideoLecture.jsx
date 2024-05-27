import React from "react";
import {
	AspectRatio,
	Text,
	Center,
	rem,
	Box,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";

const VideoPage = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);

	const name = searchParams.get("name");
	const video = searchParams.get("video");
	const id = searchParams.get("id");
	return (
		<>
			<Text align="center" size="xl">
				{name}
			</Text>
			<AspectRatio
				ratio={16 / 9}
				style={{ maxWidth: "800px", margin: "0 auto" }}
			>
				<iframe
					src={video}
					title="YouTube video player"
					style={{ border: 0 }}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</AspectRatio>
			<Text align="center" size="md"></Text>
			<Link to="/course">
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
};

export default VideoPage;
