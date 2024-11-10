import Link from 'next/link';
import "../style/header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <h1>NAGHMANA</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link className='nav-links' href="/">Home</Link></li>
          <li><Link className='nav-links' href="/about">About</Link></li>
          <li><Link className='nav-links' href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

