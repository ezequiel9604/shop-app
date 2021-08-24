
function Suggestion(props){

    return (
        <div className="search-suggestions" style={props.visibility()}>
            {
                props.suggs.map((val, ind, arr) =>  {
                    return <a href={'/search?keyword='+val} key={ind}>{val}</a>;
                })
            }
        </div>
    )
}

export default Suggestion;