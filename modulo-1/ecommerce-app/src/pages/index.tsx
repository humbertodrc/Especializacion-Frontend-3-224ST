import Image from "next/image";
import {Inter} from "next/font/google";
import {GetStaticProps} from "next";
import {Character} from "@/interface/character";
import {useEffect, useState} from "react";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

interface PageProps {
	characters: Character[];
}

export default function HomePage({characters}: PageProps) {
	// const [characters, setCharacters] = useState([])

	// const getCharacters = async () => {
	//   try {
	//     const url = 'https://www.amiiboapi.com/api/amiibo/'
	//     const resp = await fetch(url)
	//     const data = await resp.json()
	//     const characters = data.amiibo.slice(0, 40)
	//     return characters
	//   } catch (error) {
	//     console.error(error);
	//   }
	// }

	// useEffect(() => {
	//   getCharacters().then(characters => setCharacters(characters))
  // }, [])
  
  useEffect(() => {
    // llmar a la API de la carpeta /api solo para probar
    fetch('api/hello')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<div className="grid grid-cols-6 gap-6">
				{characters.map((character, index) => (
					<Link href={`/character/${character.tail}`} key={character.tail}>
						<div
							className="flex flex-col items-center justify-center"
						>
							<Image
								src={character.image}
								alt={character.name}
								width={100}
								height={100}
							/>
							<p className="text-center">{character.name}</p>
						</div>
					</Link>
				))}
			</div>
		</main>
	);
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
	console.log(ctx);
	const url = "https://www.amiiboapi.com/api/amiibo/";
	const resp = await fetch(url);
	const data = await resp.json();
  const characters = data.amiibo.slice(0, 40);
  
  // Hacer un llamado a la API de la carpeta /api solo para probar
  const res = await fetch('http://localhost:3000/api/hello')
  const data2 = await res.json()
  console.log(data2);

	return {
		props: {
			characters,
		},
	};
};
