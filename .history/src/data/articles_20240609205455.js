import React from "react";

function article_1() {
	return {
		date: "12 November 2022",
		title: "The Evolution of Web Development",
		description:
			"Explore the remarkable journey of web development from static pages to dynamic, interactive applications.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Jay",
			"Jay T",
			"Jay Thomas",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Best Practices for Modern Web Development",
		description:
			"Discover essential best practices for creating efficient, secure, and user-friendly modern websites and applications.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Jay",
			"Jay T",
			"Jay Thomas",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
