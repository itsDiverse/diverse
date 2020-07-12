export const menu = {
  title: "Home",
  items: [
    { title: "Inicio" },
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
                { title: "WEBSITE CONTENT", to: "writting/website-content" },
                { title: "EMAIL COPY", to: "writting/email-copy" },
                { title: "PRESS RELEASE", to: "writting/press-release" },
                {
                  title: "BUSINESS NAMES & SLOGAN",
                  to: "writting/business-names",
                },
                { title: "WEBSITE CONTENT", to: "writting/website-content" },
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
    {
      title: "Login",
      icon: "login",
    },
  ],
}
