import { component$ } from "@builder.io/qwik";
import { Discord, Github, Linkedin, Mastodon } from "~/components/icons/social/icons";
import Metadata from "../../data/siteMetadata";


export default component$(() => {
  return (
    <>
    <div class="inline">
      <div class='boards'>
        <div>
          <div class="rounded-icon">
          </div>
          <div class="description">
            <h2>{Metadata.author}</h2>
            <p>{Metadata.description}</p>
          </div>
          <div class="description logos">
            <a href="https://github.com/enbraining"><Github/></a>
            <a href="https://linkedin.com/in/enbraining"><Linkedin/></a>
            <a href="https://discord.gg/36tCw3kYuJ"><Discord/></a>
            <a href="https://mastodon.social/@enbraining"><Mastodon/></a>
          </div>
        </div>

        <div>
          <div class="description red-color">
            <a href="https://github.com/xolving/">
              <h2 class="white-font">xolving</h2>
              <p class="white-font">github source</p>
            </a>
          </div>
          <div class="warning">
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
            <a href="https://hervtart.gitbook.io/blog/">
              <h2 class="white-font">임시 블로그</h2>
              <p class="white-font">이동하기</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
});
