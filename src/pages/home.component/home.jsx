
import OfferView from './offerView.component/offerView';
import LastView from './lastView.component/lastView';
import OrderOfflineBanner from './orderOfflineBanner.component/orderOfflineBanner';

function Home(props) {
    return (
        <div>
            <OfferView items={props.items} />
            <LastView items={props.items} />
            <OrderOfflineBanner />
        </div>
    );
}

export default Home;

