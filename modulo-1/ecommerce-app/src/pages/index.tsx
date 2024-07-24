import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [characters, setCharacters] = useState([])

  const getCharacters = async () => {
    try {
      const url = 'https://www.amiiboapi.com/api/amiibo/'
      const resp = await fetch(url)
      const data = await resp.json()
      const characters = data.amiibo.slice(0, 40)
      return characters
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getCharacters().then(characters => setCharacters(characters))
  }, [])

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="grid grid-cols-6 gap-6">
        {
          characters.map((character, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <Image
                src={character.image}
                alt={character.name}
                width={100}
                height={100}
              />
              <p className="text-center">{character.name}</p>
            </div>
          ))
        }
      </div>
    </main>
  );
}
