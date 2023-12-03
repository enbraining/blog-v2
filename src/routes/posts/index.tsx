import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./posts.css?inline";

interface ListItem {
  id: number;
  text: string;
}

export default component$(() => {
  useStylesScoped$(styles);

  const listItems: ListItem[] = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ];

  return (
    <div class="posts">
        {listItems.map((item) => (
          <div key={item.id}>
            <h1>{item.id}</h1>
            <p>{item.text}</p>
          </div>
        ))}
    </div>
  );
});
