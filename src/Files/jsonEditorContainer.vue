<template>
  <div class="jsonEditor__container">
    <JSONEditorForm
      :bus="bus"
      :content="editorContent"
      v-if="editorContent" />

    <preview
      :class="'json-preview'"
      v-if="editorContent"
      :previewContent="updatedContent" />
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
    updatedContent: [],
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
    setterDotNotation(obj, str, value) {
      if (typeof str === 'string') {
        return this.setterDotNotation(obj, str.split('.'), value);
      }

      if (str.length === 1 && value !== undefined) {
        // eslint-disable-next-line
        return obj[str[0]] = value;
      }

      if (str.length === 0) { return obj; }

      return this.setterDotNotation(obj[str[0]], str.slice(1), value);
    },
  },

  created() {
    this.bus.$on('bus-emit', (event) => {
      this.setterDotNotation(this.updatedContent, event.fieldKey, event.content);
    });

    this.updatedContent = this.editorContent;
  },
};
</script>

<style lang="scss">
  .jsonEditor__container {
    display: flex;
  }
</style>
