import Logo from '@/assets/svgs/Logo';
import { font } from '@/utils/fonts';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={`px-5 md:px-10 py-3 flex items-center justify-between`}>
      <Link href="#" className="hover:opacity-80 transition-all">
        <Logo />
      </Link>

      <Link
        href=""
        className={`${font.lexend} text-white border-t border-t-primary border-b border-b-primary rounded-lg py-3 px-5`}
      >
        Explore Apps
      </Link>
    </header>
  );
};

export default Header;
