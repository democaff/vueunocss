import { createRouter, createWebHistory } from "vue-router";

type ComponentKey = "props" | "customEvent" | "mitt" | "vModel";

// Type for a route object
interface Route {
  link: string;
  name: ComponentKey; // Use ComponentKey type here
}

// Example routes array
const routes: Route[] = [
  { link: "/", name: "props" },
  { link: "/custom-event", name: "customEvent" },
  { link: "/mitt", name: "mitt" },
  { link: "/v-model", name: "vModel" },
];

// Component map with explicit return type definitions
const componentMap: Record<
  ComponentKey,
  () => Promise<typeof import("*.vue")>
> = {
  props: () => import("../views/01_props/index.vue"),
  customEvent: () => import("../views/02_custom-event/index.vue"),
  mitt: () => import("../views/03_mitt/index.vue"),
  vModel: () => import("../views/04_v-model/index.vue"),
};

const routerRoutes = routes.map((route) => ({
  path: route.link,
  name: route.name,
  component: componentMap[route.name], // Now this is type-safe
}));

// 创建并导出路由器实例
const router = createRouter({
  history: createWebHistory(),
  routes: routerRoutes,
});

export default router;
