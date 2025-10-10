"use client";
import Profile from "@/pages/profile-pages/profile";
import { data } from "@/lib/data";

export default function Page() {
  return (
    <main>
      <Profile data={data} />
    </main>
  );
}
