"use client";

import type { ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
}

export default function Magnetic({ children }: MagneticProps) {
  return <>{children}</>;
}
