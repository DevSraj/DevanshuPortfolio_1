import Link from 'next/link';
// import './Styles/header.css';
import './Styles/header_alter.css';

const Header: React.FC = () => {
  return (

<header className="shadow-neon">
      <nav>
        <ul>
          <li><button><Link href="/Home">Home</Link></button></li>
          <li><button><Link href="/About">About</Link></button></li>
          <li><button><Link href="/Skill">Skills</Link></button></li>
          <li><button><Link href="/workExperience">Work Experience</Link></button></li>
          <li><button>< Link href="/Project">Projects</Link></button></li>
          <li><button>< Link href="/Contact_Connect">Contact/Connect</Link></button></li>
<li><button>< Link href="/pay">Pay/Donate</Link></button></li>
        </ul>
      </nav>
    </header>


  );
}

export default Header;
