import { component$ } from "@builder.io/qwik";
import Avatar from "~/components/icons/avatar";
import Metadata from "../../data/siteMetadata";


export default component$(() => {
  return (
    <>
    <div class='boards'>
      <div>
        <div class="rounded-icon">
          <Avatar />
        </div>
        <div class="description">
          <h2>{Metadata.author}</h2>
          <p>{Metadata.description}</p>
        </div>
        <div class="description">
          <h2>공사 중 ⚠️</h2>
        </div>
      </div>

      <div>
        <div class="xolving">
          <a href="https://github.com/xolving"><p>xolving으로 가기</p></a>
        </div>
        <div class="description">
          <h2>진짜 공사중<br/>진짜임</h2>
        </div>
      </div>

      <div>
        <div class="description">
          <h2>공</h2>
        </div>
        <div class="description">
          <h2>사</h2>
        </div>
        <div class="description">
          <h2>중</h2>
        </div>
        <div class="description">
          <h2>⚠️</h2>
        </div>
      </div>
    </div>
    </>
  );
});
