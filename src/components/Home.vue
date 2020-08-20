<template>
  <div>
    <div class="lg:max-w-5xl mx-auto md:px-4 p-4">
      <h1 class="text-4xl font-bold">
        Canada COVID-19 Health
        <code>PORTAL</code>
      </h1>
      <h4 class="text-xs">
        Source:
        <a
          class="border-b border-dotted text-blue-600 border-blue-600 hover:text-blue-800 hover:border-blue-800"
          target="_blank"
          href="https://www.canada.ca/fr/sante-canada.html"
        >Canada Deptartment of Health</a> &middot; Last updated 6/29/2020 6:25 p.m.
      </h4>
    </div>
    <Social></Social>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import Social from "../components/Social";
import FooterPage from "../components/FooterPage";
export default {
  name: "Home",
  components: {
    Social,
    FooterPage
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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