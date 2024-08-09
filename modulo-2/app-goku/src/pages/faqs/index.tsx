import Layout from "@/components/layouts/Layout";
import { Faq } from "@/interface/faqs.type";
import { useEffect, useState } from "react";
import { GetServerSideProps } from 'next'

interface FaqsPageProps {
  faqs: Faq[]
}

export default function FaqsPage({faqs} : FaqsPageProps) {

  // const [faqs, setFaqs] = useState<Faq[]>([])

  // useEffect(() => {
  //   fetch('/api/faqs')
  //     .then(response => response.json())
  //     .then(data => setFaqs(data))
  // }, [])


  return (
    <Layout
      title="Preguntas"
      description="Preguntas frecuentes sobre Goku"
    >
      <h1 className="text-5xl mb-6">Pagina de Preguntas</h1>
      <div className="flex flex-col gap-6">
        {faqs.map((faq) => (
          <div key={faq.id} className="border rounded-xl p-4 cursor-pointer">
            <h2 className="text-xl text-purple-400 font-bold">{faq.question}</h2>
            <p className="text-base">{faq.answer}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch('http://localhost:3000/api/faqs')
  
  const faqs = await response.json()

  console.log(faqs);

  return {
    props: {
      faqs
    }
  }
}