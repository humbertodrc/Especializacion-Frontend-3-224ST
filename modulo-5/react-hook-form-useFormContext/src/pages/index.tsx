import { Form } from "@/components/Form";
import {Container, Typography, Box} from "@mui/material";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Container>
					<Box
						sx={{
							my: 4,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              UseFormContext
            </Typography>
            <Form />
          </Box>
				</Container>
			</main>
		</>
	);
}