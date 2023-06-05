import React from "react";
import Card from "react-bootstrap/Card";
import { BiPencil, BiWalk, BiFootball, BiHeart } from "react-icons/bi";
import tsLogo from "../../Assets/tsLogo.svg";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "left" }}>
						Hi, I am{" "}
						<span className="purple">Talha Enes Ayranci</span>.
						<br />
						<br />I did my master's degree in Robotics and
						Artificial Intelligence at the University of Glasgow and
						I am currently a PhD candidate.
						<br />
						<br />
						My research focuses on using smartphones and robotics
						for computer science education - especially for machine
						learning.
						<br />
						<br />
						Apart from coding, there are some other activities that
						I like to do!
					</p>

					<ul>
						<li className="about-activity">
							<BiPencil
								className="purple"
								style={{
									marginBottom: "3px",
									fontSize: "150%",
								}}
							/>{" "}
							Writing Blogs
						</li>
						<li className="about-activity">
							<BiFootball
								className="purple"
								style={{
									marginBottom: "3px",
									fontSize: "150%",
								}}
							/>{" "}
							Football (I am a passionate Trabzonspor fan!{" "}
							<img
								alt="Trabzonspor Logo"
								src={tsLogo}
								style={{
									maxWidth: "24px",
									paddingBottom: "1%",
								}}
							/>
							)
						</li>
						<li className="about-activity">
							<BiWalk
								className="purple"
								style={{
									marginBottom: "3px",
									fontSize: "150%",
								}}
							/>{" "}
							Travelling
						</li>
					</ul>

					<p style={{ textAlign: "left" }}>
						<br />
						Married.{" "}
						<BiHeart
							className="purple"
							style={{ marginBottom: "3px", fontSize: "150%" }}
						/>
					</p>

					<p style={{ color: "rgb(155 126 172)" }}>
						<i>
							{" "}
							<b>
								"One awake enough to awaken all sleepers!"
							</b>{" "}
						</i>
					</p>
					<footer className="blockquote-footer">
						<b>Malcolm X</b>
					</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
