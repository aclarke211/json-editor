<template>
  <div class="jsonPreview__container">
    <h1>JSON Preview</h1>
    <ContentLoop
      :content="previewContent"
      :components="componentDefs"
    />
  </div>
</template>

<script>
import ContentLoop from '@jdplc/jd-components/sfc/ContentLoop.vue';

// Footpatrol Components
import MainBannerFootpatrol from './MainBannerFootpatrol.vue';
import SpotListFootpatrol from './SpotListFootpatrol.vue';

export default {
  name: 'jsonPreview',

  components: {
    ContentLoop,
  },

  data: () => ({
    componentDefs: { MainBannerFootpatrol, SpotListFootpatrol },
  }),

  props: {
    previewContent: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
  .jsonPreview__container {
    max-height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
