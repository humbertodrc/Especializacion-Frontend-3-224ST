import {describe, test, expect  } from "vitest";
import httpMocks from 'node-mocks-http';
import { NextApiRequest, NextApiResponse } from "next";
import handler from "@/pages/api/faqs/[id]";
import faqs from "@/data/faqs";

describe('Debe retornar los datos de una FAQ', () => { 
  test('Debe retornar una faq por id', async() => { 
    // Creamos el objeto simulado de la solicitud
    const req = httpMocks.createRequest<NextApiRequest>({
      method: 'GET',
      query: { id: 1 }
    })

    // Creamos el objeto simulado de la respuesta
    const res = httpMocks.createResponse<NextApiResponse>()

    // Llamamos a la función handler con los objetos simulados
    await handler(req, res)

    // Obtenemos los datos de la respuesta
    const data = res._getJSONData()
   
    // Comprobamos que la respuesta sea correcta
    expect(res.statusCode).toBe(200)
    expect(data).toEqual(faqs[0])
  })
  
  test('Debe devolver un mensaje de error si el method no esta permitido', async() => { 
    // Creamos el objeto simulado de la solicitud
    const req = httpMocks.createRequest<NextApiRequest>({
      method: 'POST',
      query: { id: 1 }
    })

    // Creamos el objeto simulado de la respuesta
    const res = httpMocks.createResponse<NextApiResponse>()

    // Llamamos a la función handler con los objetos simulados
    await handler(req, res)

    // Obtenemos los datos de la respuesta
    const data = res._getJSONData()

    // Comprobamos que la respuesta sea correcta
    expect(res.statusCode).toBe(404)
    expect(data).toEqual({ name: 'No se encontraron preguntas frecuentes' })
   })
 })