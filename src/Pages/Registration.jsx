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
    NativeSelect
} from "@mantine/core";

export default function Signup() {
return (
    <Container size={520} my={40}>
    <Title
        align="center"
        sx={(theme) => ({
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        })}
    >
        Зарегестрироваться
    </Title>
    

    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Stack>
            <TextInput
                label="Имя" 
                placeholder="Имя" 
                required 
            />
            <TextInput 
                label="Фамилия" 
                placeholder="Фамилия" 
                required 
            />
            <TextInput  
                label="Отчество" 
                placeholder="Отчество" 
                required 
            />
            <TextInput 
                label="Email" 
                placeholder="Введите почту"
                required 
            />
            <NativeSelect
                label="Вы"
                data={[
                    { value: 'student', label: 'Студент' },
                    { value: 'professor', label: 'Преподаватель' },
                ]}
                required
            />
            <PasswordInput
                label="Пароль"
                placeholder="Введите пароль"
                required
            />
            <PasswordInput
                label="Подтвердите пароль"
                placeholder="Повторите пароль"
                required
            />
        </Stack>
        <Button fullWidth mt="xl">
            Зарегестрироваться
        </Button>
        <Text c="dimmed" size="sm" align="center" mt={5}>
            Уже есть аккаунт?{" "}
            <Anchor
                href="/login"
                size="sm"
            >
                Войти
            </Anchor>
        </Text>
    </Paper>
    </Container>
);
}