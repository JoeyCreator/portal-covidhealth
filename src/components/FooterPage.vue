<template>
  <div class="bg-black">
    <div class="px-5 md:px-0 py-5 container mx-auto flex sm:justify-between justify-start">
      <div class="w-1/2">
        <p
          class="text-sm text-black"
        >Copyright &copy; {{ getYear() }} COVID-19 HEALTH, LLC. All rights reserved.</p>
      </div>
      <div class="w-1/2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterPage",
  methods: {
    getYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
nav a {
  text-decoration: none;
}
</style>