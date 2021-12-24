import OfferView from "./offerView.component/offerView";
import LastView from "./lastView.component/lastView";
import OrderOfflineBanner from "./orderOfflineBanner.component/orderOfflineBanner";
import Loading from "../loading.component/loading";

function Home(props) {

  return (
    <>
      {props.items.length ? (
        <>
          <OfferView items={props.items} />
          <LastView items={props.items} />
        </>
      ) : (
        <Loading />
      )}
      <OrderOfflineBanner />
    </>
  );
}

export default Home;
