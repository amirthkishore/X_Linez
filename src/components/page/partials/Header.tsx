import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import { AuthManager } from "../../../actions/auth/AuthManager";
//import { _logUtils } from "../../../lib/utils/_logUtils";
import { QuickLinks } from "./QuickLinks";

export let Header = () => {
	const { pathname } = useLocation();
	const [path, setPath] = useState("");

	useEffect(() => {
		//_logUtils.debug("--header update--")
		//console.log(pathname)
		//setPath(pathname)
	}, [])


	//console.log(AuthManager)

	return (

		<>



			<div className="container">
				<div className="w-50">
					<a href="" className="navbar-brand d-flex align-items-center bg-transparent">
						<h1 className="text-center">
							<img
								className="img-fluid me-3 Logo_theX"
								src="../assets/images/txllogo.png"
								alt="thexlinez logistics"
							/>
						</h1>
					</a>
				</div>

				<button
					className="navbar-toggler ml-auto"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation"
					style={{ color:"#a40000" }}
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse Navcss" id="navbarCollapse">
					<div className="navbar-nav mx-auto pe-4 py-3 py-lg-0">

						<a className="nav-item nav-link"> Home </a>
						<a className="nav-item nav-link"> About Us </a>
						<a className="nav-item nav-link"> Our Services </a>
						<a className="nav-item nav-link"> Contact Us </a>

					</div>
				</div>
			</div>
















			{/*<header className="app-header fixed-top">

			{/* header  * /}
			<div className="app-header-inner">
				<div className="container-fluid py-2">
					<div className="app-header-content">
						<div className="row justify-content-between align-items-center">
							<div className="col-auto">
								<a id="sidepanel-toggler"
									className="sidepanel-toggler d-inline-block d-xl-none"
									href="#"> <svg
										xmlns="http://www.w3.org/2000/svg"
										width={30}
										height={30}
										viewBox="0 0 30 30"
										role="img">
										<title>Menu</title>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeMiterlimit={10}
											strokeWidth={2}
											d="M4 7h22M4 15h22M4 23h22"
										/>
									</svg>
								</a>
							</div>

							<div className="col">
								<QuickLinks />
							</div>

							<div className="col-auto">
								
							</div>

							<div className="app-utilities col-auto">
								<div className="app-utility-item">
									<Link to="/b/settings/" title="Settings">
										<svg
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											className="bi bi-gear icon"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
											/>
											<path
												fillRule="evenodd"
												d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
											/>
										</svg>
									</Link>

								</div>


								<div className="app-utility-item app-user-dropdown drop-down six-step">
									<div className="dropdown-toggle btn-white">
										<img src="/assets/images/user.png" alt="user profile" />
									</div>

									<ul className="drop-down-menu">

										<li>
											<div className="Background-liner-color">
												<div className="text-center">
													<img src="/assets/images/user.png" alt="user profile" className="UserProfile-img" />
												</div>

												<div className="text-center">
													{/* <h4> Test Kishore </h4> 
													<label>{AuthManager.getLocalUser().email}</label> <br /> * /}
													<p>Company Name : My shop </p>
													

													{/* {(this.state.result.isActivated) ? "ok" : "not ok" } 
 

													<Link type="button" className="btn btn-outline-dark" to="/b/billing/subscription/"> <b>  <SubtoUpgrade /> </b> </Link>* /}

													<br /> <br />
													<Link className="btn btn-danger" to="/logout/">Logout</Link>
													<br /> <br />

												</div>

											</div>
											<hr className="dropdown-divider" />
										</li>

										{/* <li>
											<Link className="dropdown-item"
												to="/b/settings/">
												Settings
											</Link>
										</li> */}

			{/* <li>
											<li className="dropdown-item">
												HELP DOCMENTS
											</li>

											<li className="dropdown-item">
												<img src="/assets/images/user3.png" /> &nbsp; User Guide
											</li>
											<li className="dropdown-item">
												<img src="/assets/images/Developer.png" /> &nbsp; Developer Guide
											</li>
											<li className="dropdown-item">
												<img src="/assets/images/faq1.png" /> &nbsp; FAQs
											</li>
											<li className="dropdown-item">
												<img src="/assets/images/secu2.png" /> &nbsp; Best Practices for Security
											</li>
											<li className="dropdown-item">
												<img src="/assets/images/Contact.png" /> &nbsp; Contact Us
											</li>
											
										</li> * /}
									</ul>

								</div>


							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <SideBar2Fn /> * /}
		</header> */}

		</>
	)
}