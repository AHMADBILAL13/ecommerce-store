"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../../../sanity/lib/image";
import { getProducts } from "@/lib/mock";
import { useEffect, useState } from "react";

export default function SwipperSlidder() {
  const [data, setData] = useState([
    {
      price: "",
      name: "",
      slug: "",
      image:"",
      // titleTeam: "",
      // TeamMembers: [{ memberName: "", position: "", memberImage: "" }],
    },
  ]);

  useEffect(() => {
    getData(); // Default category set to "Residential"
  }, []);

  const getData = async () => {
    const products = await getProducts();
    setData(products);

    console.log("products", products);
  };

  return (
    <>
      <Swiper
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={10}
      >
        {data.map((p, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center px-5 py-10 items-center">
              <div className="flex flex-col justify-center items-start h-[400px] mx-10 w-full hover:scale-110 ease-in duration-300 gap-3">
                <Link href={`products/${p.slug}`}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={400}
                    height={400}
                  />
                  <p className="text-base font-bold text-center my-3">
                    {p.name}
                  </p>
                  <p className="text-base font-bold text-center">${p.price}</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
