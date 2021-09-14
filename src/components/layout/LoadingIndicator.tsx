import React from "react";
import Loader from "react-loader-spinner";
import { usePromiseTracker } from "react-promise-tracker";
import { Row } from "../basics";
import { green } from "../../styles";

export const LoadingIndicator: React.FC = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress ? (
    <Row justifyContent="space-around" width="100%">
      <Loader type="ThreeDots" color={green} height="75" width="75" />
    </Row>
  ) : (
    <div>{props.children}</div>
  );
};
