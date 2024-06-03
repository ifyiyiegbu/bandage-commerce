import Footer from "../components/Footer"
import BestSeller from "../components/BestSeller"
import "../styles/Home.css"
import Navbar from "../components/Navbar"
import { useMediaQuery } from "react-responsive"

function Home() {
    
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <main className="home">
        <section className="navbar">
            <Navbar />
        </section>
        <div className="home-content-container">
        <section className="home-pics">
            <div className="coconut">
                <div className="card-label">
                    <p className="item-number">5 Items</p>
                    <h3>FURNITURE</h3>
                    <p>Read More</p>
                </div>
                <div>
                    <img src="/images/mobile/coco-mobile.jpg" alt="" className="mobile-pic"/>
                    <img src="/images/coconut-plate.png" alt="" className="desktop-pic"/>
                </div>
            </div>
            <div>
                <div className="pink">
                    <div className="card-label"> 
                        <p className="item-number">5 Items</p>
                        <h3>FURNITURE</h3>
                        <p>Read More</p>
                    </div>
                    <div>
                        <img src="/images/mobile/pink-flower-mobile.jpg" alt="" className="mobile-pic"/>
                        <img src="/images/pink-flowerpot.png" alt="" className="desktop-pic"/>
                    </div>
                </div>
                <div className="bottom-right">
                    <div className="chandelier">
                        <div className="card-label">
                            <p className="item-number">5 Items</p>
                            <h3>FURNITURE</h3>
                            <p>Read More</p>
                        </div>
                        <div>
                            <img src="/images/mobile/chandelier-mobile.jpg" alt="" className="mobile-pic"/>
                            <img src="/images/chandelier.png" alt="" className="desktop-pic"/>
                        </div>
                    </div>
                    <div className="flowerpot">
                        <div className="card-label">
                            <p className="item-number">5 Items</p>
                            <h3 className="department">FURNITURE</h3>
                            <p>Read More</p>
                        </div>
                        <div>
                            <img src="/images/mobile/flowerpot-mobile.jpg" alt="" className="mobile-pic"/>
                            <img src="/images/flower-pot.png" alt="" className="desktop-pic"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        <section className="bestseller-section">
            <header className='list-header'>
                <h4>Featured Products</h4>
                <h3>BESTSELLER PRODUCTS</h3>
                <p>Problems trying to resolve the conflict between</p>
            </header>
            <div>
                {isMobile ? (
                    <BestSeller limit={5} />
                ) : (
                    <BestSeller limit={10} />
                )}
            </div>
        </section>
        <section className="featured-products">
            <div className="featured-heading">
                <h4>Featured Products</h4>
                <h3>THE BEST SERVICES</h3>
                <p>Problems trying to resolve the conflict between </p>
            </div>
            <div className="features">
                <div>
                    <img src="/images/bx_bxs-book-reader.png" alt="" />
                    <h3>Easy Wins</h3>
                    <p>Get your best looking smile now!</p>
                </div>
                <div>
                    <img src="/images/carbon_book.png" alt="" />
                    <h3>Concrete</h3>
                    <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
                </div>
                <div>
                    <img src="/images/uil_arrow-growth.png" alt="" />
                    <h3>Hack Growth</h3>
                    <p>Overcame any hurdle or any other problem.</p>
                </div>
            </div>
        </section>
        <section className="blog">
            <div className="blog-heading">
                <h6>Practice Advice</h6>
                <h2>Featured Posts</h2>
            </div>
            <div className="blog-posts">
                <div className="blogpost-card">
                    <div className="blogpost-pic">
                        <img src="/images/bedroom1.png" alt="" />
                        <h6>NEW</h6>
                    </div>
                    <div className="blogpost-text">
                        <div className="tags">
                            <p>Google</p>
                            <p>Trending</p>
                            <p>New</p>
                        </div>
                        <h4>Loudest à la Madison #1 
                        (L'integral)
                        </h4>
                        <p className="blog-description">
                        We focus on ergonomics and meeting 
                        you where you work. It's only a 
                        keystroke away.
                        </p>
                        <div className="date-comment">
                            <div className="date">
                                <img src="/images/time-icon.png" alt="" />
                                <p>22 April 2021</p>
                            </div>
                            <div className="comments">
                                <img src="/images/rating-icon.png" alt="" />
                                <p>10 comments</p>
                            </div>
                        </div>
                        <div className="learn-more">
                            <h6>Learn More</h6>
                            <img src="/images/next-arrow.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="blogpost-card">
                    <div className="blogpost-pic">
                        <img src="/images/kitchen.png" alt="" />
                        <h6>NEW</h6>
                    </div>
                    <div className="blogpost-text">
                        <div className="tags">
                            <p>Google</p>
                            <p>Trending</p>
                            <p>New</p>
                        </div>
                        <h4>Loudest à la Madison #1 
                        (L'integral)
                        </h4>
                        <p className="blog-description">
                        We focus on ergonomics and meeting 
                        you where you work. It's only a 
                        keystroke away.
                        </p>
                        <div className="date-comment">
                            <div className="date">
                                <img src="/images/time-icon.png" alt="" />
                                <p>22 April 2021</p>
                            </div>
                            <div className="comments">
                                <img src="/images/rating-icon.png" alt="" />
                                <p>10 comments</p>
                            </div>
                        </div>
                        <div className="learn-more">
                            <h6>Learn More</h6>
                            <img src="/images/next-arrow.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="blogpost-card">
                    <div className="blogpost-pic">
                        <img src="/images/bedroom2.png" alt="" />
                        <h6>NEW</h6>
                    </div>
                    <div className="blogpost-text">
                        <div className="tags">
                            <p>Google</p>
                            <p>Trending</p>
                            <p>New</p>
                        </div>
                        <h4>Loudest à la Madison #1 
                        (L'integral)
                        </h4>
                        <p className="blog-description">
                        We focus on ergonomics and meeting 
                        you where you work. It's only a 
                        keystroke away.
                        </p>
                        <div className="date-comment">
                            <div className="date">
                                <img src="/images/time-icon.png" alt="" />
                                <p>22 April 2021</p>
                            </div>
                            <div className="comments">
                                <img src="/images/rating-icon.png" alt="" />
                                <p>10 comments</p>
                            </div>
                        </div>
                        <div className="learn-more">
                            <h6>Learn More</h6>
                            <img src="/images/next-arrow.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="testimonials">
            <div className="testimonial-container">
                <div className="testimonial=card">
                    <h3 className="testimonial-heading">What they say about us</h3>
                    <div className="review-card">
                        <img src="/images/reviewer.png" alt="" />
                        <div className="stars">
                            <img src="/images/filled-star.png" alt="" />
                            <img src="/images/filled-star.png" alt="" />
                            <img src="/images/filled-star.png" alt="" />
                            <img src="/images/filled-star.png" alt="" />
                            <img src="/images/unfilled-star.png" alt="" />
                        </div>
                        <h6 className="review">Slate helps you see how many more days you need to work to 
                        reach your financial goal.</h6>
                        <div className="reviewer-info">
                            <a href="http://">Regina Miles</a>
                            <h6>Designer</h6>
                        </div>
                    </div>
                </div>
                <div className="testimonial-pics">
                    <img src="/images/camera.png" alt="" />
                    <img src="/images/club-girl.png" alt="" />
                    <img src="/images/streets.png" alt="" />
                    <img src="/images/meringue.png" alt="" />
                    <img src="/images/girl.png" alt="" />
                    <img src="/images/writing.png" alt="" />
                    <img src="/images/mountains.png" alt="" />
                    <img src="/images/rainforest.png" alt="" />
                    <img src="/images/blue-pool.png" alt="" />
                </div>
            </div>
        </section>
        <section className="pre-footer">
            <div className="call-to-action">
                <h6>Designing Better Experience</h6>
                <h2>Problems trying to resolve 
                the conflict between </h2>
                <p>Problems trying to resolve the conflict between the two major realms of Classical physics: </p>
                <h3>$16.48</h3>
                <button>ADD YOUR CALL TO ACTION</button>
            </div>
        </section>
        </div>
        <Footer />
      
    </main>
  )
}

export default Home

