import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Service } from "./Service";
import { Aboutus } from "./Aboutus";
import { Mycompany } from "./Mycompany";
import Contactus from "./Contactus";

export class Home extends Component {
    render() {
        return (
            <>
            
<section className="container-fluid p-0">
  <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="w-100" src="../../assets/images/home-1.png" alt="thexlinez" />
        <div className="carousel-caption">
          <div className="container" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="row justify-content-center">
              <div className="col-lg-7 pt-5">
                <h1 className="display-4 text-white mb-4 animated slideInDown">
                  {/* WELCOME TO X LINEZ TRUST US , BEST  X   */}
                  Welcome Aboard <span>X Linez</span>
                </h1>
                <p className="fs-5 mb-4 pb-2 mx-sm-5 animated slideInDown">
                  Your Trusted Logistics Partner
                </p>
                <a className="btn my-btn animated slideInDown">Get Start With Us</a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="w-100" src="../../assets/images/home-2.png" alt="XLinez" />
        <div className="carousel-caption">
          <div className="container" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="row justify-content-center">
              <div className="col-lg-7 pt-5">
                <h1 className="display-4 text-white mb-4 animated slideInDown">
                  Embark on a Journey of Seamless Logistics
                </h1>
                <p className="fs-5 mb-4 pb-2 mx-sm-5 animated slideInDown">
                  Precision, Punctuality, and Personalized Service - That's X Linez
                </p>
                <a className="btn my-btn animated slideInDown">Get Start With Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  
  <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 pb-5 ">
      <div className="col ps-4 pe-4" data-aos="fade-down">
        <div className="card h-100" style={{border: 'none'}}>
          <img src="../../assets/images/g.png" className="card-img-top" alt="thexlinez" />
          <div className="card-body p-0 pt-3">
            <h5 className="card-title" style={{color: '#a40000', fontWeight: 'bold'}}>
              Global Reach &amp; Local Expertise
            </h5>
            <p className="card-text" style={{color: '#002462'}}>
              Whether you're shipping goods across borders or within your city,
              our extensive network ensures seamless connections to get your
              cargo where it needs to be.
            </p>
          </div>
        </div>
      </div>
      <div className="col ps-4 pe-4" data-aos="fade-down">
        <div className="card h-100" style={{border: 'none'}}>
          <img src="../../assets/images/t.png" className="card-img-top" style={{WebkitTransition: '0.3s all ease-in-out', OTransition: '0.3s all ease-in-out', transition: '0.3s all ease-in-out'}} alt="thexlinez.com" />
          <div className="card-body p-0 pt-3">
            <h5 className="card-title" style={{color: '#a40000', fontWeight: 'bold'}}>
              Efficient Transportation
            </h5>
            <p className="card-text" style={{color: '#002462'}}>
              Utilizing the latest technology and a diverse fleet, we guarantee
              timely and secure transportation of your goods, ensuring they
              reach their destination in optimal condition.
            </p>
          </div>
        </div>
      </div>
      <div className="col ps-4 pe-4" data-aos="fade-down">
        <div className="card h-100" style={{border: 'none'}}>
          <img src="../../assets/images/c.png" className="card-img-top" alt="The X Linez" />
          <div className="card-body p-0 pt-3">
            <h5 className="card-title" style={{color: '#a40000', fontWeight: 'bold'}}>
              Supply Chain Optimization
            </h5>
            <p className="card-text" style={{color: '#002462'}}>
              Our experts analyze and optimize your supply chain, identifying
              opportunities for efficiency and cost savings. From procurement to
              distribution, we streamline every aspect of your logistics.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

                <Service />
                <Aboutus />
                <Mycompany />
                <Contactus />
                

            </>
        )
    }
}