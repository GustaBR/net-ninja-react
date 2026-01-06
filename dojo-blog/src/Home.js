const Home = () => {
    const handleClick = () => {
        console.log("Hello, Ninjas!");
    }

    const handleClickAgain = (name) => {
        console.log("Hello,", name);
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain("Mario")}>Click me again</button>
        </div>
    );
}

export default Home;