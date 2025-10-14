"use client";
import React from "react";
import { Avatar, Button, Tooltip, Badge, Row, Col } from "antd";
import {
  CommentOutlined,
  PhoneOutlined,
  StarOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import Image from "next/image";

import "./ProfileHeader.css";

import { ProfileDataType } from "@/lib/data";

interface ProfileHeaderProps {
  data: ProfileDataType;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ data }) => {
  return (
    <div className="profile-header" suppressHydrationWarning>
      <div className="profile-content">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={12} lg={14}>
            <div className="left-section">
              <div className="avatar-container">
                <Avatar
                  className="responsive-avatar"
                  src={
                    <Image
                      src={data.profileImage}
                      alt="Profile"
                      width={100}
                      height={100}
                      className="avatar-img"
                      sizes="(max-width: 768px) 100px, 100px"
                    />
                  }
                />
                <div className="active-status">
                  <Image
                    src="/images/active.svg"
                    alt="Active"
                    width={20}
                    height={20}
                    className="active-img"
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

          <Col xs={24} md={10} lg={10}>
            <div className="right-section">
              <div className="stats-row">
                <div className="stat-item">
                  <StarOutlined className="stat-icon" />
                  <div className="stat-gap">
                    <span className="stat-value">{data.rating} </span>
                    <span className="stat-text">Rating</span>
                  </div>
                </div>
                <div className="stat-item">
                  <UsergroupAddOutlined className="stat-icon" />
                  <div className="stat-gap">
                    <span className="stat-value">
                      {data.followers?.toLocaleString()}
                    </span>
                    <span className="stat-text">Followers</span>
                  </div>
                </div>
                <div className="stat-item">
                  <UserAddOutlined className="stat-icon" />
                  <div className="stat-gap">
                    <span className="stat-value">
                      {data.following?.toLocaleString()}
                    </span>
                    <span className="stat-text">Following</span>
                  </div>
                </div>
              </div>

              <div className="action-buttons-row">
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  className="follow-btn"
                  onClick={data.onFollow}>
                  {data.following ? "Follow " : " Following"}
                </Button>
                <Tooltip title="Send Message">
                  <Button
                    shape="round"
                    icon={<CommentOutlined />}
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
