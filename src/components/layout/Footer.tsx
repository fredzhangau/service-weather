import React from "react";
import { Row } from "../basics";

export const Footer: React.FC = () => {
  return (
    <Row justifyContent="flex-end" width="100%">
      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">
          iconixar
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </Row>
  );
};
