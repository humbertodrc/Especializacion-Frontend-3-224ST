import { useRouter } from "next/router"

export default function FaqPage() {

  const { query: { id } } = useRouter()
  
  console.log(id);

  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}