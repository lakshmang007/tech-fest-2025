// Script to test if images are loading
const images = [
    '/images/rapid_typing.jpg',
    '/images/photography.jpg',
    '/images/tech-quiz.jpg',
    '/images/freefire.jpg',
    '/images/dumb-charades.jpg',
    '/images/videography.jpg',
    '/images/treasure-hunt.jpg'
];

function testImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({ url, status: 'success' });
        img.onerror = () => resolve({ url, status: 'error' });
        img.src = url;
    });
}

async function checkImages() {
    const results = await Promise.all(images.map(testImage));
    console.log('Image Loading Results:');
    results.forEach(({ url, status }) => {
        console.log(`${url}: ${status}`);
    });
}

checkImages();