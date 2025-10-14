"use client";
import React from "react";
import { Typography } from "antd";
import "./DescriptionSection.css";
const { Paragraph } = Typography;

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
      <div className="description-title">{title}</div>
      <Paragraph className="description-paragraph">
        {content || "No description available."}
      </Paragraph>
    </div>
  );
};

export default DescriptionSection;
