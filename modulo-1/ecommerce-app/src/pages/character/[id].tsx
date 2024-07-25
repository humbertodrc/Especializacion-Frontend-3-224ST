import {Character} from "@/interface/character";
import Head from "next/head";
import Image from "next/image";
import {GetServerSideProps} from "next";
import {useRouter} from "next/router";

interface PageProps {
	character: Character;
}

export default function CharacterPage({character}: PageProps) {
	const {query: {id}} = useRouter();

	console.log(id);

	if (!character) {
		return <div>No se encontró el personaje.</div>;
	}

	return (
		<>
			<Head>
				<title>{character.name}</title>
				<meta name="description" content="Personaje de videojuego" />
			</Head>
			<article>
				<h1>{character.name}</h1>
				<Image
					width={180}
					height={250}
					src={character.image}
					alt={character.name}
					priority
				/>
				<p>{character.amiiboSeries}</p>
				<p>{character.gameSeries}</p>
				<p>{character.head}</p>
				<p>{character.tail}</p>
				<p>{character.type}</p>
			</article>
		</>
	);
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

// export const getServerSideProps: GetServerSideProps = async ({params}) => {
// 	try {
// 		 const id = params?.id;
// 		const url = `https://amiiboapi.com/api/amiibo/?tail=${id}`;
// 		const resp = await fetch(url);
// 		const data = await resp.json();
// 		const character = data.amiibo[0];

// 		return {
// 			props: {
// 				character: character || null,
// 			},
// 		};
// 	} catch (error) {
// 		return {
// 			props: {
// 				character: null,
// 			},
// 		};
// 	}
// };

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import { GetStaticPaths } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  
  const url = 'https://www.amiiboapi.com/api/amiibo/'
  const resp = await fetch(url)
  const data = await resp.json()
  const characters = data.amiibo.slice(0, 40)

  const paths = characters.map((character: Character) => ({
    params: { id: character.tail }
  }))
  

  return { paths, fallback: false }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async ({params}) => {
  const id = params?.id
  const url = `https://amiiboapi.com/api/amiibo/?tail=${id}`
  const resp = await fetch(url)
  const data = await resp.json()
  const character = data.amiibo[0]

  return {
    props: {
      character: character || null,
    }
  }
}