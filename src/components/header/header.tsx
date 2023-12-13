import { component$ } from "@builder.io/qwik";
import { Logo } from "../icons/logo";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <h1 class={styles.hidden}>hello</h1>
      <div class={styles.logo}>
        <a href="/" title="qwik">
          <Logo height={50} width={50} />
        </a>
      </div>
    </header>
  );
});
