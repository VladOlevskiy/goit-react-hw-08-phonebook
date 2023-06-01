import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { UserNameText, Wrapper, Button } from './UserMenu-styled';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const navigate = useNavigate();
  return (
    <Wrapper>
      <UserNameText>Welcome, {user.name}</UserNameText>
      <Button
        type="button"
        onClick={() => {
          dispatch(logOut());
          navigate('/', { replace: true });
        }}
      >
        Logout
      </Button>
    </Wrapper>
  );
};
