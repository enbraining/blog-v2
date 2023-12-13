import { component$ } from "@builder.io/qwik";
import { Logo } from "../icons/logo";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class="logo">
          <a href="/" title="qwik">
            <Logo height={50} width={50} />
          </a>
        </div>
      </div>
    </header>
  );
});
