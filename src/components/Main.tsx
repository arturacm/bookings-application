import { Stack } from '@mui/material';
import type { StackProps } from '@mui/material';

function Main({ children, ...rest }: StackProps) {
  return (
    <Stack
      maxWidth="100vw"
      alignItems="center"
      component="main"
      minHeight="100vh"
      bgcolor="#eee"
      {...rest}
    >
      {children}
    </Stack>
  );
}

export default Main;
