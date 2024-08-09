import {describe, test, expect} from "vitest";
import httpMocks from "node-mocks-http";
import {NextApiRequest, NextApiResponse} from "next";
import handler from "@/pages/api/faqs/[id]";
import faqs from "@/data/faqs";

describe("Pruebas en FAQS por ID", () => {
	test("Debe retornar un faq", async () => {
		// creamos el objeto simulado de la solicitud(req)
		const req = httpMocks.createRequest<NextApiRequest>({
			method: "GET",
			query: {
				id: 2,
			},
		});

		// Creamos el objeto simulado de la respuesta(res)
		const res = httpMocks.createResponse<NextApiResponse>();

		// Llamamos a la función manejadora de la API
		await handler(req, res);

		// Obtenemos la respuesta de la API
		const data = res._getJSONData();
		// console.log(data);

		// Verificamos que la respuesta sea un arreglo y su status sea 200
		expect(res.statusCode).toBe(200);
		expect(data.id).toBe(2);
		expect(data).toEqual(faqs[1]);
	});

	test("Debe retornar un mensaje si el method no esta permitido", async() => {
		// creamos el objeto simulado de la solicitud(req)
		const req = httpMocks.createRequest<NextApiRequest>({
			method: "POST",
			query: {
				id: 2,
			},
		});

		// Creamos el objeto simulado de la respuesta(res)
		const res = httpMocks.createResponse<NextApiResponse>();

    // Llamamos a la función manejadora de la API
    await handler(req, res);

    // Obtenemos la respuesta de la API
    const data = res._getJSONData();

    // Verificamos que la respuesta sea un arreglo y su status sea 404
    expect(res.statusCode).toBe(404);
    expect(data).toEqual({ message: `No se encontro la pregunta con el id 2` });
	});
});
