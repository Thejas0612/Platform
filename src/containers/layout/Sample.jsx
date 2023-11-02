import React from "react";
export default function Sample() {
  const name = "User";
  return (
    <div>
      <p data-testid="user-name">{name}</p>
    </div>
  );
}
