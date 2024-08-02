import Image from "next/image";

export default function NotFound() {
  return (
    <div className=" flex items-center justify-center max-w-3xl mx-auto flex-col mt-36">
      <h1 className="text-4xl font-bold">No hay nada que buscar acá</h1>
      <Image src="/goku_normal.webp" alt="Goku" width={160} height={160} />
    </div>
  )
}