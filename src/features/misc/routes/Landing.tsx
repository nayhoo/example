import { Box, Button, Container, Flex, Heading } from '@nayhoo/components';
import { Head } from '@/components/Head';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <Head description="Welcome to example" />
      <Box className="h-[100vh] flex items-center">
        <Container>
          <Flex align="center" direction="column" gap="4" justify="center">
            <Heading size="3">Welcome!</Heading>
            <Button onClick={() => navigate('/auth/login')}>Login</Button>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
