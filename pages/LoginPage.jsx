import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './LoginPage.module.css';
import {useState} from 'react'
import { useAuthContext } from '../auth/AuthProvider';
export function LoginPage() {
    // const [email, setEmail] = useState("")
    // const [pwd, setPwd] = useState("")
    const [loading, setLoading] = useState(false)
    const {onLogin} = useAuthContext();

      const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length < 6 ? "Password should include at least 6 characters" : null,
    },
  });

    const handleClick = () =>
    {
        setLoading(true)
        onLogin(form.values.email, form.values.password);
    }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>

      <Text className={classes.subtitle}>
        Do not have an account yet? <Anchor>Create account</Anchor>
      </Text>

      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required radius="md" value={form.values.email} onChange={(e) => form.setFieldValue("email", e.currentTarget.value)}/>
        <PasswordInput label="Password" placeholder="Your password" required mt="md" radius="md" value={form.values.password} onChange={(e) => form.setFieldValue("password", e.currentTarget.value)}/>
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" radius="md" loading={loading} onClick={handleClick}>
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}