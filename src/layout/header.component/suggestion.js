import { Link } from "react-router-dom";

function Suggestion(props){
    return (
        <div className="search-suggestions" style={props.visibility()}>
            { props.suggs.map((current) =>  {
                return <Link to={'/search?keyword='+current} key={current}>{current}</Link>;
            })}
        </div>
    );
}

export default Suggestion;