import Image from "next/image";
import React from "react";
import { ProfileDataType } from "@/lib/data";
import "./Cover.css";
interface ProfileHeaderProps {
  image: ProfileDataType;
}
export default function Cover({ image }: ProfileHeaderProps) {
  return (
    <div className="profile-banner">
      <Image
        src={image.backgroundImage}
        alt="Background"
        fill
        priority
        sizes="100vw"
        className="banner-image"
      />
    </div>
  );
}
