document.addEventListener("DOMContentLoaded", function() {
  const navbar = `
	<section id="navigation">
    <div class="navigation-container">
      <div class="navigation-bar">
        <div class="logo">
          <img
            src="./images/logo.png"
            alt="Nazmus Shakib"
            title="Nazmus Shakib"
          />
        </div>
        <nav class="nav-bar">
          <a class="nav-link" href="./index.html">
            <div class="nav-link-box">About</div>
          </a>
          <a class="nav-link" href="./works.html">
            <div class="nav-link-box">Works</div>
          </a>
					<a class="nav-link" href="./education.html">
            <div class="nav-link-box">Education</div>
          </a>
					<a class="nav-link" href="./works.html">
            <div class="nav-link-box">Photos</div>
          </a>
        </nav>
      </div>
    </div>
  </section>
	<section id="contact">
		<a href="mailto:nazshak6@gmail.com" title="Gmail">
			<div class="contact-icon gmail">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					width="42"
					height="42"
				>
					<path
						d="M14.5 2h-13A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm-1.766 1L8 6.738 3.266 3h9.468zM2 13V4.646l6 4.615 6-4.616V13H2z"
					></path>
				</svg>
			</div>
		</a>
		<a href="https://github.com/null0ptr" title="Github" target="_blank">
			<div class="contact-icon">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					width="42"
					height="42"
					id="github"
				>
					<path
						d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"
					></path>
				</svg>
			</div>
		</a>
		<a
			href="https://www.linkedin.com/in/nazmus-shakib-316332228/"
			title="LinkedIn"
			target="_blank"
		>
			<div class="contact-icon">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="42"
					height="42"
					viewBox="7.025 7.025 497.951 497.95"
					id="linkedin"
				>
					<linearGradient
						id="a"
						x1="-974.482"
						x2="-622.378"
						y1="1306.773"
						y2="1658.877"
						gradientTransform="translate(1054.43 -1226.825)"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0" stop-color="#2489be"></stop>
						<stop offset="1" stop-color="#0575b3"></stop>
					</linearGradient>
					<path
						d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
					></path>
				</svg>
			</div>
		</a>
	</section>
	`;

  document.body.insertAdjacentHTML("afterbegin", navbar);
});
