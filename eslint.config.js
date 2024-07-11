import antfu from '@antfu/eslint-config'

export default antfu(
  {},
  {
    rules: {
      'ts/no-redeclare': ['off'],
      'ts/consistent-type-definitions': ['off'],
      'import/order': [
        'warn',
        { groups: ['builtin', 'external'], warnOnUnassignedImports: true },
      ],
    },
  },
)
