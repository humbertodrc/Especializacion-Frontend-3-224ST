import { locales } from "@/locales/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// const EN = "en";
// const ES = "es";
// const PT = "pt";


// const locales = {
//   EN,
//   ES,
//   PT,
// }

export default function Navbar() {
	const {asPath, locale} = useRouter();

	return (
		<nav className="flex justify-between w-full bg-slate-800 py-4 px-6">
			<div>
				<Link href="/">
					<Image src="/mario-logo.webp" alt="Logo" width={40} height={80} />
				</Link>
			</div>
			<ul className="flex items-center gap-4">
				<li>
					<Link className="hover:underline" href="/">
						Inicio
					</Link>
				</li>
				<li>
          <Link href="/productos">
            Productos
          </Link>
				</li>
				<li>
          <Link href="/about">
            Nosotros
          </Link>
				</li>
				<li>
          <Link href="/contact">
            Contacto
          </Link>
        </li>
        <li className="flex gap-2">
          <Link
            href={asPath}
            locale={locales.ES}
            className="flex items-center gap-2"
          >
            <Image src="/images/spanish.png" alt="Español" width={20} height={20} />
            <p>Español</p>
          </Link>
          <Link
            href={asPath}
            locale={locales.EN}
            className="flex items-center gap-2"
          >
            <Image src="/images/english.png" alt="English" width={20} height={20} />
            <p>English</p>
          </Link>
          <Link
            href={asPath}
            locale={locales.PT}
            className="flex items-center gap-2"
          >
            <Image src="/images/portuguese.png" alt="Portuguese" width={20} height={20} />
            <p>Portuguese</p>
          </Link>
        </li>
			</ul>
		</nav>
	);
}
