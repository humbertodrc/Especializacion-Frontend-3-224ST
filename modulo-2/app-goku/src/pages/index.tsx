import Image from "next/image";
import {GetServerSideProps} from "next";
import Link from "next/link";
import {Item, Links, Meta} from "@/interface/characters";
import Layout from "@/components/layouts/Layout";

interface HomeProps {
	items: Item[];
	meta: Meta;
	links: Links;
}

export default function Home({items, meta, links}: HomeProps) {
	return (
    <Layout
      title="App de Goku"
      description="App de Goku"
      keywords="Goku, Dragon Ball, Anime"
    >
			<h1 className="mb-6">App de Goku</h1>
			<div className="grid grid-cols-3 gap-8">
				{items.map((item) => (
					<div
						key={item.id}
						className="flex flex-col items-start justify-center border p-6 rounded-md"
					>
						<Image
							className="w-40 h-40 object-contain"
							src={item.image}
							alt={item.name}
							width={160}
							height={160}
						/>
						<p>{item.name}</p>
					</div>
				))}
			</div>
			<div className="flex mt-6">
				{links.previous && (
					<Link
						className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						href={`/?page=${meta.currentPage - 1}`}
					>
						Previous
					</Link>
				)}
				{links.next && (
					<Link
						className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						href={`/?page=${meta.currentPage + 1}`}
					>
						Next
					</Link>
				)}
			</div>
		</Layout>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const page = ctx.query.page ? ctx.query.page : 1;
	const res = await fetch(
		`https://dragonball-api.com/api/characters?page=${page}&limit=12`
	);
	const data = await res.json();

	return {
		props: {
			items: data.items,
			meta: data.meta,
			links: data.links,
		},
	};
};
