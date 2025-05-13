import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="/">
      <button className="text-black text-sm hover:underline">← Volver</button>
    </Link>
  );
}
