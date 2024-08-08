import { Faq } from "@/interface/faqs"
import type { NextApiRequest, NextApiResponse } from 'next'
import faqs from "../../../data/faqs"

type Data = Faq | { name: string }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query
  
  if (req.method === 'GET') {
    const faqResponse = faqs.find(faq => faq.id === Number(id))
    console.log(faqResponse);

    if(faqResponse) {
      return res.status(200).json(faqResponse)
    }

    return res.status(404).json({ name:`No se encontro la pregunta con el id ${id}` })
  }

  return res.status(404).json({ name: 'No se encontraron preguntas frecuentes' })
}