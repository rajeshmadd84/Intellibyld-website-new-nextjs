export const menuItems = [
  {
    id: 1,
    text: "Home",
    url: "#",
    subMenu: [
      {
        text: "Home Social Media",
        url: "/",
        isActive: true,
      },
      {
        text: "Home Coding Assistant",
        url: "/home-2",
      },
      {
        text: "Home Image Generator",
        url: "/home-3",
      },
      {
        text: "Home AI Copywriting",
        url: "/home-4",
      },
    ],
    hasChildren: true,
    isActive: true,
  },
  {
    id: 2,
    text: "About Us",
    url: "#",
    subMenu: [
      {
        text: "About",
        url: "/about",
      },
      {
        text: "FAQs",
        url: "/faqs",
      },
      {
        text: "404",
        url: "/404",
      },
      {
        text: "Price",
        url: "/price",
      },
    ],
    hasChildren: true,
  },
  {
    id: 3,
    text: "Use Cases",
    url: "/use-cases",
  },
  {
    id: 4,
    text: "Agentic AI",
    url: "/agentic-ai",
  },
  {
    id: 5,
    text: "Digital Twins",
    url: "/digital-twins",
  },
  {
    id: 6,
    text: "Sustainability",
    url: "/sustainability",
  },
  {
    id: 7,
    text: "Contact",
    url: "/contact-us",
  },
];
