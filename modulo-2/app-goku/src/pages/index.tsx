import Layout from "@/components/layouts/Layout";
import {Characters} from "@/interface/characters";
import {GetServerSideProps} from "next";
import Image from "next/image";
import Link from "next/link";

interface HomeProps {
	characters: Characters;
}

export default function Home({ characters }: HomeProps) {
	return (
		<Layout title="App de Goku" description="App de Goku con Next.js">
			<h1 className="mb-6 text-3xl">App de Goku</h1>
			<div className="grid grid-cols-3 gap-8">
				{characters.items.map((character) => (
					<Link className="border rounded-md hover:scale-105 transition-transform duration-500" key={character.id} href={`/character/${character.name}`}>
						<div
							className="flex flex-col gap-4 items-start justify-center p-6"
						>
							<Image
								className="w-40 h-40 object-contain"
								width={160}
								height={160}
								src={character.image}
								alt={character.name}
							/>
							<p className="text-base font-semibold">{character.name}</p>
						</div>
					</Link>
				))}
			</div>
		</Layout>
	);
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const res = await fetch(`https://dragonball-api.com/api/characters?limit=12`);
	const data = await res.json();

	return {
		props: {
			characters: data,
		},
	};
};
