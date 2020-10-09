<template>
  <div class="account">
    <TitlePage :title="titleAccount" />
  </div>
</template>

<script>
import TitlePage from "@/components/TitlePage";
export default {
  components: { TitlePage },
  data: function () {
    return {
      titleAccount: "Account",
    };
  },
};
</script>