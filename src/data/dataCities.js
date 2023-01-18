import liverpool from "../assets/liverpool.jpg";
import barcelona from "../assets/barcelona.jpg";
import london from "../assets/london.jpg";
import rio from "../assets/rio-de-janeiro.jpg";
import manchester from "../assets/manchester.jpg";

const en = "&#x1F600;";
const br = "U+1F1E7";
const es = "U+1F1EA";

export const cities = [
  {
    id: 1,
    cityName: "Rio de Janeiro",
    country: "Brazil",
    flag: br,
    photo: rio,
    url: "https://youtu.be/fA7kQn-l6T4",
    altText: "An image of Rio de Janeiro",
  },
  {
    id: 2,
    cityName: "Liverpool",
    country: "England",
    flag: en,
    photo: liverpool,
    url: "https://www.youtube.com/watch?v=b7l2fZaQmng&ab_channel=ALLin4K",
    altText: "An image of The Beatles' statue in Liverpool city",
  },
  {
    id: 3,
    cityName: "Barcelona",
    country: "Spain",
    flag: es,
    photo: barcelona,
    url: "https://youtu.be/fYgq0cT7wCg",
    altText: "An image of Barcelona city.",
  },
  {
    id: 4,
    cityName: "London",
    country: "England",
    flag: en,
    photo: london,
    url: "https://youtu.be/G5V4wBjR880",
    altText: "An image of London city.",
  },
  {
    id: 5,
    cityName: "Manchester",
    country: "England",
    flag: en,
    photo: manchester,
    url: "https://youtu.be/9wW8T6nMwvE",
    altText: "An image of Manchester city",
  },
];
