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
					<div className="paragraph">
						Introduction Web development has seen remarkable
						transformations since the early days of the internet.
						What started as simple static websites has evolved into
						dynamic, interactive web applications, driven by
						technological advancements, changing user behaviors, and
						the need for improved performance and security. Early
						Days of Web Development In the 1990s, websites were
						primarily static, created using basic HTML and CSS.
						These early websites were simple, text-based, and
						offered limited interactivity. The primary goal was to
						deliver content in the most straightforward manner
						possible. The Rise of Dynamic Content The late 1990s and
						early 2000s brought server-side scripting languages like
						PHP, ASP, and JSP, which revolutionized web development.
						These technologies enabled the creation of dynamic
						websites capable of interacting with databases and
						delivering personalized content. This period also saw
						the rise of content management systems (CMS) such as
						WordPress, Joomla, and Drupal, making it easier for
						non-developers to manage website content. The JavaScript
						Revolution Initially introduced as a simple scripting
						language for adding interactivity to web pages,
						JavaScript has become one of the most critical
						technologies in web development. The advent of AJAX
						(Asynchronous JavaScript and XML) allowed web pages to
						update asynchronously, leading to more dynamic and
						responsive user experiences. Frameworks and libraries
						like jQuery, AngularJS, React, and Vue.js have further
						expanded the possibilities of JavaScript. Mobile-First
						and Responsive Design With the rise of smartphones and
						tablets, web developers had to ensure their websites
						worked seamlessly across various devices. Responsive web
						design, which emerged around 2010, allows websites to
						adapt their layout based on the screen size and
						orientation of the device, ensuring a consistent user
						experience across desktops, laptops, tablets, and
						smartphones. Modern Web Development Today, web
						development is a complex and multifaceted field.
						Developers have access to a wide range of tools and
						frameworks that streamline the development process and
						enhance performance. Modern web applications leverage
						technologies like single-page applications (SPAs),
						progressive web apps (PWAs), and serverless architecture
						to deliver fast, reliable, and engaging user
						experiences. Conclusion The evolution of web development
						has been driven by the relentless pursuit of better
						performance, improved user experience, and enhanced
						security. As technology continues to advance, the future
						of web development promises even more exciting
						possibilities, from integrating artificial intelligence
						and machine learning to creating immersive virtual and
						augmented reality experiences.
					</div>
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
