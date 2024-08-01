import { expect, test, describe } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { Item, Meta, Links } from '@/interface/characters';
import Home from "../src/pages/index";

const items: Item[] = [
  {
    "id": 1,
    "name": "Goku",
    "ki": "60.000.000",
    "maxKi": "90 Septillion",
    "race": "Saiyan",
    "description": "El protagonista de la serie, conocido por su gran poder y personalidad amigable. Originalmente enviado a la Tierra como un infante volador con la misión de conquistarla. Sin embargo, el caer por un barranco le proporcionó un brutal golpe que si bien casi lo mata, este alteró su memoria y anuló todos los instintos violentos de su especie, lo que lo hizo crecer con un corazón puro y bondadoso, pero conservando todos los poderes de su raza. No obstante, en la nueva continuidad de Dragon Ball se establece que él fue enviado por sus padres a la Tierra con el objetivo de sobrevivir a toda costa a la destrucción de su planeta por parte de Freeza. Más tarde, Kakarot, ahora conocido como Son Goku, se convertiría en el príncipe consorte del monte Fry-pan y líder de los Guerreros Z, así como el mayor defensor de la Tierra y del Universo 7, logrando mantenerlos a salvo de la destrucción en innumerables ocasiones, a pesar de no considerarse a sí mismo como un héroe o salvador.",
    "image": "https://dragonball-api.com/characters/goku_normal.webp",
    "deletedAt": null
},
{
    "id": 2,
    "name": "Vegeta",
    "ki": "54.000.000",
    "maxKi": "19.84 Septillion",
    "race": "Saiyan",
    "description": "Príncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters. A pesar de que a inicios de Dragon Ball Z, Vegeta cumple un papel antagónico, poco después decide rebelarse ante el Imperio de Freeza, volviéndose un aliado clave para los Guerreros Z. Con el paso del tiempo llegaría a cambiar su manera de ser, optando por permanecer y vivir en la Tierra para luchar a su lado contra las inminentes adversidades que superar. Junto con Piccolo, él es de los antiguos enemigos de Goku que ha evolucionando al pasar de ser un villano y antihéroe, a finalmente un héroe a lo largo del transcurso de la historia, convirtiéndose así en el deuteragonista de la serie.",
    "image": "https://dragonball-api.com/characters/vegeta_normal.webp",
    "deletedAt": null
}
];

const meta: Meta = {
  totalItems: 2,
  itemCount: 2,
  itemsPerPage: 2,
  totalPages: 1,
  currentPage: 1,
};

const links: Links = {
  first: '',
  previous: '',
  next: '',
  last: '',
};


describe('Home', () => {
  test('should render the Home page', () => {
    render(<Home items={items} meta={meta} links={links} />);
    const title = screen.getByText('App de Goku');
    expect(title).toBeTruthy();
  });

  test('should render the Home page with the items', async() => {
    render(<Home items={items} meta={meta} links={links} />);
    screen.debug();
    waitFor(() => {
      const goku = screen.getByText('Goku');
      const vegeta = screen.getByText('Vegeta');
      expect(goku).toBeTruthy();
      expect(vegeta).toBeTruthy();
    });
  });
});
