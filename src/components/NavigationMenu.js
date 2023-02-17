import './NavigationMenu.css'

export default function NavigationMenu() {
    return (
        <div className='navigation-menu-wrapper'>
            <header className="navigation">
                <div className="menu">
                    <div class="menu-logo">
                        <img className='logo-img' src='../logo192.png'></img>
                        <span>Logo</span>
                    </div>
                    <div className="menu-center">
                        <button className="menubtn">Home</button>
                        <button className="menubtn">Demo</button>
                        <button className="menubtn">Blog </button>
                        <button className="menubtn">Contact</button>
                    </div>
                    <div class="menu-right">
                        <button className="menubtn">Sign up / Log in</button>
                    </div>
                </div>
            </header>
        </div>
    )
}