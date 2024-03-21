"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4bbe85d5-0ced-4600-91b4-666b574e0942");
  }, []);

  return null;
};
