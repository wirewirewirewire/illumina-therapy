import type { Field, SelectField } from 'payload/types'

import deepMerge from '../utilities/deepMerge'

interface Args {
  overrides?: Partial<SelectField>
}

export const width = ({ overrides = {} }: Args): Field =>
  deepMerge(
    {
      name: 'width',
      type: 'select',
      defaultValue: 'default',
      options: [
        {
          label: 'Full',
          value: 'default',
        },
        {
          label: 'One-Third',
          value: 'onethird',
        },
        {
          label: 'Half',
          value: 'half',
        },
      ],
      admin: {
        width: '30%',
      },
    },
    overrides,
  )
