export const menu = [
  { title: "Home" },
  {
    title: "Services",
    selectedLabel: "Which Type of Service ?",
    items: [
      {
        title: "Marketing & Writing",
        icon: "marketing",
        items: [
          { title: "Social & Content" },
          { title: "Search · SEO" },
          { title: "Research & Strategy" },
          {
            title: "Writing Services",
            items: [
              { title: "WEBSITE CONTENT" },
              { title: "EMAIL COPY" },
              { title: "PRESS RELEASE" },
              { title: "BUSINESS NAMES & SLOGAN" },
              { title: "WEBSITE CONTENT" },
            ],
          },
        ],
      },
      { title: "Graphic & Design", icon: "graphics" },
      { title: "Programming & Tech", icon: "programming" },
      { title: "Video & Animation", icon: "video" },
    ],
  },
  {
    title: "Company",
    items: [
      {
        title: "Company 1",
        icon: "",
      },
      { title: "Company 2", icon: "" },
      { title: "Company 3", icon: "" },
      { title: "Company 4", icon: "" },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Resources 1",
        icon: "",
        items: [
          { title: "Child Res 1" },
          { title: "Child Res 2" },
          { title: "Child Res 3" },
        ],
      },
      { title: "Resources 2", icon: "" },
    ],
  },
  {
    title: "Contact",
  },
  { title: "Login", color: "#195BB6", icon: "login" },
]
