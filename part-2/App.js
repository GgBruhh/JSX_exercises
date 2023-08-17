const App = () => {
    return (
        <div>
            <Tweet username="Camryn1242" name="Camryn" date="08/18/2023" message="Tweet 1" />
            <Tweet username="Camryn1242" name="Camryn" date="08/18/2023" message="Tweet 2"/>
            <Tweet username="Camryn1242" name="Camryn" date="08/18/2023" message="Tweet 3"/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))