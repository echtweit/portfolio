import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-744fccd2.mjs';
import { useSSRContext, ref, defineComponent, mergeProps, createElementBlock, withCtx, createVNode, createTextVNode } from 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/vue/server-renderer/index.mjs';
import { u as useHead, _ as _export_sfc } from '../server.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/h3/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/devalue/index.js';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/destr/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/hookable/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/scule/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/klona/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/defu/dist/defu.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/ohash/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/radix3/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/unctx/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/unhead/dist/index.mjs';
import 'file:///Users/jprecht/Documents/Projects/Portfolio/portfolio/node_modules/@unhead/shared/dist/index.mjs';

const _imports_0 = "" + publicAssetsURL("img/scalar.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup() {
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxtLink = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}><div class="header-row">`);
  _push(ssrRenderComponent(_component_nuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="ident"${ssrRenderAttr("src", _imports_0)} alt="ident"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            class: "ident",
            src: _imports_0,
            alt: "ident"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="menu"><nav><ul><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/portfolio" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Portfolio`);
      } else {
        return [
          createTextVNode("Portfolio")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav><span class="menu-toggle"></span></div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const title = ref("Jakob Precht - Frontend Dev");
const description = ref("This is my rag-tag portfolio");
useHead({
  title,
  meta: [{
    name: title,
    content: description
  }]
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppHeader = __nuxt_component_0;
  const _component_ClientOnly = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-6c1c9942.mjs.map
