import {describe, test, expect} from "vitest";
import httpMocks from "node-mocks-http";
import { NextApiRequest, NextApiResponse } from "next";
import hanldler from "@/pages/api/faqs";
import faqs from "@/data/faqs";

describe("Pruebas en API FAQS", () => {
  test("Debe retornar FAQS data", async() => {
    // creamos el objeto simulado de la solicitud(req)
    const req = httpMocks.createRequest<NextApiRequest>({
      method: "GET"
    })

    // Creamos el objeto simulado de la respuesta(res)
    const res = httpMocks.createResponse<NextApiResponse>()

    // Llamamos a la función manejadora de la API
    await hanldler(req, res)

    // Obtenemos la respuesta de la API
    const data = res._getJSONData()
    // console.log(data);

    // Verificamos que la respuesta sea un arreglo y su status sea 200
    expect(res.statusCode).toBe(200)
    expect(data).toEqual(faqs)

  });

  test('Debe retornar un mensaje si el method no esta permitido', async() => { 
    // creamos el objeto simulado de la solicitud(req)
    const req = httpMocks.createRequest<NextApiRequest>({
      method: "POST"
    })

    // Creamos el objeto simulado de la respuesta(res)
    const res = httpMocks.createResponse<NextApiResponse>()

    // Llamamos a la función manejadora de la API
    await hanldler(req, res)

    // Obtenemos la respuesta de la API
    const data = res._getJSONData()
    

    // Verificamos que la respuesta sea un arreglo y su status sea 404
    expect(res.statusCode).toBe(404)
    expect(data).toEqual({ message: 'Not found' })

   })
});
