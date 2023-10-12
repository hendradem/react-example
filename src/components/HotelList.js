import React, { useState, useEffect } from "react";
import HotelCard from "./HotelCard";

const HotelList = () => {
  const [hotelsMasterData, setHotelsMasterData] = useState([
    {
      id: 0,
      city: "bandung",
      hotelName: "Aryaduta Bandung",
      address: "Bandung Wetan, Bandung",
      review: 1600,
      star: 4,
      price: 751000,
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/11/05/4599b0a5-d9a6-4ec9-9830-61e757ec071f-1604536643153-12a81af97396493f75513e769aa8f3db.jpg",
    },
    {
      id: 1,
      city: "bandung",
      hotelName: "Hemangini Hotel",
      address: "Cidadap, Bandung",
      review: 1000,
      star: 4,
      price: 542000,
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/02/14/c6fdf209-6bb5-4b04-85e9-8d91ba7e3185-1644833121932-b760676a86c23c64a44238a8e41c4479.jpg",
    },
    {
      id: 2,
      city: "bandung",
      hotelName: "Imah Seniman Resort",
      address: "Lembang, Bandung",
      review: 800,
      star: 4,
      price: 595000,
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/06/13/f0b27b88-553d-42e5-9536-404d0022de83-1623582029311-e850addd35a2e01d122b22005fd1704c.jpg",
    },
    {
      id: 4,
      city: "bandung",
      hotelName: "The Papandayan",
      address: "Lengkong, Bandung",
      review: 1700,
      star: 4,
      price: 851000,
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/04/13/7e710b0a-f795-4395-a0a8-146328b5fb2a-1649844339272-88e8b5510c2b750a1762854890afd7f7.jpg",
    },
    {
      id: 5,
      city: "bandung",
      hotelName: "Hotel Daily Inn",
      address: "Asia Afrika, Bandung",
      review: 1500,
      star: 4,
      price: 300000,
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/05/11/278a85d8-3d5b-40f7-85f1-5482f6e3e56f-1620735313581-dd6ce09dd2859eff9ccb0bd2886ca3bb.jpg",
    },

    {
      id: 0,
      city: "jakarta",
      hotelName: "Yellow Bee Tanah Abang",
      address: "Tanah Abang, Jakpus",
      review: 1300,
      star: 4.4,
      price: 385000,
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/08/927230fc-aece-4416-9f33-10429eda4a05-1615175711441-63b956a3a462cdf37a2725e5358bbaa3.jpg",
    },
    {
      id: 1,
      city: "jakarta",
      hotelName: "Hotel Rivoli Senen",
      address: "Senen, Jakarta Pusat",
      review: 1400,
      star: 4.1,
      price: 446000,
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/29/6e2a82fe-4a46-47e9-aabd-fb5ebee52e79-1603908425175-5d91c737addcd55308b9a6c498fc5337.jpg",
    },
    {
      id: 2,
      city: "jakarta",
      hotelName: "Grand Dafam Ancol",
      address: "Ancol, Jakarta Utara",
      review: 29,
      star: 4.4,
      price: 837000,
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/11/06/bebf69b2-a9e4-469b-b597-efc274dc7c88-1604649588212-d4875a8468e90269040548957d2e8693.jpg",
    },
    {
      id: 4,
      city: "jakarta",
      hotelName: "Hotel Des Indes Menteng",
      address: "Menteng, Jakarta Pusat",
      review: 1500,
      star: 4.5,
      price: 533000,
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/02/28/23ff590c-2577-4fbe-baeb-a19d416027d2-1614495316450-a339ff7861e4e010c936e0e34ae44e8d.jpg",
    },
    {
      id: 5,
      city: "jakarta",
      hotelName: "N1 Hotel Tanah Abang",
      address: "Tanah Abang, Jakpus",
      review: 3.8,
      star: 2,
      price: 199000,
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/11/08/e0635760-6671-44bd-a08d-3c3f943a32e8-1604768723485-603fbaa25038535a8013419d22dd991d.jpg",
    },
  ]);
  const [hotelsData, setHotelsData] = useState([]);
  const [city, setCity] = useState(["all", "bandung", "jakarta"]);
  const [selectedCity, setSelectedCity] = useState("all");

  const filterData = (city) => {
    setSelectedCity(city);

    if (city == "all") {
      setHotelsData(hotelsMasterData);
    } else {
      let filteredHotels = hotelsMasterData.filter((hotels) => {
        return hotels.city === city;
      });

      setHotelsData(filteredHotels);
    }
  };

  useEffect(() => {
    setHotelsData(hotelsMasterData);
  }, []);

  return (
    <>
      <div className="flex gap-2">
        {city.map((item) => {
          return (
            <button
              key={item}
              className={`filter-button ${
                selectedCity == item ? "selected-filter-button" : ""
              }`}
              onClick={() => {
                filterData(item);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="w-full grid grid-cols-5 gap-4">
        {hotelsData.map((item) => {
          return <HotelCard key={item.hotelName} data={item} />;
        })}
      </div>
      <div className="mt-5 w-full flex justify-center">
        <button className="bg-blue-50 text-blue-500 py-2 px-20 text-[15px] font-semibold rounded-md hover:bg-blue-100 transition-all">
          Lihat semua
        </button>
      </div>
    </>
  );
};

export default HotelList;
