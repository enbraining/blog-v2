import { component$ } from "@builder.io/qwik";
import Avatar from "~/components/icons/avatar";

export default component$((/*children*/) => {
  return (
    <>
      <div class="rounded-icon block">
        <Avatar />
      </div>
      <div class="description block">
        <h2>uLBI</h2>
        <p class="subtitle">새로운 것을 추구하며, 숨겨진 어떤 요소를 찾는 것이 재미있습니다. 남들과 소통하며 얻는 새로운 지식을 경험하고, 그걸 또 다시 남들과 공유하며 성장합니다.</p>
      </div>
    </>
  );
});
