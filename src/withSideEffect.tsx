import React, { ReactNode } from "react";
import { useService } from "./Dropdown/useService";
import Loading from "./Loading/Loading";
import Error from "./Error/Error";

type WithChildren<T = {}> = T & { children?: ReactNode };

const withSideEffect =
  <T extends {}>(
    fetchFunc: () => Promise<T>,
    Component: React.FC<WithChildren<T>>
  ) =>
  (props: WithChildren<T>) => {
    const { loading, error, data } = useService(fetchFunc);

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <Error />;
    }

    return <Component {...props} data={data} />;
  };

export default withSideEffect;
