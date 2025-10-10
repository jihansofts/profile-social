"use client";
import React from "react";
import Image from "next/image";

const gallery = [
  {
    id: 1,
    image: "/images/photo1.png",
  },
  {
    id: 2,
    image: "/images/photo2.png",
  },
  {
    id: 3,
    image: "/images/photo3.png",
  },
  {
    id: 4,
    image: "/images/photo4.png",
  },
  {
    id: 5,
    image: "/images/photo5.png",
  },
  {
    id: 6,
    image: "/images/photo6.png",
  },
  {
    id: 7,
    image: "/images/photo7.png",
  },
  {
    id: 8,
    image: "/images/photo8.png",
  },
];
export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {gallery.map((image) => (
        <Image
          key={image.id}
          src={image.image}
          alt={`Image ${image.id}`}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      ))}
    </div>
  );
}
