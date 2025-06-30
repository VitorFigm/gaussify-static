"use client";
import { PropsWithChildren, useEffect } from "react";

export function TransitionMenuToggle({ children }: PropsWithChildren) {
  useEffect(() => {
    return () => {
      document.body.classList.remove("exited");
    };
  }, []);

  return children;
}

export function TransitionModuleToggle({ children }: PropsWithChildren) {
  useEffect(() => {
    return () => {
      document.body.classList.add("exited");
    };
  }, []);

  return children;
}
