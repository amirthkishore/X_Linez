import React, { Component, ReactNode } from "react";
import { Link } from "react-router-dom";

export class QuickLinks extends Component {
	render(): ReactNode {
		return (
			<div>
				<div className="btn-group ms-3">
					<button type="button" className="btn btn-outline-success dropdown-toggle first-step" data-bs-toggle="dropdown">
						Create New
					</button>

					<div className="dropdown-menu quick-box-context shadow">
						<QuickBox />
					</div>
				</div>
			</div>
		)
	}
}




let QuickBox = () => {
	const ListItem = (props: { title: string, iconClass: string, path: string }) => {
		return (
			<li>
				<Link to={props.path}>
					<i className={`${props.iconClass} me-3`}></i>
					{props.title}
				</Link>
			</li>
		)
	}


	return (
		<div className="quick-box p-4">

			<h6 className="h">Sales</h6>

			<div className="row">
				<div className="col">
					<ul className="ql">
						<ListItem
							title="Invoice"
							iconClass="fa fa-leaf"
							path="/b/statement/invoice/new"
						/>

						<ListItem
							title="Estimate"
							iconClass="fa fa-file"
							path="/b/statement/estimate/new"
						/>
					</ul>

				</div>
				<div className="col">
					<ul className="ql">
						<ListItem
							title="Customer"
							iconClass="fa fa-user-plus"
							path="/b/party/client/new"
						/>
					</ul>

				</div>
			</div>

			<hr />

			<h6 className="h">Purchase</h6>
			<div className="row">
				<div className="col">
					<ul className="ql">
						<ul className="ql">
							<ListItem
								title="Purchase Order"
								iconClass="fa fa-file-lines"
								path="/b/statement/purchase_order/new"
							/>

							<ListItem
								title="Purchase record"
								iconClass="fa fa-file-lines"
								path="/b/statement/purchase/new"
							/>
						</ul>
					</ul>

				</div>

				<div className="col">
					<ul className="ql">
						<ListItem
							title="Supplier"
							iconClass="fa fa-user-tag"
							path="/b/party/supplier/new"
						/>

					</ul>
				</div>
			</div>


			<hr />
			<div className="row">
				<div className="col">
					<ul className="ql">

						<ListItem
							title="My Items"
							iconClass="fa fa-cart-shopping"
							path="/b/items"
						/>
					</ul>
				</div>
			</div>

		</div>
	)
}


