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

    setterDotNotation(obj, str, value) {
      if (typeof str === 'string') {
        return this.setterDotNotation(obj, str.split('.'), value);
        // eslint-disable-next-line
      } else if (str.length == 1 && value !== undefined) {
        // eslint-disable-next-line
        return obj[str[0]] = value;
        // eslint-disable-next-line
      } else if (str.length === 0) {
        // eslint-disable-next-line
          return obj;
      } else {
        // eslint-disable-next-line
        return this.setterDotNotation(obj[str[0]], str.slice(1), value);
      }
    },
  },

  created() {
    // Split the event.fieldKey, at '.', then need to add each one onto this.editedContent
    this.bus.$on('bus-emit', (event) => {
      this.setterDotNotation(this.editedContent, event.fieldKey, event.content);
    });
  },
};
</script>

<style lang="scss">
  .jsonEditor__container {
    display: flex;
  }
</style>
