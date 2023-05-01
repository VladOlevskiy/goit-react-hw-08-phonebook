import { NavLink } from './AuthNav-styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
      {/* <NavLink to="/auth">Auth</NavLink> */}
    </div>
  );
};
