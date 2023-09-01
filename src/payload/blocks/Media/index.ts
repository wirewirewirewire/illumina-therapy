import type { Block } from 'payload/types'

import { width } from '../../fields/width'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  fields: [
    {
      type: 'row', // required
      fields: [
        // required
        width({}),
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          admin: {
            width: '70%',
          },
        },
      ],
    },
  ],
}
