import { Layout } from "@/components/layouts";
import styles from "@/styles/Home.module.css";

const Home = () => {
	// Agregar Traduciones 

	return (
		<Layout>
			<main className={styles.main}>
				<h1>Tienda</h1>
				<div className={styles.grid}>
					Products
				</div>
			</main>
		</Layout>
	);
};

// Traer los datos de la API con getServerSideProps o getStaticProps


export default Home;
