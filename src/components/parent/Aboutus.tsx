import { Component } from "react";
import { Mycompany } from "./Mycompany";

//main component
export class Aboutus extends Component {
    render() {
        return (
            <>
                <div className="mt-5 pt-5 mb-5 pb-5">
                    <div className="container">
                        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center pt-5 pb-5">
                            <div className="col-12 col-lg-6" data-aos="fade-down">
                                <div className="row justify-content-xl-center">
                                    <div className="col-12 col-xl-11">
                                        {/* <h1 className="mb-5" style="color: #860100">About Us</h1> */}
                                        <h3 className="mb-4 display-6" style={{ color: "#a40000" }}>About Us</h3>

                                        <p className="text-secondary p-0">
                                            We are X linez, a shipping company based in Nagercoil, Tamil
                                            Nadu, India. With a strong commitment to reliable and efficient
                                            shipping services, we strive to meet the needs of our clients with
                                            professionalism and dedication,
                                            <br />
                                            <br />
                                            Our team is dedicated to providing top-notch shipping solutions,
                                            ensuring safe and timely delivery of goods.
                                            <br />
                                            <br />
                                            We take pride in our strong network and expertise in the industry,
                                            making us a trusted partner for all your shipping needs. Whether
                                            it's transportation, warehousing, or supply chain management,
                                            <br />
                                            <br />
                                            You can trust X Linez to handle it with precision and care
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6" data-aos="fade-down">
                                <img
                                    className="img-fluid rounded"
                                    loading="lazy"
                                    src="../../assets/images/company.jpg"
                                    alt="logistics meaning"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}