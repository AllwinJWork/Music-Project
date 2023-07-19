import React, { useEffect, useState } from "react";

const useGetAccessToken = () => {
  const [accessToken, setToken] = useState("");
  useEffect(() => {
    const hashParams = window.location.hash.substr(1);
    const token = new URLSearchParams(hashParams).get("access_token");
    if (!token) return;
    setToken(token);
  }, []);

  return accessToken;
};

export default useGetAccessToken;
