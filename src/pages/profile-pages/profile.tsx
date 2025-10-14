"use client";

import DescriptionSection from "@/components/Profile/Description/DescriptionSection";
import ProfileHeader from "@/components/Profile/ProfileHeader/ProfileHeader";
import TagsSection from "@/components/Profile/ProfileTags/TagsSection";
import React from "react";
import { ProfileDataType } from "@/lib/data";
import { Tabs, Row, Col, Image } from "antd";
import "./profile.css";
import Cover from "@/components/Profile/Cover/Cover";

interface ProfileProps {
  data: ProfileDataType[];
}

export default function Profile({ data = [] }: ProfileProps) {
  if (!data || data.length === 0) {
    return (
      <div className="full-profile-page">
        <div className="profile-container">
          <p>No profile data available</p>
        </div>
      </div>
    );
  }

  const profile = data[0];

  const aboutTab = profile?.tabs?.find((tab) => tab.id === "about");
  const photosTab = profile?.tabs?.find((tab) => tab.id === "photos");

  const aboutDetails = aboutTab?.details?.[0];
  const title = aboutTab?.title || "About";
  const content = aboutDetails?.content || "No details provided.";
  const mainTargetAudience = aboutDetails?.tags?.mainTargetAudience || [];
  const activities = aboutDetails?.tags?.activities || [];

  const renderPhotos = () => {
    if (!photosTab?.images?.length) {
      return <p className="no-photos">No photos available.</p>;
    }

    return (
      <Image.PreviewGroup>
        <Row gutter={[16, 16]}>
          {photosTab.images.map((src, index) => (
            <Col xs={12} sm={12} md={8} lg={6} key={index}>
              <div className="image-grouppreview">
                <Image
                  src={src}
                  alt={`Photo ${index + 1}`}
                  width="100%"
                  height={200}
                  className="image-group"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Image.PreviewGroup>
    );
  };

  const notFoundContent = () => {
    return (
      <div className="not-found-content">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui amet
          dignissimos impedit? Sapiente minus officia praesentium molestias
          saepe est ea.
        </p>
      </div>
    );
  };

  const items = [
    {
      key: "about",
      label: "About",
      children: (
        <div className="about-content">
          <DescriptionSection title={title} content={content} />
          <div className="tags-section">
            <h2 className="tags-title">Tags</h2>
            <div className="tags-list">
              {mainTargetAudience.length > 0 && (
                <TagsSection
                  category="Main Target Audience"
                  tags={mainTargetAudience}
                />
              )}
              {activities.length > 0 && (
                <TagsSection category="Activities" tags={activities} />
              )}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "photos",
      label: "Photos",
      children: <div className="photos-tab">{renderPhotos()}</div>,
    },
    {
      key: "listing",
      label: "Listings",
      children: <div className="not-found">{notFoundContent()}</div>,
    },
    {
      key: "special-offers",
      label: "Special Offers",
      children: <div className="not-found">{notFoundContent()}</div>,
    },
    {
      key: "ads",
      label: "Ads",
      children: <div className="not-found">{notFoundContent()}</div>,
    },
    {
      key: "more",
      label: "More",
      children: <div className="not-found">{notFoundContent()}</div>,
    },
  ];

  return (
    <div className="full-profile-page">
      <Cover image={profile} />
      <div className="profile-container">
        <ProfileHeader data={profile} />
        <Tabs
          size="large"
          defaultActiveKey="about"
          items={items}
          className="profile-tabs red-tab"
          tabBarStyle={{
            fontWeight: "700",
            fontSize: "18px",
            textTransform: "capitalize",
          }}
        />
      </div>
    </div>
  );
}
