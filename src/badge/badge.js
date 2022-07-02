import React, { useState, useEffect } from "react";
import "./badge.css";

export default function Badge1(props) {
  const {
    children = null,
    color,
    count,
    dot = false,
    offset,
    overflowCount = 99,
    showZero = false,
    size = "default",
    status,
    text,
    title,
  } = props;

  const [showCount, setShowCount] = useState(count);
  const [, setShowDot] = useState(dot);
  const [UIBadgeStyle, setUIBadgeStyle] = useState({});

  useEffect(() => {
    if (count > overflowCount) {
      setShowCount(`${overflowCount}+`);
    }

    if (color && !children) {
      setShowDot(true);
    }

    if (color) {
      setUIBadgeStyle({
        ...UIBadgeStyle,
        background: color,
      });
    }
  }, [props]);

  return (
    <span className="ui-badge">
      {children}
      {!dot ? (
        <span
          className="ui-badge-count"
          title={title ?? count}
          style={UIBadgeStyle}
        >
          {showCount}
        </span>
      ) : null}
      {dot ? (
        <span
          className="ui-badge-dot"
          title={title ?? count}
          style={UIBadgeStyle}
        ></span>
      ) : null}
    </span>
  );
}
