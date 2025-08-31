"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  target: "articles" | "projects";
  label: string;
}

export default function BackButton({ target, label }: BackButtonProps) {
  const handleClick = () => {
    if (target === "articles") {
      sessionStorage.setItem("scrollToArticles", "true");
    } else if (target === "projects") {
      sessionStorage.setItem("scrollToProjects", "true");
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
    >
      <ArrowLeft size={16} />
      {label}
    </Link>
  );
}
