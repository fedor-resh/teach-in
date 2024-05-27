import {
	TextInput,
	PasswordInput,
	Checkbox,
	Anchor,
	Paper,
	Title,
	Text,
	Container,
	Group,
	Button,
} from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<>
			<Container size={420}>
				<Title
					align="center"
					sx={(theme) => ({
						fontFamily: `Greycliff CF, ${theme.fontFamily}`,
						fontWeight: 900,
					})}
				>
					Lectorium Mephi
				</Title>
				<Text c="dimmed" size="sm" ta="center" mt={5}>
					Нет аккаунта?{" "}
					<Link to={"/registration"}>
						<Anchor size="sm">Зарегистрироваться</Anchor>
					</Link>
				</Text>

				<Paper withBorder shadow="md" p={30} mt={30} radius="md">
					<TextInput
						label="Email"
						placeholder=""
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
					<PasswordInput
						label="Пароль"
						placeholder=""
						required
						onChange={(e) => setPassword(e.target.value)}
						mt="md"
					/>
					<Group justify="space-between" mt="lg">
						<Checkbox label="Запомните меня" />
						<Link to={"/login/resetpassword"}>
							<Anchor size="sm">Забыли пароль?</Anchor>
						</Link>
					</Group>
					<Link to={"/"}>
						<Button
							fullWidth
							mt="xl"
							disabled={!email || !password}
						>
							Войти
						</Button>
					</Link>
				</Paper>
			</Container>
		</>
	);
}
