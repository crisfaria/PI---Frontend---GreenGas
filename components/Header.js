import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4">
      <nav>
        <ul className="flex justify-between">
          <li><Link href="/">Início</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
