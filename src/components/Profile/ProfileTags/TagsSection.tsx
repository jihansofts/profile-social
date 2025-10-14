"use client";
import React from "react";
import { Tag, Space, Typography } from "antd";
import "./TagsSection.css";
const { Text } = Typography;

interface TagsSectionProps {
  tags: string[];
  category?: string;
}

const TagsSection: React.FC<TagsSectionProps> = ({ tags, category }) => {
  return (
    <div className="tags-section">
      {category && (
        <Text strong className="tag-category">
          {category}
        </Text>
      )}
      <Space size={[8, 10]} wrap>
        {tags.map((tag, index) => (
          <Tag key={index} color="default" className="tabs">
            {tag}
          </Tag>
        ))}
      </Space>
    </div>
  );
};

export default TagsSection;
