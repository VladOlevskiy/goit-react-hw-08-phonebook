import { NavLink, Nav, Wrapper, Header } from './Navigation-styled';
import { useAuth } from '../../hooks/useAuth';
import { UserMenu } from '../UserMenu/UserMenu';
import { Container } from 'styles/Container-styled';

// export const Navigation = () => {
//   const { isLoggedIn } = useAuth();

//   return <>{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}</>;
// };

// import { NavLink } from './Navigation-styled';
// import { useAuth } from '../../hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Container>
        <Wrapper>
          <Nav>
            <NavLink style={{ marginRight: '40px' }} to="/">
              Home
            </NavLink>
            {isLoggedIn && <NavLink to="/contacts">My contacts</NavLink>}
          </Nav>
          <Nav>
            {!isLoggedIn && <NavLink to="/auth">Log in / Registration</NavLink>}
            {isLoggedIn && <UserMenu />}
          </Nav>
        </Wrapper>
      </Container>
    </Header>
  );
};
