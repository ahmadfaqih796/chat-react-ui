import React from "react";

export const menuRouter = [
  {
    path: "/chat",
    label: "Chat",
    icon: "MessageOutlined",
    component: React.lazy(() => import("../app/chat")),
  },
  {
    path: "/contact",
    label: "Contact",
    icon: "ContactsSharp",
    component: React.lazy(() => import("../app/contact")),
  },
];
