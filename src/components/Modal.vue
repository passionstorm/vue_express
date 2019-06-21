<template lang="pug">
    .modal.fade(:class="modelClass" :style='modelStyle', aria-hidden='true')
        .modal-dialog
            .modal-content
                .modal-header
                    h4.modal-title Default Modal
                    button.close(type='button',  @click="$emit('close')", aria-label='Close')
                        span(aria-hidden='true') ×
                .modal-body
                  slot(name="body")
                .modal-footer.justify-content-between
                    button.btn.btn-default(type='button',  @click="$emit('close')") Close
                    button.btn.btn-primary(type='button') Save changes
</template>

<script>
export default {
  props: {
    opened: Boolean
  },
  data() {
    return {
      modelStyle: "display: none;",
      modelClass: ""
    };
  },
  watch: {
    opened: function(bool, oldVal) {
      if (bool) {
        this.show();
      } else {
        this.close();
      }
      this.$store.dispatch("OpenModal", this.opened);
    }
  },
  methods: {
    close() {
      this.modelStyle = "display: none;";
      this.modelClass = "";
      this.opened = false;
    },
    show() {
      this.modelStyle = "display: block;";
      this.modelClass = "show";
      this.opened = true;
    }
  }
};
</script>
