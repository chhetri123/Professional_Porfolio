// pages/404.js

"use client";
import { useEffect } from "react";

export default function Custom404() {
  useEffect(() => {
    window.location.href = "/";
  }, []);

  return <></>;
}
