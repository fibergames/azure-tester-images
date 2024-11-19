<template>
  <div>
    <h1>Vue.js Frontend</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Loading...",
    };
  },
  async mounted() {
    const res = await fetch("http://localhost:3000/api/message");
    const data = await res.json();
    this.message = data.message;
  },
};
</script>
