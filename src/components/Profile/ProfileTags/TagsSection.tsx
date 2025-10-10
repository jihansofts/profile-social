"use client";
import React from "react";
import { Tag, Space, Typography } from "antd";

const { Text } = Typography;

interface TagsSectionProps {
  tags: string[];
  category?: string;
}

const TagsSection: React.FC<TagsSectionProps> = ({ tags, category }) => {
  return (
    <div>
      {category && (
        <Text
          strong
          style={{ display: "block", marginBottom: 10, fontSize: 16, fontWeight: 700 }}
        >
          {category}
        </Text>
      )}
      <Space size={[8, 10]} wrap>
        {tags.map((tag, index) => (
          <Tag key={index} color="default" style={{ fontSize: 16, padding: "5px 16px" }}>
            {tag}
          </Tag>
        ))}
      </Space>
    </div>
  );
};

export default TagsSection;
