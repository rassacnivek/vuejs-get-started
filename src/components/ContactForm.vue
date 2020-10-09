<template>
  <div class="contact__form">
    <Modal
      :isModalVisible="this.isModalVisible"
      :toggleModal="toggleModal"
      :sendForm="sendForm"
      :name="this.name"
    />
    <div class="text">Post your message here, the best way to contact me</div>
    <form class="form">
      <form action="" method="post"></form>
      <div class="form-group">
        <input
          type="text"
          class="input"
          id="name"
          name="name"
          v-model="name"
          required
        />
        <label for="name" class="label">Name</label>
      </div>
      <div class="form-group">
        <input
          type="text"
          class="input"
          id="mail"
          name="mail"
          v-model="email"
          required
        />
        <label for="mail" class="label">Email</label>
      </div>
      <div class="form-group">
        <input
          type="text"
          class="input"
          id="message"
          name="message"
          v-model="message"
          required
        />
        <label for="message" class="label">Message</label>
      </div>
      <div class="form-group">
        <Button text="Send" :event="toggleModal" />
      </div>
    </form>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Modal from "@/components/Modal";
export default {
  components: { Button, Modal },
  data: function () {
    return {
      name: "",
      email: "",
      message: "",
      isModalVisible: false,
    };
  },
  methods: {
    sendForm: function () {
      const datas = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      console.log(datas);
      this.toggleModal();
    },
    toggleModal: function () {
      this.isModalVisible = !this.isModalVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.contact__form {
  display: flex;
  justify-content: center;
  padding: 30px;
  .text {
    width: 50vw;
    font-size: 32px;
    padding-right: 30px;
    text-align: left;
  }
  .form {
    width: 50vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    .form-group {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-bottom: 20px;
      height: 63px;
      position: relative;
      .label {
        letter-spacing: 1.5px;
        text-transform: uppercase;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 20px;
        transition: 0.3s ease all;
      }
      .input {
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 24px;
        &:focus ~ .label,
        &:valid ~ .label {
          letter-spacing: 1px;
          top: 0;
          font-size: 12px;
        }
      }
    }
  }
}
</style>