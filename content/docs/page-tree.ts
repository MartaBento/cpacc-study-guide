import { PageTree } from "fumadocs-core/server";

export default {
  name: "Docs",
  children: [
    {
      type: "page",
      name: "Home",
      url: "/docs",
    },
    {
      type: "page",
      name: "Introduction",
      url: "/docs/introduction",
    },
    {
      type: "page",
      name: "Exam Prep",
      url: "/docs/exam-prep",
    },
    {
      type: "page",
      name: "Domains",
      url: "/docs/domains",
    },
    {
      type: "page",
      name: "Resources",
      url: "/docs/resources",
    },
  ],
} satisfies PageTree.Root;
