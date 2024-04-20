import logo from '../assets/logo.svg';
import { StarIcon } from '@heroicons/react/24/outline';

// Components
import Button from './button';
import Box from './box';

const Header = () => {
  return (
    <header className="bg-blue-600 px-sys py-4 flex items-center justify-center">
      <Box containerStyle="flex flex-row justify-between items-center">
        <a href="#">
          <img src={logo} alt="quick" className="h-auto w-9 md:w-10 xl:w-12" />
        </a>
        <a href="#" aria-label="star on github">
          <Button size="sm" color="dark" Icon={StarIcon}>
            Star on Github
          </Button>
        </a>
      </Box>
    </header>
  );
};

export default Header;
