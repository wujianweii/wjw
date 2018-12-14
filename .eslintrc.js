// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": "off",
    "max-len": "off",
    "no-trailing-spaces": "off",
    "require-valid-default-prop": "off",
    'no-console': 'off',
    'comma-dangle': 'off',
    'new-cap': 'off',
    'no-shadow': 'off',
    'no-bitwise': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-alert': 'off',
    'no-useless-return': 'off',
    'arrow-parens': 'off',
    'prefer-template': 'off',
    'no-extra-boolean-cast': 'off',
    'no-lonely-if': 'off',
    'no-plusplus': 'off',
    'operator-assignment': 'off',
    'no-mixed-operators': 'off',
    'no-unresolved': 'off',
    'no-unused-vars': 'off',
    'func-names': 'off',
    'no-void': 'off',
    'no-restricted-properties': 'off',
    'linebreak-style': 'off',
    'import/no-unresolved': 'off',
    'prefer-destructuring': 'off',
    'object-curly-newline': 'off'
  }
}
