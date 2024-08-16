import { Layout } from "@/components/layouts";
import { Card } from "@/components/ui/card";
import { defaultLocale, TEXTS_BY_LANGUAGE } from "@/locale/constants";
import styles from "@/styles/Home.module.css";
import { ProductsAPIResponse } from "@/types";
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from "next/router";

interface HomePageProps {
	products: ProductsAPIResponse
}

const Home: NextPage<HomePageProps> = ({products}) => {
	// Agregar Traduciones
	const {locale} = useRouter()
	
	const {MAIN} = TEXTS_BY_LANGUAGE[locale as keyof typeof TEXTS_BY_LANGUAGE] ?? TEXTS_BY_LANGUAGE[defaultLocale]

	return (
		<Layout>
			<main className={styles.main}>
				<h1>{MAIN.PRODUCTS}</h1>
				<div className={styles.grid}>
					{products.map((product) => (
						<Card key={product.id} product={product} />
					))}
				</div>
			</main>
		</Layout>
	);
};

// Traer los datos de la API con getServerSideProps o getStaticProps
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async (ctx) => {

	const {locale} = ctx

	const baseUrl = process.env.NEXT_PUBLIC_API_URL;
	const response = await fetch(`${baseUrl}/products/${locale}`);
	const products = await response.json();

	try {
		return {
		props: {
			products: products
		}
	}
	} catch (error) {
		return {
			notFound: true
			// products: []
		}
	}
}


export default Home;
