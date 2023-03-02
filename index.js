
function Header(){
    return(
             <header>
                <nav className="nav-bar">
                    <img src="./react-logo.png" className="image" width="40px"/>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
    )
}

function MainContent() {
    return(
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>Because it is composable</li>
                <li>Because it is declarative</li>
                <li>Becuase it is a Highly Hireable skill</li>
            </ol>
        </div>
    )
}

function Footer() {
    return(
        <footer>
            <small>@ 2023 Mike development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return(
        <div>
        <Header />
        <MainContent />
        <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.querySelector('#root'));