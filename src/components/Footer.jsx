import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer-container">
        <div className="container">
            <div className="first-line">
                <h3>Bandage</h3>
                <div className="social-links">
                    <img src="/images/faceblue.png" alt="" />
                    <img src="/images/instablue.png" alt="" />
                    <img src="/images/twitblue.png" alt="" />
                </div>
            </div>
        </div>

        <div className="second-container">
            <div className="resources">
                <div className="company-info">
                    <h5 className="heading">Company Info</h5>
                    <div className="info-links">
                        <a href="http://">About Us</a>
                        <a href="http://">Carrier</a>
                        <a href="http://">We are hiring</a>
                        <a href="http://">Blog</a>
                    </div>
                </div>
                <div className="company-info">
                    <h5 className="heading">Legal</h5>
                    <div className="info-links">
                        <a href="http://">About Us</a>
                        <a href="http://">Carrier</a>
                        <a href="http://">We are hiring</a>
                        <a href="http://">Blog</a>
                    </div>
                </div>
                <div className="company-info">
                    <h5 className="heading">Features</h5>
                    <div className="info-links">
                        <a href="http://">Business Marketing</a>
                        <a href="http://">User Analytic</a>
                        <a href="http://">Live Chat</a>
                        <a href="http://">Unlimited Support</a>
                    </div>
                </div>
                <div className="company-info">
                    <h5 className="heading">Resources</h5>
                    <div className="info-links">
                        <a href="http://">IOS & Android</a>
                        <a href="http://">Watch a Demo</a>
                        <a href="http://">Customers</a>
                        <a href="http://">API</a>
                    </div>
                </div>
                <div className="company-info">
                    <h5 className="heading">Get In Touch</h5>
                    <div className="info-links">
                        <form className="subscribe">
                            <input type="text"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            />
                            <button className="subscribe-btn">Subscribe</button>
                        </form>
                        <p>Lore imp sum dolor Amit</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div>
        <h6 className="copyright">Made With Love By Finland All Right Reserved </h6>
        </div>
    </footer>
  )
}

export default Footer
