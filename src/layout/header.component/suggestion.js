
import { Link } from "react-router-dom";

function Suggestion(props){
    return (
        <div className="search-suggestions" style={props.visibility()}>
            { props.suggs.map((val) =>  {
                return <Link to={'/search?keyword='+val} key={val}>{val}</Link>;
            })}
        </div>
    );
}

export default Suggestion;