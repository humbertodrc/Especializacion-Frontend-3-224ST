import Head from "next/head";
import Navbar from "../ui/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ["latin"]});

interface LayoutProps {
	children: React.ReactNode;
	title: string;
	description: string;
	keywords?: string;
}

export default function Layout({children, title, description, keywords} : LayoutProps) {
	return (
		<>
			<Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords || "nintendo, games, play"} />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Adicional informacion de metadatos para las redes sociales */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/mario.jpg" />
        <meta property="og:type" content="website" />

        
			</Head>
			<Navbar />
			<main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>{children}</main>
			<footer>Realizado con ❤️ por Humberto Rivero</footer>
		</>
	);
}
