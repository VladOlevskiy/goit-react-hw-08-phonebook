import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { Header } from './AppBar-styled';
import { Auth } from 'pages/AuthPage/AuthPage';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Navigation />
      {/* {isLoggedIn && <UserMenu />} */}
      {/* {isLoggedIn && <Auth />} */}
    </>
  );
};
