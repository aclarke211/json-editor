<template>
  <div :class="[className, 'outer']">
    <h1 :class="'title'">{{ title }}</h1>

    <div
      v-for="(dataSet, setKey) in content" :key="setKey">
      <h2 class="set-title">{{ formatName(dataSet._component) }}</h2>
      <div v-for="(setContent, setContentKey) in dataSet.content" :key="setContentKey" >

        <JSONEditField
          :bus="bus"
          :fieldContent="setContent"
          :fieldKey="`${setContentKey}`"
          :propertyAccessor="`${setKey}.content.${setContentKey}`"
          :fontSize="'1.25rem'" />

      </div>
    </div>
  </div>
</template>

<script>
import JSONEditField from './json-edit-field.vue';
import formatString from './format-strings';

export default {
  name: 'JSONEditorForm',

  components: {
    JSONEditField,
  },

  data: () => ({
    className: 'edit-json-form',
  }),

  props: {
    content: {
      type: [Array, Object],
      default: () => [],
    },

    title: {
      type: String,
      default: 'Edit Content',
    },

    bus: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    getFieldType(type, field) {
      // eslint-disable-next-line
      if (typeof field === type) {
        return true;
      }
      return false;
    },

    formatName(string) {
      const wordsToRemove = ['footpatrol'];

      return formatString(string, wordsToRemove);
    },
  },
};
</script>

<style lang="scss" scoped>
  .edit-json-form {
    padding: 3.5rem;
    max-height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;

    .title {
      margin: 1rem 0;
      padding: 0;
      font-size: 2.25rem;
    }

    .set-title {
      color: darkslategrey;
      margin: 2.5rem 0 .75rem;
      font-size: 1.75rem;
    }
  }
</style>
