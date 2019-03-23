<template>
  <div :class="[className]">
    <h3 :style="{'font-size': fontSize}" class="field-title">{{ formatName(fieldKey) }}</h3>

    <input
      v-if="fieldType === 'string'"
      v-model="editableFieldContent"
      type="text"
      @input="emitContent" >

    <input
      v-if="fieldType === 'number'"
      v-model.number="editableFieldContent"
      type="number"
      @input="emitContent" >

    <input
      v-if="fieldType === 'boolean'"
      v-model="editableFieldContent"
      type="checkbox"
      @input="emitContent" >

    <div
      v-if="fieldType === 'object'"
      :class="`${fieldKey}-sub-field`" >
      <JSONEditorField
        v-for="(subField, subFieldKey) in editableFieldContent"
        :key="`${fieldKey}.${subFieldKey}`"
        :bus="bus"
        :fieldContent="subField"
        :fieldKey="`${fieldKey}.${subFieldKey}`"
        :fontSize="calculateNewFontSize()" />
    </div>
  </div>
</template>

<script>
import formatString from './format-strings';

export default {
  name: 'JSONEditorField',

  data: () => ({
    className: 'json-edit-field',
    editableFieldContent: {},
    fieldType: '',
  }),

  props: {
    fieldContent: {
      type: [Object, Array, String, Number, Boolean],
      default: () => {},
    },

    fieldKey: {
      type: [String, Number],
      default: 0,
    },

    fontSize: {
      type: String,
      default: '1rem',
    },

    bus: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    availableTypes() {
      return ['boolean', 'number', 'object', 'string'];
    },

    getFieldType(type) {
      // eslint-disable-next-line
      if (typeof this.editableFieldContent === type) {
        return true;
      }
      return false;
    },

    calculateNewFontSize() {
      let fontValue = parseFloat(this.fontSize.replace('rem', ''));

      fontValue -= 0.075;
      return `${fontValue}rem`;
    },

    formatName(string) {
      return formatString(string);
    },

    emitContent() {
      const toEmit = {
        content: this.editableFieldContent,
        fieldKey: this.fieldKey,
      };

      this.$nextTick(() => {
        this.bus.$emit('bus-emit', toEmit);
      });
    },
  },

  created() {
    this.editableFieldContent = JSON.parse(JSON.stringify(this.fieldContent));

    this.$nextTick(() => {
      const types = this.availableTypes();

      types.forEach((type) => {
        if (this.getFieldType(type)) {
          this.fieldType = type;
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.json-edit-field {
  input {
    margin: 1rem 0;
  }
}
</style>
