import React from "react";

export const menuRouter = [
  {
    path: "/chat",
    label: "Chat",
    icon: "MessageOutlined",
    component: React.lazy(() => import("../pages/chat")),
  },
  {
    path: "/contact",
    label: "Contact",
    icon: "ContactsSharp",
    component: React.lazy(() => import("../pages/contact")),
  },
  {
    path: "/ai",
    label: "AI",
    icon: "AutoAwesome",
    component: React.lazy(() => import("../pages/ai")),
  },
  {
    path: "/stream",
    label: "Stream",
    icon: "AutoAwesome",
    component: React.lazy(() => import("../pages/stream")),
  },
];
