import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

	return (
		<nav className="flex justify-between w-full bg-slate-800 py-4 px-6">
			<div>
				<Link href="/">
					<Image src="/goku_normal.webp" alt="Logo" width={40} height={80} />
				</Link>
			</div>
			<ul className="flex items-center gap-4">
				<li>
					<Link className="hover:underline" href="/">
						Home
					</Link>
				</li>
				<li>
					<Link className="hover:underline" href="/planetas">
						Planetas
					</Link>
				</li>
				<li>
					<Link className="hover:underline" href="/faqs">
						Preguntas Frecuentes
					</Link>
				</li>
			</ul>
		</nav>
	);
}
