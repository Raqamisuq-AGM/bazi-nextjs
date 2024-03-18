"use client";

export default function CommonComponent({ title, body }) {
  return (
    <div id="licenseinfo">
      <div className="header">
        <div className="title">{title}</div>
        <div className="legend" />
      </div>
      <div className="body">
        <div className="code">
          {body ? <p dangerouslySetInnerHTML={{ __html: body }} /> : null}
        </div>
      </div>
    </div>
  );
}
