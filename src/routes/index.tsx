import { component$ } from "@builder.io/qwik";
import Avatar from "~/components/icons/avatar";
import Metadata from "../../data/siteMetadata";


export default component$(() => {
  return (
    <>
      <div class="rounded-icon">
        <Avatar />
      </div>
      <div class="block">
        <h2>{Metadata.author}</h2>
        <p>{Metadata.description}</p>
      </div>
      <div class="block">
        <h2>공사 중 ⚠️</h2>
      </div>
    </>
  );
});
