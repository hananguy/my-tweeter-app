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
    const [loading, setLoading] = useState(false)
    const [userNotFound, setUserNotFound] = useState(false)
    const {onLogin, activeUser} = useAuthContext();
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
        setUserNotFound(false);
        const validation = form.validate();
        if(validation.hasErrors)
        {
            console.log(validation)
        }
        else
        {
            setLoading(true);
            onLogin(form.values.email, form.values.password).then(() => {
                if(activeUser !== null)
                {
                    setUserNotFound(true);
                }
                setLoading(false)});

        }
        
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
        <TextInput label="Email" placeholder="you@mantine.dev" required radius="md" value={form.values.email} onChange={(e) => form.setFieldValue("email", e.currentTarget.value)} error={form.errors.email}/>
        <PasswordInput label="Password" placeholder="Your password" required mt="md" radius="md" value={form.values.password} onChange={(e) => form.setFieldValue("password", e.currentTarget.value)} error={form.errors.password}/>
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
      {userNotFound && <div>User not found!</div>}
    </Container>

  );
}