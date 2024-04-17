import { defineConfig } from "unocss";
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
});
