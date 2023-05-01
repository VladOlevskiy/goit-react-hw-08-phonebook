import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBInput } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { register } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Section } from './Auth-styled';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Auth = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const [formValue, setFormValue] = useState(initialState);
  const [showRegister, setShowRegister] = useState(false);
  const { name, email, password, confirmPassword } = formValue;
  const navigate = useNavigate();
  const handleChange = e => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleSubmitLogin = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email: email,
        password: password,
      })
    );
  };
  const handleSubmitRegister = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password is not confirm');
    }
    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
  };
  useEffect(() => {
    if (isLoggedIn) {
      console.log('isLoggedIn');
      navigate('/contacts', { replace: true });
    }
  }, [isLoggedIn, navigate]);
  return (
    <Section>
      <section className="vh-100 gradient-custom">
        <div className="container py-4 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white "
                style={{ borderRadius: '1rem' }}
              >
                <div className="card-body p-4 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">
                      {!showRegister ? 'Login' : 'Register'}
                    </h2>
                    <p className="text-white-50 mb-4">
                      {!showRegister
                        ? 'Please enter your Email & Password'
                        : 'Please enter User detail'}
                    </p>
                    <form>
                      {showRegister && (
                        <>
                          <div className="form-outline form-white mb-4">
                            <MDBInput
                              type="text"
                              name="name"
                              value={name}
                              onChange={handleChange}
                              label="Name"
                              className="form-control form-control-lg"
                            />
                          </div>
                        </>
                      )}
                      <div className="form-outline form-white mb-4">
                        <MDBInput
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleChange}
                          label="Email"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <MDBInput
                          type="password"
                          name="password"
                          value={password}
                          onChange={handleChange}
                          label="Password"
                          className="form-control form-control-lg"
                        />
                      </div>
                      {showRegister && (
                        <div className="form-outline form-white mb-4">
                          <MDBInput
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChange}
                            label="Confirm Password"
                            className="form-control form-control-lg"
                          />
                        </div>
                      )}
                      {!showRegister ? (
                        <button
                          className=" btn btn-outline-light btn-lg px-5"
                          type="button"
                          onClick={handleSubmitLogin}
                        >
                          Login
                        </button>
                      ) : (
                        <button
                          className=" btn btn-outline-light btn-lg px-5"
                          type="button"
                          onClick={handleSubmitRegister}
                        >
                          Register
                        </button>
                      )}
                    </form>
                  </div>
                  <div>
                    <h5 className="mb-0">
                      {!showRegister ? (
                        <>
                          Don't have an account ?
                          <p
                            className="text-white-50 fw-bold"
                            style={{ cursor: 'pointer' }}
                            onClick={() => setShowRegister(true)}
                          >
                            Sign up
                          </p>
                        </>
                      ) : (
                        <>
                          Already have an account{' '}
                          <p
                            className="text-white-50 fw-bold"
                            style={{ cursor: 'pointer' }}
                            onClick={() => setShowRegister(false)}
                          >
                            Sign up
                          </p>
                        </>
                      )}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default Auth;
