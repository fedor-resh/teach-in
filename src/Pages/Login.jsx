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
    Button
  } from "@mantine/core";
import { Link } from "react-router-dom";

export function Login() {
    return(
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
                Нет аккаунта?{' '}
                <Anchor 
                    size="sm" 
                    href="/registration"
                >
                    Зарегестрироваться
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="" required />
                <PasswordInput label="Пароль" placeholder="" required mt="md" />
                <Group justify="space-between" mt="lg">
                <Checkbox label="Запомните меня" />
                <Anchor 
                    
                    size="sm"
                    href="/login/resetpassword"
                >
                    Забыли пароль?
                </Anchor>
                </Group>
                    <Button 
                        fullWidth mt="xl"
                        component="a"
                        href="/"
                    >
                        Войти
                    </Button>
            </Paper>
        </Container>
        </>
    );
}