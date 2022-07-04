import React, { useState, useEffect, useMemo } from "react";
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
  const [showDot, setShowDot] = useState(dot);
  const [UIBadgeStyle, setUIBadgeStyle] = useState({});
  const [backgroundColor, setBackgroundColor] = useState(color);
  const [isShowDom, setIsShowDom] = useState(showZero)

  useEffect(() => {
    // count 类型为number时 超过定义的最大值，展示 最大值+
    if (typeof count === "number" && count > overflowCount) {
      setShowCount(`${overflowCount}+`);
    }

    // showZero 为 true时，为 0 展示出来；默认为0时，不展示
    if ((count === 0 || count === '0') && !showZero) {
      setIsShowDom(false)
    } else {
      setIsShowDom(true)
    }

    // 设置颜色，并且没有传children ，dot 为true
    // dot为true时，text失效

    // 状态 ： 设置状态属性，传入children，status属性失效
    if (((color || status) || dot) && !children) {
      setShowDot(true);
    } else {
      setShowDot(false);
    }

    // count 时图标时，直接展示图标，设置的其他属性，如颜色，dot,status,size失效
    // offset={[10, 10]} 两个参数，number或string类型
    if (color && typeof count !== "object") {
      // 修改 badge 背景色
      setUIBadgeStyle({
        ...UIBadgeStyle,
        background: backgroundColor,
        marginTop: offset[0],
        marginRight: offset[1],
      });
    }
  }, [props]);

  const mergedStyle = useMemo(() => {
    if (!offset) {
      return UIBadgeStyle;
    }

    const offsetStyle = { marginTop: offset[1] };
    offsetStyle.right = -parseInt(offset[0], 10);

    return {
      ...offsetStyle,
      ...UIBadgeStyle,
    };
  }, [offset, UIBadgeStyle]);



  return (
    <span className="ui-badge">
      {children}
      {!showDot && isShowDom ? (
        <span
          className={[
            typeof showCount === "object"
              ? "ui-badge-count-icon"
              : "ui-badge-count",
            // dot 为 true时，size失效
            size === "small" && !showDot ? "ui-badge-count-sm" : "",
          ].join(" ")}
          title={title ?? count}
          style={{ ...UIBadgeStyle, ...mergedStyle }}
        >
          {showCount}
        </span>
      ) : null}
      {showDot ? (
        <span
          className={[
            dot ? "ui-badge-dot" : '',
            status ? `ui-badge-status-dot ui-badge-status-${status}` : "",
          ].join(" ")}
          title={title ?? count}
          style={{ ...UIBadgeStyle, ...mergedStyle }}
        ></span>
      ) : null}
      {
        showDot && text && !dot ? <span className="ui-badge-status-text">{text}</span> : null
      }
    </span>
  );
}
