import { useRouter } from "next/router"

export default function FaqPage() {

  const { query: { id } } = useRouter()

  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}