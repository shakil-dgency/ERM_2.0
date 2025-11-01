"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { setToggle } from "@/lib/features/toggleSlice";

export default function RouteChangeCloser() {
  const dispatch = useDispatch();
  const pathname = usePathname();

  useEffect(() => {
    // Close popup on ANY navigation (path or query change)
    dispatch(setToggle(false));
  }, [pathname, dispatch]);

  return null;
}