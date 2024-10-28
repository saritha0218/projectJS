let a = [{
    "id": 1,
    "image": "./p1.webp",
    "title": "United States",
    "description": "Explore the diverse landscapes and vibrant cities of the United States. From the bustling streets of New York City to the breathtaking beauty of the Grand Canyon, there's something for everyone in the USA.",
    "rating": 5,
    "price": "$799",
  },
  {
    "id": 2,
    "image": "./p2.jpg",
    "title": "China",
    "description": "Experience the rich history and culture of China. Visit iconic landmarks such as the Great Wall and the Forbidden City, Imperial Palace, The Summer Palace, and sample delicious Chinese cuisine.",
    "rating": 4,
    "price": "$399",
  },
  {
    "id": 3,
    "image": "./p3.webp",
    "title": "Greece",
    "description": "Immerse yourself in the ancient history and stunning landscapes of Greece. Explore the ruins of Athens, relax on the beautiful beaches of the Greek Islands, and indulge in delicious Mediterranean cuisine.",
    "rating": 3,
    "price": "$499",
  },
  {
    "id": 4,
    "image": "./p4.jpg",
    "title": "Italy",
    "description": "Discover the art, culture, and cuisine of Italy. Visit historic cities such as Rome, Florence, and Venice, and sample world-renowned Italian dishes like pasta and gelato.",
    "rating": 5,
    "price": "$599",
  },
  {
    "id": 5,
    "image": "./p5.jpg",
    "title": "France",
    "description": "Experience the romance and charm of France. Explore the iconic landmarks of Paris, such as the Eiffel Tower and the Louvre, and indulge in French cuisine and wine.",
    "rating": 4,
    "price": "$799",
  },
  {
    "id": 6,
    "image": "./p6.jpg",
    "title": "Jordan",
    "description": "Explore the ancient wonders of Jordan. Visit the rock-cut city of Petra, float in the Dead Sea, explore the desert landscapes of Wadi Rum, Ajloun Castle, Karak Castle and Dana Nature Reserve.",
    "rating": 3,
    "price": "$699",
  },
  {
    "id": 7,
    "image": "./p7.jpg",
    "title": "Mexico",
    "description": "Experience the vibrant culture and rich history of Mexico. Visit ancient Mayan ruins, relax on the beautiful beaches of Cancun, and sample delicious Mexican cuisine.",
    "rating": 5,
    "price": "$799",
  },
  {
    "id": 8,
    "image": "./p8.jpg",
    "title": "Spain",
    "description": "Discover the vibrant culture and stunning architecture of Spain. Visit historic cities such as Barcelona and Madrid, explore beautiful beaches, and enjoy delicious Spanish tapas.",
    "rating": 4,
    "price": "$599",
  }
];
    let section5 = document.getElementById("sec5");

    function generateStars(rating) {
  let starIcons = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starIcons += '★'; 
    } else {
      starIcons += '☆';
    }
  }
  return starIcons;
}

    for(let i of a){
      let divs = document.createElement("div")
      divs.style.width="330px";
      divs.style.height="370px";
      divs.style.margin="15px 22px";
      divs.style.overflow="scroll";
      divs.style.scrollbarWidth="none";
      divs.style.border="2px solid black";
      divs.style.borderRadius="20px";
      divs.style.paddingBottom="30px";
      divs.style.display = 'flex';
      divs.style.flexDirection="column";

      var div1 = document.createElement("div")
      div1.setAttribute("id","div1");
      div1.style.height="200px";
      div1.style.backgroundColor="rgb(22, 22, 88)";

      var img = document.createElement("img");
      img.style.width= "330px";
      img.style.height="250px";
      img.style.borderTopLeftRadius="20px";
      img.style.borderTopRightRadius="20px";
      img.setAttribute("src", i["image"]);

      var title = document.createElement("h4");
      title.innerHTML=i["title"];

      var description = document.createElement("p");
      description.innerHTML=i["description"];

      var rating = document.createElement("p");
      rating.innerHTML = generateStars(i["rating"]);

      var amount = document.createElement("p");
      amount.innerHTML="Price:" + i["price"];

      var anchor =  document.createElement("a")
      anchor.setAttribute("href","#section6");
      anchor.innerHTML = "Book Now";
      anchor.style.textDecoration="none";

      var button =  document.createElement("button");
      button.style.fontWeight = "bold";
      button.appendChild(anchor)

      div1.append(title,description,rating,amount,button)

      divs.append(img,div1)

      section5.appendChild(divs)
    }    