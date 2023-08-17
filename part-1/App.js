const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Camryn"/>
        </div>
        
    )
}


ReactDOM.render(<App />, document.getElementById('root'))