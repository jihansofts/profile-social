"use client";
import React from "react";
import { Avatar, Button, Tooltip, Badge, Row, Col } from "antd";
import { MessageOutlined, PhoneOutlined } from "@ant-design/icons";
import Image from "next/image";

import "./ProfileHeader.css";

import { ProfileDataType } from "@/lib/data";

interface ProfileHeaderProps {
  data: ProfileDataType;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ data }) => {
  return (
    <div className="profile-header">
      {/* Banner Image */}
      <div className="profile-banner">
        <Image
          src={data.backgroundImage}
          alt="Background"
          fill
          priority
          className="banner-image"
        />
      </div>

      <div className="profile-content">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={14} lg={16}>
            <div className="left-section">
              <div className="avatar-container">
                <Avatar
                  className="responsive-avatar"
                  src={
                    <Image
                      src={data.profileImage}
                      alt="Profile"
                      fill
                      className="avatar-img"
                    />
                  }
                />
                <div className="active-status">
                  <Image
                    src="/images/active.svg"
                    alt="Active"
                    width={30}
                    height={30}
                  />
                </div>
              </div>

              <div className="info-section">
                <h1 className="profile-name">{data.name}</h1>

                {data.category && (
                  <p className="profile-meta">{data.category}</p>
                )}
                {data.location && (
                  <p className="profile-meta">
                    <span>Location: </span> {data.location}
                  </p>
                )}
                {data.postedAds && (
                  <p className="profile-meta">Posted Ads: {data.postedAds}</p>
                )}

                <Badge
                  count={
                    <span className="verified-text">{data.verifiedStatus}</span>
                  }
                  color="#000"
                />
              </div>
            </div>
          </Col>

          <Col xs={24} md={10} lg={8}>
            <div className="right-section">
              <div className="stats-row">
                <div className="stat-item">
                  <Image
                    src="/images/star.svg"
                    alt="Active"
                    width={20}
                    height={20}
                  />
                  <span className="stat-value">{data.rating} Rating</span>
                </div>
                <div className="stat-item">
                  <Image
                    src="/images/usercheck.svg"
                    alt="Active"
                    width={20}
                    height={20}
                  />
                  <span className="stat-value">
                    {data.followers.toLocaleString()} Followers
                  </span>
                </div>
                <div className="stat-item">
                  <Image
                    src="/images/add-friend.svg"
                    alt="Active"
                    width={20}
                    height={20}
                  />
                  <span className="stat-value">
                    {data.following.toLocaleString()} Following
                  </span>
                </div>
              </div>

              <div className="action-buttons-row">
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  className="follow-btn"
                  onClick={data.onFollow}
                >
                  {data.following ? "Following" : "Follow"}
                </Button>
                <Tooltip title="Send Message">
                  <Button
                    shape="round"
                    icon={<MessageOutlined />}
                    size="large"
                    className="icon-btn message-btn"
                    onClick={data.onMessage}
                  />
                </Tooltip>
                <Tooltip title="Call">
                  <Button
                    shape="round"
                    icon={<PhoneOutlined />}
                    size="large"
                    className="icon-btn call-btn"
                    onClick={data.onCall}
                  />
                </Tooltip>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProfileHeader;
