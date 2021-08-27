
import { Link } from "react-router-dom";

function Suggestion(props){

    return (
        <div className="search-suggestions" style={props.visibility()}>
            {
                props.suggs.map((val, ind, arr) =>  {
                    return <Link to={'/search?keyword='+val} key={ind}>{val}</Link>;
                })
            }
        </div>
    )
}

export default Suggestion;