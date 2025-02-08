export default function Slider()
{
    return <> <div className="hero_area">
   
    <section className="slider_section long_section" style={{ background: "linear-gradient(135deg, #f3e7e9, #e3eeff)" }}>
      <div id="customCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-5">
                  <div className="detail-box">
                    <h1>
                    Open a Book<br/>
                      Open Your Mind

                    </h1>
                    <p>
                    Step into a world of infinite possibilities with every chapter. 
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Contact Us
                      </a>
                      <a href="" className="btn2">
                        About Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="img-box" >
                    <img src="images/book 5.jpeg"  alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-5">
                  <div className="detail-box">
                    <h1>
                    Inspiring Creativity <br/>
                     One Page at a Time
                    </h1>
                    <p>Every page is a new adventure waiting to be explored.
                   Let your imagination wander through words and wonder</p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Contact Us
                      </a>
                      <a href="" className="btn2">
                        About Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="img-box">
                    <img src="images/book7.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-5">
                  <div className="detail-box">
                    <h1>
                      Write your story <br/>
                      With us
                    </h1>
                    <p>
                    Unlock the magic of stories, one book at a time.
                  Step into a world of infinite possibilities with every chapter.                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Contact Us
                      </a>
                      <a href="" className="btn2">
                        About Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="img-box">
                    <img src="images/book8.webp" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#customCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#customCarousel" data-slide-to="1"></li>
          <li data-target="#customCarousel" data-slide-to="2"></li>
        </ol>
      </div>
    </section>
   
  </div>
    </>
}