import Form from "@/components/Form";
import { Box, Button, Container, Typography } from "@mui/material";

export default function Home() {
	return (
		<Container>
      <Box sx={{
        my: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Typography variant="h4" component="h1" marginBottom={2}>
          Next.js + MUI
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          // href="https://nextjs.org/docs/getting-started/installation"
        >
          Get started
        </Button>
      </Box>
      <Form />
		</Container>
	);
}
