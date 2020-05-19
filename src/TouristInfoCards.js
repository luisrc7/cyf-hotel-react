import React from "react";
const cities = [
  {
    name: "Glasgow",
    href: "https://peoplemakeglasgow.com",
    img:
      "https://img2.pngio.com/glasgow-bridge-university-opera-house-city-hall-building-sky-glasgow-png-512_512.png"
  },
  {
    name: "Manchester",
    href: "https://visitmanchester.com",
    img:
      "https://images.vexels.com/media/users/3/149925/isolated/preview/5759966e1dbb069105e879cbece54bbb-manchester-skyline-silhouette-by-vexels.png"
  },
  {
    name: "London",
    href: "https://visitlondon.com",
    img: "https://pngimage.net/wp-content/uploads/2018/06/london-png-2.png"
  }
];

//console.log(cities)

const TouristInfoCards = () => (
  <div>
    {cities.map((city, index) => {
      return (
        <div key={index.toString()} className="card">
          <img
            src={city.img}
            className="card-img-top"
            alt={city.name.toString()}
          />
          <div className="card-body">
            <a
              href={city.href}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go {city.name}
            </a>
          </div>
        </div>
      );
    })}
  </div>
);

export default TouristInfoCards;
