document.addEventListener("DOMContentLoaded", function () {
	const changeBackground = (element) => {
		const all = document.querySelectorAll('.nav-link')
		all.forEach((link) => {
			link.children[0].classList.remove('active')
		})
		element.children[0].classList.add('active')
	}
	const filePath = window.location.pathname.split('/')
	const len = filePath.length

	document.querySelectorAll('.nav-link').forEach((link) => {
		const linkUrl = link.getAttribute("href")
		const file = linkUrl.substring(linkUrl.lastIndexOf('/') + 1)
		if (file === filePath[len - 1]) {
			changeBackground(link)
		}
	})
});
