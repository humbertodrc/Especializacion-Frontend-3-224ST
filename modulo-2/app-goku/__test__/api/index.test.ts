import {describe, test, expect} from "vitest";
import handler from "@/pages/api/faqs";
import {NextApiRequest, NextApiResponse} from "next";
import httpMocks from "node-mocks-http";
import faqs from "@/data/faqs";

describe("Api Faqs", () => {
	test("Debe retornar los datos de FAQS", async () => {
		// Creamos el objeto simulado de la solicitud
		const req = httpMocks.createRequest<NextApiRequest>({
			method: "GET",
		});

		// Creamos el objeto simulado de la respuesta
		const res = httpMocks.createResponse<NextApiResponse>();

		// Llamamos a la función handler con los objetos simulados
		await handler(req, res);

		// Obtenemos los datos de la respuesta
		const data = res._getJSONData();

		// Comprobamos que la respuesta sea correcta
		expect(res.statusCode).toBe(200);
		expect(data).toEqual(faqs);
	});

	test("Debe devolver un mensaje de error en caso de que el method no sea correcto", async() => {
		// Creamos el objeto simulado de la solicitud
		const req = httpMocks.createRequest<NextApiRequest>({
			method: "POST",
    });
    
    // Creamos el objeto simulado de la respuesta
    const res = httpMocks.createResponse<NextApiResponse>()

    // Llamamos a la función handler con los objetos simulados
    await handler(req, res)

    // Obtenemos los datos de la respuesta
    const data = res._getJSONData()

    // Comprobamos que la respuesta sea correcta
    expect(res.statusCode).toBe(404)
    expect(data).toEqual({ name: 'No se encontraron preguntas frecuentes' })
	});
});
