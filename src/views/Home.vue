<template>
  <div class="home">
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
        _component: 'SpotListFootpatrol',
        content: {
          spots: [
            {
              title: 'Spot Title',
              subtitle: 'Spot Subtitle',
              url: '/spot-url',
              images: {
                desktop: 'https://i1.adis.ws/i/jpl/r4_content-ab316d3e1395f110e7d562a1394b80a3',
                mobile: 'https://i1.adis.ws/i/jpl/r4_mobile-1c0f04a5b740314e3ed870ad0319ba49',
              },
              ctas: [
                {
                  cta_url: '/spot-cta-1',
                  cta_text: 'Spot CTA 1',
                },
              ],
            },
            {
              title: 'Spot Title',
              subtitle: 'Spot Subtitle',
              url: '/spot-url',
              images: {
                desktop: 'https://i1.adis.ws/i/jpl/raf_content-c2d9eb3c7f3a2693bf4d4edbf4c38bc9',
                mobile: 'https://i1.adis.ws/i/jpl/raf_mobile-917650e96bee73fb918d8cab78a3bef3',
              },
              ctas: [
                {
                  cta_url: '/spot-cta-1',
                  cta_text: 'Spot CTA 1',
                },
              ],
            },
            {
              title: 'Spot Title',
              subtitle: 'Spot Subtitle',
              url: '/spot-url',
              images: {
                desktop:
                  'https://i1.adis.ws/i/jpl/spezial_content-2368eb7d74ac1def5c0d799b3f563b06',
                mobile:
                  'https://i1.adis.ws/i/jpl/spezial_mobile-15d16fb5428ad1dccf53eacbb9b77011',
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
      {
        _component: 'MainBannerFootpatrol',
        _identifier: 'main-banner-container',
        content: {
          url: '/test-url',
          title: 'Banner Title',
          subtitle: 'Banner Subtitle',
          images: {
            desktop: 'https://i1.adis.ws/i/jpl/y3_banner-69a3bbdb3a81708772da33a393d261bb',
            mobile: 'https://i1.adis.ws/i/jpl/y3_mobile-87515bc88f1064c8886dcfb97025eaf9',
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
    ],
  }),
};
</script>
