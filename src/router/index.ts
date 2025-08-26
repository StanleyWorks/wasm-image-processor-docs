import { createRouter, createWebHistory } from "vue-router";
import HomeRoute from "@/pages/index.vue";
import BlurDemo from "@/pages/demos/blur.vue";
import ContrastDemo from "@/pages/demos/contrast.vue";
import HueRotateDemo from "@/pages/demos/hue_rotate.vue";
import InvertDemo from "@/pages/demos/invert.vue";
import ThumbnailDemo from "@/pages/demos/thumbnail.vue";
import FastBlurDemo from "@/pages/demos/fast_blur.vue";
import BrightenDemo from "@/pages/demos/brighten.vue";
import GrayscaleDemo from "@/pages/demos/grayscale.vue";
import CropDemo from "@/pages/demos/crop.vue";
import ResizeDemo from "@/pages/demos/resize.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeRoute,
    },
    {
      path: "/demos/blur",
      component: BlurDemo,
    },
    {
      path: "/demos/contrast",
      component: ContrastDemo,
    },
    {
      path: "/demos/hue-rotate",
      component: HueRotateDemo,
    },
    {
      path: "/demos/invert",
      component: InvertDemo,
    },
    {
      path: "/demos/thumbnail",
      component: ThumbnailDemo,
    },
      {
        path: "/demos/fast_blur",
        component: FastBlurDemo,
      },
      {
        path: "/demos/brighten",
        component: BrightenDemo,
      },
      {
        path: "/demos/grayscale",
        component: GrayscaleDemo,
      },
      {
        path: "/demos/crop",
        component: CropDemo,
      },
      {
        path: "/demos/resize",
        component: ResizeDemo,
      },
  ],
});

export default router;
