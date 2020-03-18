import React from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;

export const CopyableLink = ({ title, copyableText, to, target = "_blank", ...props }) => {
  return (
    <Paragraph {...props} underline copyable={{ text: copyableText || title }}>
      <a href={to} rel="noopener noreferrer" target={target}>
        {title}
      </a>
    </Paragraph>
  );
};
