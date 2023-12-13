import { component$ } from "@builder.io/qwik";
import { Discord, Github, Linkedin, Mastodon } from "~/components/icons/social/icons";
import Metadata from "../../data/siteMetadata";


export default component$(() => {
  return (
    <>
      <div class='boards'>
        <div class='board'>
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

        <div class='posts'>
          <div class="post">
            <h2>공사장 감성 카페 아님<br/>☕️☕️☕️</h2>
            <p>공사장이 공사장인 이유를 설명하는 데스크립션입니다!!!<br/>진짜로 공사장이 아닌데요??</p>
          </div>
          <div class="post">
            <h2>진짜 정말로 공사중임</h2>
            <p>2135215 데시벨<br/>시끄러운 거 좋아하시나요? 전 싫은데요?<br/>싫어!!!!</p>
          </div>
          <div class="post">
            <h2>공사장 감성 카페 아님<br/>☕️☕️☕️</h2>
            <p>공사장이 공사장인 이유를 설명하는 데스크립션입니다!!!<br/>진짜로 공사장이 아닌데요??</p>
          </div>
        </div>
      </div>
    </>
  );
});
