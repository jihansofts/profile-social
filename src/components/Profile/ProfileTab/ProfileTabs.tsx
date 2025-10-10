"use client";

import React from "react";
import { ProfileDataType } from "@/lib/data";

interface ProfileTabsProps {
  profileTabs: ProfileDataType["tabs"];
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({ profileTabs }) => {
  return (
    <div className="mb-6 flex sm:justify-center items-center overflow-x-auto px-4 max-w-7xl mx-auto"></div>
  );
};

export default ProfileTabs;
