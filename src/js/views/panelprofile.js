import React from "react";
import "../../styles/panelprofile.scss";
import "../../styles/registermodal.scss";
import Row from "react-bootstrap/Row";
import { Registermodal } from "../component/RegisterModal";

export const Panelprofile = () => {
	return (
		<form>
			<div className="form-group">
				<label htmlFor="exampleInputUsername">Username</label>
				<input className="form-control" id="exampleInputUsername" type="text" placeholder="Username" />
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Email address</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter email"
				/>
				<small id="emailHelp" className="form-text text-muted" />
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Password</label>
				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputLocation">Location</label>
				<input className="form-control" id="exampleInputLocation" type="text" placeholder="Location" />
			</div>

			<button type="submit" className="btn btn-success">
				Save
			</button>
		</form>
	);
};
