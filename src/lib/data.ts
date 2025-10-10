import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { MouseEventHandler } from "react";

export interface ProfileDataType {
  onCall: MouseEventHandler<HTMLButtonElement> | undefined;
  onMessage: MouseEventHandler<HTMLButtonElement> | undefined;
  businessType: any;
  logo: string | StaticImport;
  id: number;
  name: string;
  category: string;
  location: string;
  postedAds: number;
  verifiedStatus: string;
  rating: number;
  followers: string;
  following: number;
  profileImage: string;
  backgroundImage: string;
  onFollow: MouseEventHandler<HTMLButtonElement> | undefined;
  follow: boolean;
  details?: {
    content: string;
    tags: {
      mainTargetAudience: string[];
      activities: string[];
    };
  };

  tabs: Array<{
    id: string;
    label: string;
    title?: string;
    details?: Array<{
      content: string;
      tags: {
        mainTargetAudience: string[];
        activities: string[];
      };
    }>;
    images?: string[];
  }>;

  actions: {
    follow: boolean;
    message: boolean;
    call: boolean;
  };
}

export const data: ProfileDataType[] = [
  {
    id: 1,
    name: "UAB 'HUNTERS'",
    category: "Business",
    location: "Vilnius",
    postedAds: 2,
    verifiedStatus: "Verified Gold Member",
    rating: 4.5,
    followers: "1.2K",
    following: 150,
    profileImage: "/images/profile.png",
    backgroundImage: "/images/topbanner.png",
    onFollow: undefined,
    follow: false,
    tabs: [
      {
        id: "about",
        label: "About",
        title: "Description",
        details: [
          {
            content:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their",
            tags: {
              mainTargetAudience: ["Hunters"],
              activities: ["Retail", "Wholesale", "Retail"],
            },
          },
        ],
      },
      {
        id: "photos",
        label: "Photos",
        images: [
          "/images/photo1.png",
          "/images/photo2.png",
          "/images/photo3.png",
          "/images/photo4.png",
          "/images/photo5.png",
          "/images/photo6.png",
          "/images/photo7.png",
          "/images/photo8.png",
        ],
      },
    ],
    actions: {
      follow: true,
      message: true,
      call: true,
    },
    onCall: undefined,
    onMessage: undefined,
    businessType: undefined,
    logo: "/images/hunter-logo.png",
  },
];
