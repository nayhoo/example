import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Flex,
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormSubmit,
  Link,
  TextField,
} from '@nayhoo/components';
// import { useAuthStore } from '@/stores/auth';

// type LoginFormProps = {
//   onSuccess: () => void;
// };

export const LoginForm = () =>
  // { onSuccess }: LoginFormProps
  {
    // const { login } = useAuthStore();

    const navigate = useNavigate();

    return (
      <Box>
        <Form
          onSubmit={(event) => {
            const data = Object.fromEntries(new FormData(event.currentTarget));

            console.log(data);
          }}
        >
          <FormField name="email">
            <Flex align="baseline" justify="between" css={{ mb: '$1' }}>
              <FormLabel>Email</FormLabel>
              <FormMessage error match="valueMissing">
                Please enter your email
              </FormMessage>
              <FormMessage error match="typeMismatch">
                Please provide a valid email
              </FormMessage>
            </Flex>
            <FormControl asChild>
              <TextField type="email" required />
            </FormControl>
          </FormField>

          <FormField name="password">
            <Flex align="baseline" justify="between" css={{ mb: '$1' }}>
              <FormLabel>Password</FormLabel>
              <FormMessage error match="valueMissing">
                Please enter your password
              </FormMessage>
              <FormMessage error match="typeMismatch">
                Please provide a valid password
              </FormMessage>
            </Flex>
            <FormControl asChild>
              <TextField type="password" required />
            </FormControl>
          </FormField>

          <FormSubmit asChild>
            <Button style={{ marginTop: 10, width: '100%' }} variant="outline">
              Log in
            </Button>
          </FormSubmit>
        </Form>

        <Box className="text-sm mt-8">
          Dont't have an account?{' '}
          <Link color="primary" onClick={() => navigate('/auth/register')}>
            Create an account
          </Link>
        </Box>
      </Box>
    );
  };
