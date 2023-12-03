import { component$ } from "@builder.io/qwik";
import { Logo } from "../icons/logo";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <Logo height={50} width={50} />
          </a>
        </div>
        <ul>
          <li>
            <a
              href="/posts"
              target="_blank"
            >
              Posts
            </a>
          </li>
          <li>
            <a
              href="/design"
              target="_blank"
            >
              Design
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
