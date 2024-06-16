import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { setTokenByGoogleAuth } from "../../redux/auth/slice";

export default function GoogleRedirectPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const token = params.get("token");

  useEffect(() => {
    dispatch(setTokenByGoogleAuth(token));
  }, [dispatch]);

  return <h1>Loading...</h1>;
}
