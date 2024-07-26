import Link from "next/link"


export default function Navbar() {
  return (
    <nav className="flex justify-end w-full bg-slate-800 py-4 px-6">
      <ul className="flex items-center gap-4">
        <li>
          <Link className="hover:underline" href="/">Home</Link>
        </li>
        <li>
          <Link href="/productos">Products</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}