import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./OpenClassrooms.png"
								alt="OpenClassrooms"
								className="work-image"
							/>
							<div className="work-title">OpenClassrooms</div>
							<div className="work-subtitle">
								Web Integrator Student
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src={`${process.env.PUBLIC_URL}/hotel.png`}
								alt="hotel"
								className="work-image"
							/>
							<div className="work-title">Hôtel</div>
							<div className="work-subtitle">Receptionist</div>
							<div className="work-duration">2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
