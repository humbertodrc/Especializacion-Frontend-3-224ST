import faqs from "@/data/faqs"
import { Faq } from "@/interface/faqs"
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Faq[] | { name: string }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'GET') {
    return res.status(200).json(faqs)
  }

  return res.status(404).json({ name: 'No se encontraron preguntas frecuentes' })
}