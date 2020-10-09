<template>
  <div id="modal" v-if="isModalVisible">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <slot name="body">Are you sure de send this form ?</slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <Button text="Close" :event="toggleModal" />
                <Button text="Send" :event="sendForm" />
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  components: { Button },
  props: {
    isModalVisible: Boolean,
    toggleModal: Function,
    sendForm: Function,
    name: String,
  },
};
</script>

<style scoped lang="scss" >
.modal {
  &-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }
  &-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  &-container {
    width: 380px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
  &-header {
    & h3 {
      margin-top: 0;
      color: #42b983;
    }
  }
  &-body {
    margin: 20px 0;
  }
  &-footer{
    display: flex;
    justify-content: space-evenly;
  }
  &-accept-button,
  &-close-button {
    background-color: #42b983;
    border: 2px solid #42b983;
    border-radius: 35% 65%;
    text-transform: uppercase;
    padding: 10px 0;
    width: 30%;
    cursor: pointer;
    color: white;
  }
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>