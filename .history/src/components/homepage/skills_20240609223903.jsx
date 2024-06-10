// Skills.js
import React from "react";
import "./Skills.css"; // Assurez-vous d'importer le fichier CSS

function Skills() {
	return (
		<div className="skill-mf">
			<p className="title-s">Skills</p>
			<span>HTML</span> <span className="pull-right">85%</span>
			<div className="progress">
				<div
					className="progress-bar"
					role="progressbar"
					style={{ width: "85%" }}
					aria-valuenow="85"
					aria-valuemin="0"
					aria-valuemax="100"
				></div>
			</div>
			<span>CSS3</span> <span className="pull-right">75%</span>
			<div className="progress">
				<div
					className="progress-bar"
					role="progressbar"
					style={{ width: "75%" }}
					aria-valuenow="75"
					aria-valuemin="0"
					aria-valuemax="100"
				></div>
			</div>
			<span>PHP</span> <span className="pull-right">50%</span>
			<div className="progress">
				<div
					className="progress-bar"
					role="progressbar"
					style={{ width: "50%" }}
					aria-valuenow="50"
					aria-valuemin="0"
					aria-valuemax="100"
				></div>
			</div>
			<span>JavaScript</span> <span className="pull-right">90%</span>
			<div className="progress">
				<div
					className="progress-bar"
					role="progressbar"
					style={{ width: "90%" }}
					aria-valuenow="90"
					aria-valuemin="0"
					aria-valuemax="100"
				></div>
			</div>
		</div>
	);
}

export default Skills;
