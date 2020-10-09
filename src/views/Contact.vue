<template>
  <div class="contact">
    <TitlePage :title="titleContact" />
    <ContactForm />
  </div>
</template>

<script>
import TitlePage from "@/components/TitlePage";
import ContactForm from "@/components/ContactForm";
export default {
  components: { TitlePage, ContactForm },
  data: function () {
    return {
      titleContact: "Contact",
    };
  },
};
</script>