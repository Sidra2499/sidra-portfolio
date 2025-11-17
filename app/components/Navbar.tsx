"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-6 bg-white shadow p-4 sticky top-0 z-50">
      <Link href="/" className={pathname === '/' ? 'font-bold' : ''}>Home</Link>
      <Link href="/about" className={pathname === '/about' ? 'font-bold' : ''}>About</Link>
      <Link href="/projects" className={pathname === '/projects' ? 'font-bold' : ''}>Projects</Link>
      <Link href="/skills" className={pathname === '/skills' ? 'font-bold' : ''}>Skills</Link>
      <Link href="/contacts" className={pathname === '/contacts' ? 'font-bold' : ''}>Contact</Link>
    </nav>
  );
}