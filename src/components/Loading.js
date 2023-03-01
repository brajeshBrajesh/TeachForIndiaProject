import React from "react";

export default function Loading() {
  return (
    <div class="d-flex justify-content-center my-5">
      <div
        class="spinner-border"
        style={{ width: "3rem;", height: "3rem;" }}
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
