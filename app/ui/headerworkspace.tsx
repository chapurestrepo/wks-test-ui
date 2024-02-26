"use client";

import { useState } from "react";

import { Typography } from "antd";

import { CdsButton } from "@circutor/react-ui";
import "./headerworkspace.scss";
import { CdsIcon } from "./cdsIcon";

export const HeaderWorkspace = ({ text }: { text: string }) => {
  const [editableStr, setEditableStr] = useState(text);

  return (
    <article className="header">
      <div className="header__title">
        <Typography.Title
          level={3}
          editable={{
            icon: <CdsIcon icon="edit-left"/>,
            onChange: setEditableStr,
            autoSize: { minRows: 1, maxRows: 1 },
            maxLength: 40
          }}
          ellipsis
          style={{ width: "100%" }}
        >
          {editableStr}
        </Typography.Title>
      </div>
      <div className="header__button-group">
        <CdsButton
          type="submit"
          buttonType="secondary"
          icon="chat-bubble-arrow"
          iconPosition="right"
        ></CdsButton>

        <CdsButton
          type="submit"
          buttonType="secondary"
          icon="delete"
          iconPosition="right"
        ></CdsButton>


      </div>
    </article>
  );
};
