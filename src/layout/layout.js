import Header from "./header.component/header";
import Footer from "./footer.component/footer";
import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <Header user={props.user} departments={props.departments} />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
