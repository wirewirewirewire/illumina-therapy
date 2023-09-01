/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    pages: Page;
    tags: Tag;
    media: Media;
  };
  globals: {
    header: Header;
    footer: Footer;
  };
}
export interface User {
  id: string;
  name?: string;
  roles?: ('admin' | 'user')[];
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Page {
  id: string;
  title: string;
  publishedDate?: string;
  hero?: {
    media?: string | Media;
    private?: boolean;
    tags?: {
      tag?: string | Tag;
      id?: string;
    }[];
  };
  layout: (
    | {
        media?: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'hero';
      }
    | {
        title?: string;
        'Text 1'?: {
          [k: string]: unknown;
        }[];
        'Text 2'?: {
          [k: string]: unknown;
        }[];
        'Text 3'?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'list';
      }
    | {
        title?: string;
        'Text 1'?: {
          [k: string]: unknown;
        }[];
        media?: string | Media;
        'Text 2'?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'double';
      }
    | {
        ctaBackgroundColor?: 'light' | 'dark';
        richText: {
          [k: string]: unknown;
        }[];
        links?: {
          link: {
            style?: 'link' | 'button';
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        richText: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        enableIntro?: boolean;
        introContent: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'formBlock';
      }
    | {
        width?: 'default' | 'onethird' | 'half';
        media?: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        mediaBlockBackgroundColor?: 'light' | 'dark';
        position?: 'default' | 'fullscreen';
        kind?: 'default' | 'center' | 'left' | 'imageLeft' | 'imageRight';
        richText?: {
          [k: string]: unknown;
        }[];
        media?: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'section';
      }
  )[];
  slug?: string;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Media {
  id: string;
  alt: string;
  caption?: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface Tag {
  id: string;
  title: string;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Header {
  id: string;
  intro?: {
    [k: string]: unknown;
  }[];
  navItems?: {
    link: {
      style?: 'link' | 'button';
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        value: string | Page;
        relationTo: 'pages';
      };
      url: string;
      label: string;
    };
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Footer {
  id: string;
  navItems?: {
    link: {
      style?: 'link' | 'button';
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        value: string | Page;
        relationTo: 'pages';
      };
      url: string;
      label: string;
    };
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}