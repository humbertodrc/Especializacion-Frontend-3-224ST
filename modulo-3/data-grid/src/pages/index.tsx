import { Box, Container, Typography } from "@mui/material";

export default function Home() {
	return (
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
				<Typography variant="h4" component="h1" sx={{mb: 2}}>
					Data Grid MUI
				</Typography>
				{/* Aca van los ejercicios */}
			</Box>
		</Container>
	);
}
