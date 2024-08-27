import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
		mode: "dark",
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

export default theme;