import {
	TextInput,
	PasswordInput,
	Anchor,
	Paper,
	Title,
	Text,
	Container,
	Group,
	Button,
	Stack,
	NativeSelect,
} from "@mantine/core";
import { useLogger } from "@mantine/hooks";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
	const [email, setEmail] = useState();
    const [login, setLogin] = useState();
	const [password, setPassword] = useState();
	const [repeatedPassword, setRepeatedPassword] = useState();

	return (
		<Container size={520} my={40}>
			<Title
				align="center"
				sx={(theme) => ({
					fontFamily: `Greycliff CF, ${theme.fontFamily}`,
					fontWeight: 900,
				})}
			>
				Зарегистрироваться
			</Title>

			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<Stack>
                    <TextInput
                        label="Логин"
                        placeholder="Введите логин"
                        required
                        onChange={(e) => setLogin(e.target.value)}
                    />
					<TextInput
						label="Email"
						placeholder="Введите почту"
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
					<PasswordInput
						label="Пароль"
						placeholder="Введите пароль"
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
					<PasswordInput
						label="Подтвердите пароль"
						placeholder="Повторите пароль"
						required
						onChange={(e) => setRepeatedPassword(e.target.value)}
					/>
				</Stack>
				<Button
					fullWidth
					mt="xl"
					disabled={
						!email ||
						!password ||
						!repeatedPassword ||
						password != repeatedPassword
					}
				>
					Зарегистрироваться
				</Button>
				<Text c="dimmed" size="sm" align="center" mt={5}>
					Уже есть аккаунт?{" "}
					<Link to={"/login"}>
						<Anchor size="sm">Войти</Anchor>
					</Link>
				</Text>
			</Paper>
		</Container>
	);
}
