import './ServiceSection.css'

export default function ServiceSection() {

    
    return (
        <section className='offered-services-section'>
            <div>
                <h2>Services Offered By Our Company</h2>
            </div>
            <hr />

            <div className='offered-services-section-content'>
                <div className='offered-services-card'>
                    <div className='offered-services-pictire'>
                        <img className='servise-image' src='./basic-cleaning.png' />
                    </div>
                    <div className='offered-services-text'>
                        <h3>Basic cleaning</h3>
                        <p>
                        Basic Cleaning is professional service on a budget. 
                        Like the name suggests, this service doesn’t include everything, 
                        just the things that are essential to maintaining a clean, comfortable home.
                        </p>
                    </div>
                </div>
                <div className='offered-services-card'>
                    <div className='offered-services-pictire'>
                        <img className='servise-image' src='./top-cleaning.png' />
                    </div>
                    <div className='offered-services-text'>
                        <h3>Top cleaning</h3>
                        <p>
                        Cleaning is the best choice for many homes. It offers far more care for your home 
                        than Basic! It’s our clients’ most common choice, 
                        but because we truly feel it is the standard of care that all homes should receive. 
                        </p>
                    </div>
                </div>
                <div className='offered-services-card'>
                    <div className='offered-services-pictire'>
                        <img className='servise-image' src='./diamant-cleaning.png' />
                    </div>
                    <div className='offered-services-text'>
                        <h3>Dimond Cleaning</h3>
                        <p>DiamondCleaning is the ultimate luxury package in Home Care 
                            and exclusively delivered by our company. Our Dimond option includes 
                            not only all of Standard House Cleaning, 
                            but also an expanded list of chores to be done every time.</p>
                    </div>
                </div>
                <div className='offered-services-card'>
                    <div className='offered-services-pictire'>
                        <img className='servise-image' src='./window-clean.png' />
                    </div>
                    <div className='offered-services-text'>
                        <h3>Window cleaning</h3>
                        <p>We deliver professional window cleaning at fixed prices and with a quality 
                            guarantee, so that you can spend your 
                            time and energy on things that are warmer around your heart.</p>
                    </div>
                </div>
            </div>
        </section>
    )

}