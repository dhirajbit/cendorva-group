"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Renders the visitor's current year after hydration; empty in the static shell. */
export function Year() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <>{year ?? ""}</>;
}
