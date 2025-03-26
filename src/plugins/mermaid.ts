import type { Plugin } from "unified";
import type { Root as MdRoot, Html as MdHtml, Node as MdNode } from "mdast";
import "remark-mdx"; // extra mdx ast types
import { visit, EXIT } from "unist-util-visit";

export const mermaidRemarkPlugin: Plugin<[], MdRoot> = () => {
  return function (tree: MdRoot) {
    let importsMermaidComponent = false;
    // check for an import from #components/Mermaid
    visit(tree, "mdxjsEsm", (node) => {
      if (node.value.includes("#components/Mermaid")) {
        importsMermaidComponent = true;
        return EXIT;
      }
    });
    if (!importsMermaidComponent) return;
    // if we found a matching import, process mermaid code blocks
    visit(tree, "code", (node) => {
      if (node.lang === "mermaid") {
        (node as MdNode).type = "html";
        (node as MdNode as MdHtml).value =
          `<mermaid-diagram><pre class="mermaid not-prose">${node.value}</pre></mermaid-diagram>`;
      }
    });
  };
};
