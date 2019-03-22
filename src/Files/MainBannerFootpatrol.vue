<template>
  <div
    v-if="images"
    :class="['main-banner__container', windowSize.device]" >

    <Card
      :content="{ url, title, images, ctas }" >
      <div class="slot__container">
        <TextModule
          v-if="title"
          :text="title"
          :type="'title'" />
        <TextModule
          v-if="subtitle"
          :text="subtitle"
          :type="'subtitle'" />
      </div>
    </Card>
  </div>
</template>

<script>
import windowSize from '@jdplc/jd-components/sfc/utils/windowSize';
import TextModule from '@jdplc/jd-components/sfc/footpatrol/modules/TextModuleFootpatrol.vue';
import Card from '@jdplc/jd-components/sfc/footpatrol/CardFootpatrol.vue';

export default {
  name: 'MainBannerFootpatrol',

  components: {
    Card,
    TextModule,
  },

  mixins: [windowSize],
  props: {
    url: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },

    images: {
      type: Object,
      default: () => ({
        mobile: '',
        desktop: '',
      }),
    },

    ctas: {
      type: Array,
      default: () => ([
        {
          cta_url: '',
          cta_text: '',
        },
      ]),
    },
  },
};
</script>

<style lang="scss">
.main-banner__container {
  .card__container {
    position: relative;
    margin: 1rem 0;
  }

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

    &:hover {
      border-color: white;
    }

    @media only screen and (min-width: 1025px) {
      border-color: transparent;
    }
  }

  &.desktop,
  &.tablet {
    .card__container {
      margin: 0;
    }

    div.img-container {
      padding-bottom: 43.5%;
    }
  }

  &.mobile {
    .cta__link {
      color: white;
      border-color: white;
    }

    div.img-container {
      padding-bottom: 150%;

      /* Target only IE */
      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        padding-bottom: 43.5%;
      }
    }
  }
}
</style>
