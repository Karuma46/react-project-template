import React from "react";

const Typography = () => {
  return (
    <div className="row my-4 gy-2">
      <div className="col card p-3">
        <h3>Typography</h3>

        <h1 className="my-4">Headline H1</h1>
        <h2 className="my-4">Headline H2</h2>
        <h3 className="my-4">Headline H3</h3>
        <h4 className="my-4">Headline H4</h4>
      </div>

      <div className="col card p-3">
        <div style={{ width: "400px" }}>
          <h3>Paragraph</h3>
          <p>
            The quick brown fox jumped over the lazy dog. The quick brown fox
            jumped over the lazy dog. The quick brown fox jumped over the lazy
            dog.
          </p>

          <h3>Icons</h3>
          <div>
            <i style={{ fontSize: "22px" }} className="bi-emoji-heart-eyes"></i>
            <i style={{ fontSize: "22px" }} className="bi-emoji-kiss"></i>
          </div>
        </div>
      </div>

      <div className="col card p-3">
        <h3>Lists</h3>
        <ul>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
          <li>List Item 4</li>
        </ul>

        <ol>
          <li>List Item 5</li>
          <li>List Item 6</li>
          <li>List Item 7</li>
          <li>List Item 8</li>
        </ol>
      </div>
    </div>
  );
};

export default Typography;
