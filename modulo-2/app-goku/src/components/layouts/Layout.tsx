import Head from "next/head";
import Navbar from "../ui/Navbar";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords?: string;
 }


export default function Layout({children, title, description, keywords}: LayoutProps) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta name="author" content="Humberto Rivero" />

				{/* Adicional para las redes sociales */}
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content="/mario.jpg" />
				<meta property="og:type" content="website" />

				{/* Facebook Meta Tags */}
				<meta property="og:url" content="" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content="/mario.jpg" />

				{/* Twitter Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content={title} />
				<meta property="twitter:url" content={title} />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content="/mario.jpg" />
      </Head>
      <Navbar />
      <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-6">
        Realizado con ❤️ por Humberto Rivero
      </footer>
		</>
	);
}
