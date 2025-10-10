"use client";
import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

interface DescriptionSectionProps {
  title: string;
  content?: string | null;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  title,
  content,
}) => {
  return (
    <div>
      <Title
        level={4}
        style={{ marginBottom: 12, fontWeight: 700, fontSize: 22 }}
      >
        {title}
      </Title>
      <Paragraph
        style={{
          fontSize: 18,
          lineHeight: 1.6,
          border: "1px solid #62606030",
          padding: "20px 16px",
          borderRadius: 10,
        }}
      >
        {content || "No description available."}
      </Paragraph>
    </div>
  );
};

export default DescriptionSection;
