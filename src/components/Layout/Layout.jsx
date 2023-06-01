import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import Footer from 'components/Footer/Footer';
import { Dna } from 'react-loader-spinner';
export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100vw',
              height: '100vh',
              backgroundColor: 'white',
            }}
          >
            <Dna
              visible={true}
              height="180"
              width="180"
              ariaLabel="dna-loading"
              wrapperStyle={{ alignItems: 'center' }}
              wrapperClass="dna-wrapper"
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
      <Footer />
    </>
  );
};
