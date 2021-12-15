import { useState, useEffect } from "react";
import OfferView from "./offerView.component/offerView";
import LastView from "./lastView.component/lastView";
import OrderOfflineBanner from "./orderOfflineBanner.component/orderOfflineBanner";
import Loading from "../loading.component/loading";

import { Items } from "../../dummyData";

function Home(props) {

  const [itemList, setItemList] = useState([]);

  useEffect(()=>{
    setItemList(Items);
  }, []);

  return (
    <>
      {itemList.length ? (
        <>
          <OfferView items={itemList} />
          <LastView items={itemList} />
        </>
      ) : (
        <Loading />
      )}
      <OrderOfflineBanner />
    </>
  );
}

export default Home;
