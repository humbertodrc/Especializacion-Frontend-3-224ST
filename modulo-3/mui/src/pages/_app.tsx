import "@/styles/globals.css";
import theme from "@/theme";
import {ThemeProvider} from "@emotion/react";
import {CssBaseline} from "@mui/material";
import {AppCacheProvider} from "@mui/material-nextjs/v14-pagesRouter";
import type {AppProps} from "next/app";
import Head from "next/head";

export default function App(props: AppProps) {
	const {Component, pageProps} = props;

	return (
		<AppCacheProvider {...props}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</AppCacheProvider>
	);
}
