import remarkMdx from "remark-mdx";
import { slateToRemark } from "remark-slate-transformer";
import { unified } from "unified";
import stringify from "remark-stringify";

const heading = (node: any, next: any) => ({
  type: "heading",
  depth: node.level,
  children: next(node.children),
});

const h1 = (node: any, next: any) => ({
  type: "heading",
  depth: 1,
  children: next(node.children),
});

const h2 = (node: any, next: any) => ({
  type: "heading",
  depth: 2,
  children: next(node.children),
});

const h3 = (node: any, next: any) => ({
  type: "heading",
  depth: 3,
  children: next(node.children),
});

const ul = (node: any, next: any) => ({
  type: "list",
  depth: node.depth,
  //ordered: true,
  //start: 1,
  spread: false,

  children: next(node.children),
});

const li = (node: any, next: any) => ({
  type: "listItem",
  depth: node.depth,
  children: next(node.children),
});

const link = (node: any, next: any) => ({
  type: "link",
  depth: node.depth,
  children: next(node.children),
});

const code = (node: any, next: any) => {
  console.log("codeddddd", node);
  return {
    type: "heading",
    depth: node.level,
    children: next(node.children),
  };
};

const overrides = {
  layout: (node: any, next) => ({
    type: "mdxJsxFlowElement",
    name: "Layout",
    attributes: [{ type: "mdxJsxAttribute", name: "x", value: "y" }],
    children: next(node.children),
  }),
  heading: heading,
  h1,
  h2,
  h3,
  ul,
  li,
  link,
  "custom-code": code,
  "layout-area": (node: any, next: any) => ({
    type: "mdxJsxFlowElement",
    depth: node.dep,
    children: next(node.children),
    bar: "ssdd",
    name: "LayoutElement",
  }),
  "component-block": (node: any, next: any) => {
    const attributes = JSON.stringify(node);
    return {
      type: "mdxJsxFlowElement",
      id: "ssdd",
      attributes: [
        {
          type: "mdxJsxExpressionAttribute",
          value: `...${JSON.stringify(node.props)}`,
        },
      ],
      name: node.component
        ? node.component[0].toUpperCase`` + node.component.substr`1`
        : "cloudinaryImage",
    };
  },
};

function cleanContent(content, level = 0) {
  const contentClean = content.map((item: any) => {
    var children = item.children;
    if (item.children) {
      children = cleanContent(item.children, level + 1);
    }
    if (item.type === "blockquote") {
      console.log("item", item.children[0].text);
      return {
        text: item.children[0].text,
        //type: "custom-code",
        //children: [{ text: "<Button>Hello</Button>" }],
      };
    }
    if (item.code) {
      return {
        ...item,
        text: undefined,
        type: "h1",
        children: [{ text: "<Button>Hello</Button>" }],
      };
    }
    if (!item.type && level === 0) {
      return {
        ...item,
        type: "paragraph",
      };
    }
    return { ...item, children };
  });
  return contentClean;
}

export function slateToMdx(content: any) {
  const processor = unified()
    .use(slateToRemark, {
      overrides,
    })
    //@ts-ignore
    .use(remarkMdx)
    .use(stringify);

  let text = "text";
  if (content) {
    const contentClean = cleanContent(content);

    console.log("contentClean", JSON.stringify(contentClean));

    let ast = processor.runSync({
      type: "root",
      children: contentClean,
    });

    text = processor.stringify(ast);

    //text = text.replaceAll(`\\<`, "<");

    console.log("text", text);
  }
  return text;
}

function removeTags(text: any) {
  const regex = /(<\/?s>)|(<[^>]*>)/g; // Group 1 OR Group 2
  return text.replace(regex, (_: any, g1: any) => g1 || "");
}

export function slateToText(content) {
  const processor = unified()
    .use(slateToRemark, {
      overrides,
    })
    //@ts-ignore
    .use(remarkMdx)
    .use(stringify);
  /*.use(stringify)*/ let text = "text";
  if (content) {
    const ast = processor.runSync({
      type: "root",
      children: content,
    });
    text = processor.stringify(ast);
    text = removeTags(text);
    text = text.replace(/\n/g, " ");
  }
  return text;
}
