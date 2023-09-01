import { Cloudinary } from "cloudinary-core";

export default function urlGenerator(src: string) {
  if (!src) return {};
  const filetype = src.split(".").pop();
  const isVideo = filetype === "mov" || filetype === "mp4";

  const srcSplit = src.split("/");
  const urlIndex = srcSplit.findIndex((e: any) => e === "upload");

  var last = "";
  for (let i = urlIndex + 1; i < srcSplit.length; i++) {
    last = `${last}${last !== "" ? "/" : ""}${srcSplit[i]}`;
  }

  //const last = src.substring(src.lastIndexOf("/") + 1, src.length);
  const name = last.substring(0, last.lastIndexOf("."));
  const cloudName = src.split("/")[3];

  return { cloudName, filetype, name, isVideo };
}

export function mediaResize(src: any, allOptions: any = {}) {
  if (!src) return {};
  const { type, ...options } = allOptions;

  const { cloudName, name, isVideo }: any = urlGenerator(src);
  var cl = new Cloudinary({ cloud_name: cloudName, secure: false });

  var url = "";
  if (src.indexOf("cloud") === -1) {
    url = src;
  } else if (type === "video") {
    url = cl.video_url(name, {
      width: 620 * 2,
      crop: "pad",
      format: "mp4",
      protocol: "https:",
      ...options,
    });
  } else if (isVideo) {
    url = cl.video_url(name, {
      width: 620 * 2,
      crop: "pad",
      format: "jpg",
      protocol: "https:",
      ...options,
    });
  } else {
    url = cl.url(name, {
      width: 620 * 2,
      crop: "pad",
      format: "jpg",
      protocol: "https:",
      ...options,
    });
  }

  return { cloudName, src: url, isVideo };
}
