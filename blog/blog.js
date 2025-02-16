const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
]

// Get the element where the article is displayed
const outputElement = document.querySelector("#articles");

// Loop through each article
articles.forEach((item) => {
	// create a new article
	const newArticle = document.createElement("article");
	newArticle.idList
	// add needed classes
	// newArticle.classList.add("info")
	// newArticle.classList.add("date")
	// newArticle.classList.add("age")
	// newArticle.classList.add("genre")
	// newArticle.classList.add("rating")
	// newArticle.classList.add("review")
	// newArticle.classList.add("bookTitle")
	// newArticle.classList.add("description")

	const articleHTML = `
		<section class="article">
			<section class="info">
				<p class="date">${item.date}</p>
				<p class="age">${item.ages}</p>
				<p class="genre">${item.genre}</p>
				<p class="rating">${item.stars}</p>
			</section>
			<section class="review">
				<h3 class="bookTitle">${item.title}</h3>
				<img src="${item.imgSrc}" alt="${item.imgAlt}">
				<p class="description">${item.description}</p>
			</section>
		</section>
	`;

	// set the innerHTML of the new article to what was just made
	newArticle.innerHTML = articleHTML;

	// add the new article to the output element
	outputElement.appendChild(newArticle);
})