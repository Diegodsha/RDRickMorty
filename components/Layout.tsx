import { ReactNode } from 'react';
import NavBar from './NavBar';


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <main style={{ marginTop:'100px' }}>{children}</main>
    </>
  );
};

export default Layout;
