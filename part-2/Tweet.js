const Tweet = (props) => {
    return (
        <div>
            <h1>{props.username}</h1>
            <h2>{props.name}</h2>
            <i>{props.date}</i>
            <p>{props.message}</p>
        </div>
    )
}