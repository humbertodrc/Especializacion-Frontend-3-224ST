import {expect, test, describe} from "vitest";
import {render, screen, waitFor} from "@testing-library/react";
import Home from "@/pages";
import {Characters } from "@/interface/characters";

const characters: Characters = {
	items: [
		{
			id: 11,
			name: "Krillin",
			ki: "1.000.000",
			maxKi: "1 Billion",
			race: "Human",
			gender: "Male",
			description:
				"Amigo cercano de Goku y guerrero valiente, es un personaje del manga y anime de Dragon Ball. Es uno de los principales discípulos de Kame-Sen'nin, Guerrero Z, y el mejor amigo de Son Goku. Es junto a Bulma uno de los personajes de apoyo principales de Dragon Ball, Dragon Ball Z y Dragon Ball Super. Aparece en Dragon Ball GT como personaje secundario. En el Arco de Majin Boo, se retira de las artes marciales, optando por formar una familia, como el esposo de la Androide Número 18 y el padre de Marron.",
			image: "https://dragonball-api.com/characters/Krilin_Universo7.webp",
			affiliation: "Z Fighter",
			deletedAt: null,
		},
		{
			id: 12,
			name: "Tenshinhan",
			ki: "2.400.000",
			maxKi: "80.000.000",
			race: "Human",
			gender: "Male",
			description:
				"Maestro de las artes marciales y miembro de los Z Fighters.  Es un personaje que aparece en el manga y en el anime de Dragon Ball, Dragon Ball Z, Dragon Ball GT y posteriormente en Dragon Ball Super.",
			image: "https://dragonball-api.com/characters/Tenshinhan_Universo7.webp",
			affiliation: "Z Fighter",
			deletedAt: null,
		},
	],
	meta: {
		totalItems: 58,
		itemCount: 10,
		itemsPerPage: 10,
		totalPages: 6,
		currentPage: 2,
	},
	links: {
		first: "https://dragonball-api.com/api/characters?limit=10",
		previous: "https://dragonball-api.com/api/characters?page=1&limit=10",
		next: "https://dragonball-api.com/api/characters?page=3&limit=10",
		last: "https://dragonball-api.com/api/characters?page=6&limit=10",
	},
};

describe("Test in Home", () => {
	test("Should title app", () => {
		render(<Home characters={characters} />);
		const title = screen.getByText("App de Goku");
		expect(title).toBeTruthy();
	});

	test("Should Characters", async () => {
    render(<Home characters={characters} />);
    screen.debug();
		waitFor(() => {
			const krillin = screen.getByText("Krillin");
			const tenshinhan = screen.getByText("Tenshinhan");
      expect(krillin).toBeTruthy();
      expect(tenshinhan).toBeTruthy();
		});
	});
});
