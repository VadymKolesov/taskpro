import css from "./GoogleRedirectPage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import { setTokenByGoogleAuth } from "../../redux/auth/slice";
import { current } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import clsx from "clsx";

export default function GoogleRedirectPage() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const token = params.get("token");

  useEffect(() => {
    dispatch(setTokenByGoogleAuth(token));
    dispatch(current());
  }, [dispatch, token]);

  return (
    <>
      {isRefreshing ? (
        <div className={clsx(css.loadBackground)}>
          <div className={clsx(css.loader)}></div>
        </div>
      ) : (
        <Navigate to="/home" />
      )}
    </>
  );
}
