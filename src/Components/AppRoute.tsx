import { Route } from "react-router";

import { IRoute } from "@interfaces";
import { LayoutApp } from "@layouts";

export const ComponentAppRoute = (props: IRoute) => {
  const { path, exact } = props;
  //page variable
  //WHAT: check user login
  // const token = auth?.accessToken;
  const Component = props.component;
  const Layout = LayoutApp;

  //WHAT: check valid route
  // useEffect(() => {
  //What: check merchantID
  // if (!_id) {
  //     history.push(PATH_404);
  // }

  //WHAT: check normal path
  // const isNormalRoute =
  //     pathname === PATH_HOME
  //         ? true
  //         : normalRoutes.some((item: string) => {
  //               if (item === PATH_HOME) {
  //                   return false;
  //               }
  //               return pathname.includes(item);
  //           });

  //WHAT: check a uth path
  // const isAuthRoute = authRoutes.some((item: string) => pathname.includes(item));
  // if (token) {
  // const userPermissions = auth.userPermissions;
  // || (props.permission && !userPermissions?.includes(props.permission))
  //         if (isSignUp) {
  //             history.push(PATH_SIGN_UP_FROM);
  //         } else if (externalType?.type === enumTypes.COUPON && externalType.id) {
  //             history.push(COUPON + "/" + externalType.id);
  //         } else if (isAuthRoute) {
  //             history.push(PATH_HOME);
  //         }
  //     } else if (isNormalRoute) {
  //         history.push(PATH_SIGN_IN);
  //     }
  // }, [pathname, auth]);

  // useEffect(() => {
  //     if (token) {
  //         dispatch(getInfo());
  //     }
  // }, [token]);

  return (
    <Route
      path={path}
      exact={exact}
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
};
