import { Fragment } from "react";
import OfferView from "./offerView.component/offerView";
import LastView from "./lastView.component/lastView";
import OrderOfflineBanner from "./orderOfflineBanner.component/orderOfflineBanner";
import Loading from "../loading.component/loading";

function Home(props) {
  return (
    <Fragment>
      {props.items === null ? (
        <Loading />
      ) : (
        <>
          <OfferView items={props.items} />
          <LastView items={props.items} />
        </>
      )}
      <OrderOfflineBanner />
    </Fragment>
  );
}

export default Home;
