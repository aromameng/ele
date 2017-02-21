<template>
  <div class="dialogs">
    <div class="dialog" v-bind:class="{ 'dialog-active': show }">
      <div class="dialog-content">
        <div class="close rotate">
          <span class="fa fa-times" @click="close"></span>
        </div>
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    </div>
    <div class="dialog-overlay"></div>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      default: false,
      type: Boolean,
      twoWay: true
    }
  },
  methods: {
    close: function() {
      this.show = false;
    }
  }
}
</script>
