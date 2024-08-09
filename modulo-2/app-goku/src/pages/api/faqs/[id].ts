import faqs from "@/data/faqs"
import { Faq } from "@/interface/faqs.type"
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Faq | { message: string }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query
  
  if (req.method === 'GET') {
    const faq = faqs.find((faq) => faq.id === Number(id))

    if(faq) {
      return res.status(200).json(faq)
    }

  }

  return res.status(404).json({ message: `No se encontro la pregunta con el id ${id}` })
}