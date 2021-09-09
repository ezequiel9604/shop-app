
import React from "react";

import Header from "./header.component/header";
import Footer from "./footer.component/footer";

function Layout(props) {

    return (  
        <React.Fragment>
            <Header data={props.dummy_data} />
                <main>
                    {props.children}
                </main>
            <Footer />
        </React.Fragment>
    );
}

export default Layout;