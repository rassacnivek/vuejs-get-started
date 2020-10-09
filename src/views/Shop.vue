<template>
  <div class="shop">
    <TitlePage :title="titleShop" />
  </div>
</template>

<script>
import TitlePage from "@/components/TitlePage";
export default {
  components: { TitlePage },
  data: function () {
    return {
      titleShop: "Shop",
    };
  },
};
</script>