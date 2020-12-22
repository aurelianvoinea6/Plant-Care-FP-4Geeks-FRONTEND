import React, { useState, useEffect, useContext, Fragment } from "react";
import "../../styles/userview.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ModalNewPlant } from "../component/addNewPlant.jsx";
import { ModalRoomInputs } from "../component/addNewRoom.jsx";
import { ButtonRoomGenerator } from "../component/roomGeneratorMap.jsx";
import { RoomGeneratorPlants } from "../component/PlantsRoomGenerator.jsx";
import { Link } from "react-router-dom";

export const Userview = () => {
	return (
		<Fragment>
			<div className="room-panel">
				<div className="panel">
					<Link to="/panelprofile">
						Ver Perfil <i className="mt-4 fas fa-user-circle fa-2x " />
					</Link>

					<p className="nameList">Ubicaciones</p>
					<ButtonRoomGenerator />
				</div>
			</div>
			<div className="container-of-addplant">
				<ModalRoomInputs />
				<ModalNewPlant />
			</div>
			<div className="mt-2 plants-panel">
				<Col>
					<RoomGeneratorPlants />
				</Col>
			</div>
		</Fragment>
	);
};
