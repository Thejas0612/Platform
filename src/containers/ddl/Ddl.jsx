import React from "react";
import DDLBigFeature from "../../utils/components/big-feature/dist/big-feature-vanilla.js";
import "../../utils/styles/dist/all.css";

export default function Ddl() {
  return (
    <ddl-big-feature class="ddl-big-feature ">
      <div class="ddl-button-cta ddl-grid-cols-4">
        <a href="#" class="ddl-button-cta ddl-button-cta--primary  ">
          <label>DDL Button</label> <i class="ddl-cta-icon ddl-cta-icon--internal-link"></i>
        </a>
      </div>
      <div class="ddl-button-cta ddl-grid-cols-4">
        <a href="#" class="ddl-button-cta ddl-button-cta--tertiary  ">
          <label>DDL Button</label>
          <i class="ddl-cta-icon ddl-cta-icon--internal-link"></i>
        </a>
      </div>
    </ddl-big-feature>
  );
}
