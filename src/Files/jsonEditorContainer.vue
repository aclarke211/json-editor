<template>
  <div class="jsonEditor__container">
    <JSONEditorForm
      :bus="bus"
      :content="editorContent"
      v-if="editorContent"
      @content-updated="liveContentUpdate($event)" />

    <preview
      :class="'json-preview'"
      v-if="editorContent"
      :previewContent="editedContent" />
  </div>
</template>

<script>
import Vue from 'vue';
import preview from './json-preview.vue';
import JSONEditorForm from './json-edit-form.vue';

export default {
  name: 'jsonEditorContainer',

  components: {
    preview,
    JSONEditorForm,
  },

  data: () => ({
    editedContent: [],
    contentToSave: {},
    bus: new Vue(),
  }),

  props: {
    editorContent: {
      type: [Array, Object],
      default: () => ([]),
    },
  },

  methods: {
    liveContentUpdate(content) {
      this.editedContent = content;
    },
  },

  created() {
    this.bus.$on('bus-emit', (event) => {
      // eslint-disable-next-line
      console.info("BUS EMIT", event);
      this.editedContent[0].content.spots[0].title = event;
    });
  },
};
</script>

<style lang="scss">
  .jsonEditor__container {
    display: flex;
  }
</style>
