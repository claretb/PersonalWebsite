import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiApple,
	SiVisualstudiocode,
	SiPostman,
	SiWordpress,
} from "react-icons/si";
import webotsLogo from "../../Assets/webots.png";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiApple />
				<p style={{ fontSize: "24px" }}>Apple</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
				<p style={{ fontSize: "24px" }}>Visual Studio</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<img
					alt="Webots Logo"
					src={webotsLogo}
					style={{ maxWidth: "45%", transform: [{ scaleX: "-1" }] }}
				/>
				<p style={{ fontSize: "24px" }}>Webots</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostman />
				<p style={{ fontSize: "24px" }}>Postman</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiWordpress />
				<p style={{ fontSize: "24px" }}>Wordpress</p>
			</Col>
		</Row>
	);
}

export default Toolstack;
