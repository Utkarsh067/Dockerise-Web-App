document.addEventListener('DOMContentLoaded', () => {
    const books = [
        {
            title: 'The Kite Runner',
            description: 'A coming-of-age story set in Afghanistan, exploring themes of friendship, betrayal, guilt, and redemption.',
            image: 'images/the-kite-runner.jpg', 
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/the-kite-runner-pdf-by-indianpdf.com_.pdf' 
        },
        {
            title: 'Atomic Habits',
            description: '"Atomic Habits" offers a practical guide to building good habits and breaking bad ones through small, incremental changes.',
            image: 'images/atomic-habits.jpeg', 
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/Atomic+Habits.pdf'
        },
        {
            title: 'Eat that Frog',
            description: '"Eat That Frog" emphasizes tackling your most challenging task first for a productive and fulfilling day.',
            image: 'images/eat-that-frog.jpeg', 
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/Eat-that-frog-by-brian-tracy-pdf-book.pdf' 
        },
        {
            title: 'How to win Friends and Influence people',
            description: '"Dale Carnegie`s" classic offers advice on building positive relationships and persuasion through empathy and effective communication.',
            image: 'images/how to win.jpeg', 
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/how-to-win-friends-and-influence-people.pdf' 
        },
        {
            title: 'Ikigai',
            description: '"Ikigai" by Hector Garcia and Francesc Miralles delves into the Japanese concept of finding one`s life purpose, offering insights into longevity, happiness, and the pursuit of meaningful existence through practical guidance and philosophical reflections.',
            image: 'images/ikigai.jpeg', 
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/Ikigai.pdf' 
        },
        {
            title: 'Man`s Search For a Meaning',
            description: 'Viktor Frankl explores finding purpose and meaning in life, even amidst suffering, based on his experiences in Nazi concentration camps.',
            image: 'images/man search.jpeg', 
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/Mans+Search+for+Meaning+-+Viktor+E.+Frankl+%5BWorldfreebooks.com%5D.pdf'
        },
        {
            title: 'Power of your Subconscious mind',
            description: 'Joseph Murphy`s book suggests harnessing the subconscious mind`s power for positive change and achieving your goals.',
            image: 'images/power of subconscious mind.jpeg',
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/power-subconscious-mind.pdf'
        },
        {
            title: 'Rich dad Poor dad',
            description: '"Rich Dad Poor Dad" contrasts two financial mindsets, advocating financial literacy and building wealth through assets and investing.',
            image: 'images/rich-dad-poor-dad.jpeg', 
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/Rich+Dad+Poor+Dad.pdf'
        },
        {
            title: 'Sapiens - a brief history of mankind',
            description: 'Yuval Noah Harari explores humanity`s rise from insignificant animal to dominant species through cooperation and unique cognitive abilities.',
            image: 'images/sapiens.jpeg', 
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/Sapiens-A-Brief-History-of-Humankind.pdf'
        },
        {
            title: 'The subtle art of not giving a Fu*k',
            description: 'Mark Manson`s book challenges traditional self-help by arguing that focusing on what truly matters allows for happiness and personal growth.',
            image: 'images/subtle art.jpeg', 
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/the+subtle+art+of+not+giving+a+fuck.pdf' 
        },
        {
            title: 'The 48 Laws of Power',
            description: '"The 48 Laws of Power" by Robert Greene offers ruthless tactics for navigating social hierarchies and gaining influence.',
            image: 'images/Power 48 laws.png', 
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/The-48-Laws-of-Power-Robert-Greene.pdf' 
        },
        {
            title: 'Think and Grow rich',
            description: 'Napoleon Hill`s "Think and Grow Rich" emphasizes the power of desire, belief, and persistence in achieving financial success.',
            image: 'images/think and grow rich.jpeg', 
            fileUrl: 'https://virtualebooks.s3.ap-south-1.amazonaws.com/Think-And-Grow-Rich_2011-06.pdf' 
        },
    ];

    const bookList = document.getElementById('book-list');

    let currentPage = 1

    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'swiper-slide box';

        bookItem.innerHTML = `
            <div class="icons">
                <a href="${book.fileUrl}" class="fas fa-download" download></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-eye"></a>
            </div>
            <div class="image">
                <img src="${book.image}" alt="${book.title}">
            </div>
            <div class="content">
                <h3>${book.title}</h3>
                <p>${book.description}</p>
                <a href="${book.fileUrl}" class="btn" download>Download</a>
            </div>
        `;

        bookList.appendChild(bookItem);
    });

    const swiper = new Swiper('.swiper-container', {
        navigation: {
            slidesPerView: 'auto',
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            reachEnd: function () {
                currentPage++;
                loadBooks(currentPage); 
            }
        }
    });
});
