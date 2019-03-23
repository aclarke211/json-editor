<template>
  <div
    v-if="spots"
    :class="['spot-list__container', windowSize.device]" >

    <Card
      v-for="(spot, key) in spots"
      :content="spot"
      :key="key"
      class="spot" >
      <div
        class="slot__container">
        <TextModule
          v-if="spot.title"
          :text="spot.title"
          :type="'title'" />
        <TextModule
          v-if="spot.subtitle"
          :text="spot.subtitle"
          :type="'subtitle'" />
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '@jdplc/jd-components/sfc/footpatrol/CardFootpatrol.vue';
import windowSize from '@jdplc/jd-components/sfc/utils/windowSize';
import TextModule from '@jdplc/jd-components/sfc/footpatrol/modules/TextModuleFootpatrol.vue';

export default {
  name: 'SpotListFootpatrol',

  components: {
    TextModule,
    Card,
  },

  mixins: [windowSize],

  props: {
    spots: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.spot-list__container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .spot {
    margin-bottom: 1rem;
    position: relative;
    width: 100%;
  }

  .img-container {
    padding-bottom: 150%;
    overflow: hidden;
  }

  &.desktop,
  &.tablet {
    flex-direction: row;

    .img-container {
      padding-bottom: 136.5%;
    }
  }

  &.mobile {
    .card-data__container {
      position: absolute;
      bottom: 1.75rem;
      left: 50%;
      transform: translateX(-50%);
      color: white;
      width: 100%;
    }

    .cta__link {
      color: white;
      border-color: white;
    }
  }
}
</style>
