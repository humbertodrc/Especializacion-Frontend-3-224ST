import Image from "next/image";
import {Inter} from "next/font/google";
import {useEffect, useState} from "react";
import {GetServerSideProps} from "next";
import {Character} from "@/interface/character";
import {GetStaticProps} from "next";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {useRouter} from "next/router";

const inter = Inter({subsets: ["latin"]});

interface PageProps {
	characters: Character[];
}

export default function HomePage({characters}: PageProps) {
	const router = useRouter();

	const handleNavigation = (id: string) => {
		router.push(`/character/${id}`);
	};

	if (!characters) return <h1>No hay personajes</h1>;

	return (
		<>
			<Head>
				<title>Ecommerce DH Amiibo</title>
				<meta name="description" content="Amiibo characters" />
			</Head>
			<Navbar />
			<main
				className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
			>
				<div className="grid grid-cols-6 gap-6">
					{characters.map((character, index) => (
						<div
							key={index}
              className="flex flex-col items-center justify-center"
              onClick={() => handleNavigation(character.tail)}
						>
							<Image
								src={character.image}
								alt={character.name}
								width={100}
								height={100}
							/>
							<p className="text-center">{character.name}</p>
						</div>

						// <Link href={`/character/${character.tail}`} key={index}>
						// 	<div
						// 		key={index}
						// 		className="flex flex-col items-center justify-center"
						// 	>
						// 		<Image
						// 			src={character.image}
						// 			alt={character.name}
						// 			width={100}
						// 			height={100}
						// 		/>
						// 		<p className="text-center">{character.name}</p>
						// 	</div>
						// </Link>
					))}
				</div>
			</main>
		</>
	);
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const url = 'https://www.amiiboapi.com/api/amiibo/'
//   const resp = await fetch(url)
//   const data = await resp.json()
//   const characters = data.amiibo.slice(0, 40)

//   return {
//     props: {
//       characters
//     }
//   }
// }

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
	const url = "https://www.amiiboapi.com/api/amiibo/";
	const resp = await fetch(url);
	const data = await resp.json();
	const characters = data.amiibo.slice(0, 40);

	return {
		props: {
			characters,
		},
	};
};
