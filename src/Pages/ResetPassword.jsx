import {
	Paper,
	Title,
	Text,
	TextInput,
	Button,
	Container,
	Group,
	Anchor,
	Center,
	Box,
	rem,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import classes from "./ResetPassword.module.css";

export function ResetPassword() {
	return (
		<Container size={460} my={30}>
			<Title className={classes.title} ta="center">
				Забыли пароль?
			</Title>
			<Text c="dimmed" fz="sm" ta="center">
				Введите свой email, чтобы сбросить пароль
			</Text>

			<Paper withBorder shadow="md" p={30} radius="md" mt="xl">
				<TextInput label="Ваш email" placeholder="" required />
				<Group
					justify="space-between"
					mt="lg"
					className={classes.controls}
				>
					<Anchor
						c="dimmed"
						size="sm"
						className={classes.control}
						href="/login"
					>
						<Center inline>
							<IconArrowLeft
								style={{ width: rem(12), height: rem(12) }}
								stroke={1.5}
							/>
							<Box ml={5}>Вернуться</Box>
						</Center>
					</Anchor>
					<Button className={classes.control}>Сбросить пароль</Button>
				</Group>
			</Paper>
		</Container>
	);
}
