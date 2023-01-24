import { useEffect, useRef } from "react";
import Prism from "prismjs";

// =================================
// Offical "prismjs" themes
// =================================

// import "prismjs/themes/prism-coy.css";
// import "prismjs/themes/prism-dark.css";
// import "prismjs/themes/prism-funky.css";
// import "prismjs/themes/prism-okaidia.css";
// import "prismjs/themes/prism-solarizedlight.css";
// import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/themes/prism-twilight.css";
// import "prismjs/themes/prism.css";

// =================================
// additional "prism-themes" themes
// =================================

//import "prism-themes/themes/prism-a11y-dark.min.css";
// import "prism-themes/themes/prism-atom-dark.min.css";
// import "prism-themes/themes/prism-base16-ateliersulphurpool.light.min.css";
// import "prism-themes/themes/prism-cb.min.css";
// import "prism-themes/themes/prism-coldark-cold.min.css";
// import "prism-themes/themes/prism-coldark-dark.min.css";
// import "prism-themes/themes/prism-coy-without-shadows.min.css";
// import "prism-themes/themes/prism-darcula.min.css";
// import "prism-themes/themes/prism-dracula.min.css";
// import "prism-themes/themes/prism-duotone-dark.min.css";
// import "prism-themes/themes/prism-duotone-earth.min.css";
// import "prism-themes/themes/prism-duotone-forest.min.css";
// import "prism-themes/themes/prism-duotone-light.min.css";
// import "prism-themes/themes/prism-duotone-sea.min.css";
import "prism-themes/themes/prism-duotone-space.min.css";
// import "prism-themes/themes/prism-ghcolors.min.css";
// import "prism-themes/themes/prism-gruvbox-dark.min.css";
// import "prism-themes/themes/prism-gruvbox-light.min.css";
// import "prism-themes/themes/prism-holi-theme.min.css";
// import "prism-themes/themes/prism-hopscotch.min.css";
// import "prism-themes/themes/prism-lucario.min.css";
// import "prism-themes/themes/prism-material-dark.min.css";
// import "prism-themes/themes/prism-material-light.min.css";
// import "prism-themes/themes/prism-material-oceanic.min.css";
// import "prism-themes/themes/prism-night-owl.min.css";
// import "prism-themes/themes/prism-nord.min.css";
// import "prism-themes/themes/prism-one-dark.min.css";
// import "prism-themes/themes/prism-one-light.min.css";
// import "prism-themes/themes/prism-pojoaque.min.css";
// import "prism-themes/themes/prism-shades-of-purple.min.css";
// import "prism-themes/themes/prism-solarized-dark-atom.min.css";
// import "prism-themes/themes/prism-synthwave84.min.css";
// import "prism-themes/themes/prism-vs.min.css";
// import "prism-themes/themes/prism-vsc-dark-plus.min.css";
// import "prism-themes/themes/prism-xonokai.min.css";
// import "prism-themes/themes/prism-z-touch.min.css";

// =================================
// syntax highliher enabler
// render it once per app
// =================================

export const CodeSyntaxHighlighterEnabler = () => {
  let done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    Prism.highlightAll();
    done.current = true;
  }, []);

  return null;
};

// =================================
// reusable code component
// =================================

export const Code = ({
  children,
  language,
}: {
  children: React.ReactNode;
  language: string;
}) => (
  <pre>
    <code className={`language-${language} min-w-0`}>
      {typeof children === "string" ? children.trim() : children}
    </code>
  </pre>
);
