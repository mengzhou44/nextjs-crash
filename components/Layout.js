import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <section>
        <Header></Header>
        {children}
      </section>
      <footer>This is footer</footer>
    </>
  );
};

export default Layout;
