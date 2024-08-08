import Layout from "@/components/layouts/Layout";
import {Faq} from "@/interface/faqs";
import { useEffect, useState } from "react";
import { GetServerSideProps } from 'next'

export default function FaqsPage() {
	const [faqs, setFaqs] = useState([]);

	useEffect(() => {
		fetch("/api/faqs")
			.then((response) => response.json())
			.then((data) => setFaqs(data));
	}, []);

	console.log(faqs);

	return (
		<Layout
			title="Preguntas Frecuentes"
			description="Preguntas frecuentes de la aplicación"
		>
			<div>
        <h1 className="text-5xl mb-6">
          Preguntas Frecuentes
        </h1>
				<div className="flex flex-col gap-6">
					{faqs.map((faq: Faq) => (
						<div className="border rounded-xl p-4 cursor-pointer" key={faq.id}>
							<h2 className="text-xl text-purple-400 font-bold">{faq.question}</h2>
							<p className="text-base">{faq.answer}</p>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}


// Server Side Rendering
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch('http://localhost:3000/api/faqs')
  const faqs = await res.json()

  console.log(faqs);

  return {
    props: {
      faqs
    }
  }
}