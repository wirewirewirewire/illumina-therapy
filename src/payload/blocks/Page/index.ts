import type { Block } from 'payload/types'

import { width } from '../../fields/width'

export const PageBlock: Block = {
  slug: 'pageBlock',
  fields: [
    {
      type: 'row', // required
      fields: [
        // required
        width({}),
        {
          name: 'page',
          relationTo: 'pages',
          type: 'relationship',
          admin: {
            width: '70%',
          },
        },
      ],
    },
  ],
}
