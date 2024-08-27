import {
	Box,
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	Paper,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from "@mui/material";

export default function Form() {
	return (
		<Box component="section" sx={{maxWidth: 500, mx: "auto"}}>
			<Paper
				elevation={2}
				sx={{p: "32px", display: "flex", flexDirection: "column", gap: 3}}
			>
				<Typography
					component="h2"
					variant="h5"
					sx={{fontWeight: 500, fontSize: 24}}
				>
					Registrate para recibir las últimas noticias
				</Typography>
				<form>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								id="firstName"
								label="Nombre"
								variant="outlined"
								sx={{width: "100%"}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="lastName"
								label="Apellido"
								variant="outlined"
								sx={{width: "100%"}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="email"
								label="Email"
								variant="outlined"
								sx={{width: "100%"}}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControl>
								<FormLabel id="demo-radio-buttons-group-label">
									Gender
								</FormLabel>
								<RadioGroup
									aria-labelledby="demo-radio-buttons-group-label"
									defaultValue="female"
                  name="radio-buttons-group"
                  sx={{display: "flex", flexDirection: "row"}}
								>
									<FormControlLabel
										value="female"
										control={<Radio />}
										label="Female"
									/>
									<FormControlLabel
										value="male"
										control={<Radio />}
										label="Male"
									/>
									<FormControlLabel
										value="other"
										control={<Radio />}
										label="Other"
									/>
								</RadioGroup>
							</FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
              >
                Enviar
              </Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Box>
	);
}
