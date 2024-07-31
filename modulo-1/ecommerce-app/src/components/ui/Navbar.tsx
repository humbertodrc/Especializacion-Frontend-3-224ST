import {locales} from "@/locales/constants";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Navbar() {
	const {asPath} = useRouter();

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
						Home
					</Link>
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
				<li className="flex items-center gap-4">
					<Link
						href={asPath}
						locale={locales.ES}
						className="flex items-center gap-4"
					>
						<Image
							src="/images/spanish.png"
							alt="Español"
							width={20}
							height={20}
						/>
						<p>Español</p>
					</Link>
					<Link
						href={asPath}
						locale={locales.EN}
						className="flex items-center gap-4"
					>
						<Image
							src="/images/english.png"
							alt="English"
							width={20}
							height={20}
						/>
						<p>English</p>
					</Link>
					<Link
						href={asPath}
						locale={locales.PT}
						className="flex items-center gap-4"
					>
						<Image
							src="/images/portuguese.png"
							alt="Portiguese"
							width={20}
							height={20}
						/>
						<p>Portuguese</p>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
