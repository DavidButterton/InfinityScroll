//unsplash AIP
const count = 10;
const apiKey = `5KHmFtedwbgQTmcCv3EDNSU2Px0WZBcEq8iUcspGlik`;
const unsplashAPIUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//fetch function to retrieve photos
async function getPhotos() {
    try {
        const response = await fetch(unsplashAPIUrl);
        const data = await response.json();
        console.log(data)
    } catch(error) {
        //error response here
    }
}

getPhotos();