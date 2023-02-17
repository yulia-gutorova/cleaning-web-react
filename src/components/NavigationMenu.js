import './NavigationMenu.css'

export default function NavigationMenu() {



    return (
        <div className='navigation-menu-wrapper'>
            <header className="navigation">
                <div className="menu">
                    <div class="menu-logo">
                        <img className='logo-img' src='../logo2.webp'></img>
                        <span>Diamond Clean</span>
                    </div>
                    <div className="menu-center">
                        <button className="menubtn"><a>Home</a></button>
                        <button className="menubtn" onClick={{aboutUsClickHandler}}>About us</button>
                        <button className="menubtn">Services</button>
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