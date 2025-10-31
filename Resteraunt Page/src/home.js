//import images
import burger from "./assets/burger.jpg";
import chicken from "./assets/chicken.jpg";
import fries from "./assets/fries.jpg";
import pizza from "./assets/pizza.jpg";
import hero from "./assets/heroImage.jpg";

// create parent elements
const homeContent = document.createElement("div");
const heroImageContainer = document.createElement("div");

//home content text
const homeContentText = document.createElement("div");
const h4 = document.createElement("h4");
const h2 = document.createElement("h2");
const p = document.createElement("p");

// home content images
const homeContentImages = document.createElement("div");
const image1 = document.createElement("img");
const image2 = document.createElement("img");
const image3 = document.createElement("img");
const image4 = document.createElement("img");

//hero image
const heroImage = document.createElement("img");

//assign ids or classes
homeContent.className = "homeContent";
heroImageContainer.className = "heroImageContainer";
homeContentText.id = "homeContentText";
homeContentImages.id = "homeContentImages";
heroImage.id = "heroImage"

//assign content text
h4.innerText = "THE ULTIMATE";
h2.innerText = "Burger Club";
p.innerText = "Savor the Flavor, Join the Club!";

//assign content img src
image1.src = burger;
image2.src = chicken;
image3.src = fries;
image4.src = pizza;

//assign hero image src
heroImage.src = hero;

//append child
homeContentText.append(h4, h2, p);
homeContentImages.append(image1, image2, image3, image4);

//event listener
const childContentImages = homeContentImages.childNodes;
childContentImages.forEach((image) => {
  image.addEventListener("click", () => {
    console.log(image.getAttribute("src"));
    const imageSrc = image.getAttribute("src");
    heroImage.src = imageSrc;
  });
});

//append parents
heroImageContainer.append(heroImage);
homeContent.append(homeContentText, homeContentImages);

//export
export { homeContent, heroImageContainer };

