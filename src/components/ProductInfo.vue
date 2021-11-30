<template>
    <h1>{{ productinfo }}</h1>
    <div id="categories">
      <b-button v-for="category in categories" :key="category"></b-button>
    </div>
    <div id="productimage" >
      <img src="productimagesrc" alt="">
      <!--스크롤-->
    </div>
    <div id="profile">
      <img src="profileimagesrc" alt="">
      <div id="username">{{ username }}</div>
      <b-button v-for="socialicon in socialicons" :key="socialicon.imagesrc"></b-button>
    </div>
    <div id="price">
      {{ price }}원 <br>
      + 배송비 {{ deliverytip }}원
    </div>
    <div id="details">
      {{ details }}
    </div>
    <div id="qna"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  data: () => {
    return {
      productinfo: "명일방주 훔",
      categories: [
        "미개봉", "명일방주:", "훔", "피규어"
      ],
      productimagesrc: "../hung.jpg",
      profileimagesrc: "../profile.png",
      username: "Username",
      socialicons: [
        { imagesrc: "../twitter.webp" },
        { imagesrc: "../instagram.jpg" },
        { imagesrc: "../mastodon.png" },
      ],
      price: "120,000",
      deliverytip: "3,000",
      details: "미개봉입니다."
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
