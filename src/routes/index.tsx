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
          <h2>공사장 감성 카페 아님<br/>☕️☕️☕️</h2>
        </div>
        <div class="description">
          <h2>진짜 정말로 공사중임</h2>
          <p>2135215 데시벨</p>
        </div>
        <div class="warning">
        </div>
      </div>

      <div>
        <div class="warning">
        </div>
        <div class="description blue-color">
          <a href="https://blog-nine-rouge-40.vercel.app">
            <h2 class="white-font">임시 블로그</h2>
            <p class="white-font">이동하기</p>
          </a>
        </div>
      </div>
    </div>
    </>
  );
});
