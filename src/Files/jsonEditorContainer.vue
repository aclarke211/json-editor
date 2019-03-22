<template>
  <div class="jsonEditor__container">
    <JSONEditorForm
      :content="editorContent"
      v-if="editorContent"
      @content-updated="hotContentUpdate($event)" />

    <preview
      :class="'json-preview'"
      v-if="editorContent"
      :previewContent="editedContent" />
  </div>
</template>

<script>
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
  }),

  props: {
    editorContent: {
      type: [Array, Object],
      default: () => ([]),
    },
  },

  methods: {
    hotContentUpdate(content) {
      this.editedContent = content;
    },
  },
};
</script>

<style lang="scss">
  .jsonEditor__container {
    display: flex;
  }
</style>
