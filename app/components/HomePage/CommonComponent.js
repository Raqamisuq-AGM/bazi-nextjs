"use client";

export default function CommonComponent({ title, body }) {
  return (
    <div className="content-area">
      <div className="title p-5 text-white text-center rounded-3">
        <h2>{title}</h2>
      </div>

      <div className="content-body">
        {body ? <p dangerouslySetInnerHTML={{ __html: body }} /> : null}
      </div>
    </div>
  );
}
