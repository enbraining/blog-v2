import { component$, useStylesScoped$ } from "@builder.io/qwik";
import matter from 'gray-matter';
import type Posts from "~/components/post/Posts";
import styles from "./posts.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const file = matter.read('./data/blog/code-sample.mdx')

  const listItems: Posts[] = [
    { title: "asdf", content: file.content, summary: "sadf" },
    { title: "asdf", content: file.content, summary: "sadf" },
    { title: "asdf", content: file.content, summary: "sadf" },
    { title: "asdf", content: file.content, summary: "sadf" },
  ];

  return (
    <div class="posts">
        {listItems.map((item) => (
          <div key={item.title} class="post">
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </div>
        ))}
    </div>
  );
});
