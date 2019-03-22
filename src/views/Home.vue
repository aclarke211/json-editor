<template>
  <div class="home">
    <h2>This is the app running.</h2>
    <jsonEditorContainer :editorContent="contentForEditor" />
  </div>
</template>

<script>
import jsonEditorContainer from '../Files/jsonEditorContainer.vue';

export default {
  name: 'home',

  components: {
    jsonEditorContainer,
  },

  data: () => ({
    contentForEditor: [
      {
        _component: 'MainBannerFootpatrol',
        _identifier: 'main-banner-container',
        content: {
          url: '/test-url',
          title: 'Banner Title',
          subtitle: 'Banner Subtitle',
          images: {
            mobile:
              'https://i1.adis.ws/i/jpl/desktop_top_and_bottom_banner1-a732ecd2b8d480071acac2bd338feda5?qlt=70',
            desktop:
              'https://i1.adis.ws/i/jpl/mobile_banner_uk1-67adc9400f1fa02d77a9b21c9c17cbbc?qlt=80',
          },
          ctas: [
            {
              cta_url: '/cta-url-1',
              cta_text: 'CTA Text 1',
            },
            {
              cta_url: '/cta-url-2',
              cta_text: 'CTA Text 2',
            },
          ],
        },
      },
      {
        _component: 'SpotListFootpatrol',
        content: {
          spots: [
            {
              title: 'Spot Title',
              subtitle: 'Spot Subtitle',
              url: '/spot-url',
              images: {
                mobile:
                  'https://i1.adis.ws/i/jpl/mobile_banner_03-95c9041457e9680dde01524e692c8a0e?qlt=80',
                desktop:
                  'https://i1.adis.ws/i/jpl/desktop_top_and_bottom_banner_03-1feae2fd9ef468a3f0c39434280fd855?qlt=80',
              },
              ctas: [
                {
                  cta_url: '/spot-cta-1',
                  cta_text: 'Spot CTA 1',
                },
              ],
            },
          ],
        },
      },
    ],
  }),
};
</script>
