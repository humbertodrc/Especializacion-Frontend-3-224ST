import { products } from "@/data/products"
import { defaultLocale } from "@/locale/constants"
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const { query: { lang } } = req
  
  // Aca busco en la base de datos los productos en el idioma que me pasan, o puedo llamar a una API externa
  const productsByLang = products[lang as string] ?? products[defaultLocale]

  res.status(200).json(productsByLang)
}