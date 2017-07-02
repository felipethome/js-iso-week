var OFF = 0;
var WARNING = 1;
var ERROR = 2;

module.exports = {
  'env': {
    'browser': true,
    'node': true,
  },

  'parserOptions': {
    'ecmaVersion': 6,
  },

  'extends': 'eslint:recommended',

  'globals': {
    'chrome': true,
    'Promise': true,
    '$': true,
    'Chart': true,
    'Storage': true,
    'Stats': true,
    'DateUtils': true,
    'StatsTest': true,
  },

  'rules': {
    'array-bracket-spacing': [ERROR, 'never'],
    'array-callback-return': ERROR,
    'brace-style': [ERROR, 'stroustrup', {'allowSingleLine': true}],
    'camelcase': ERROR,
    'comma-dangle': [ERROR, 'always-multiline'],
    'comma-spacing': [ERROR, {'before': false, 'after': true}],
    'dot-notation': ERROR,
    'eqeqeq': ERROR,
    'id-length': [OFF, {'min': 2, 'exceptions': ['e', 'i', 'j', 'k', '_']}],
    'indent': [ERROR, ERROR, {'SwitchCase': WARNING}],
    'key-spacing': [ERROR, {'beforeColon': false, 'afterColon': true}],
    'keyword-spacing': [ERROR, {'before': true, 'after': true}],
    'max-len': [ERROR, 80, 4, {'ignoreUrls': true}],
    'new-cap': [OFF, {'newIsCap': true, 'capIsNew': true}],
    'newline-per-chained-call': [ERROR, {'ignoreChainWithDepth': 3}],
    'no-array-constructor': ERROR,
    'no-cond-assign': ERROR,
    'no-console': [ERROR, {'allow': ['warn', 'error']}],
    'no-dupe-keys': ERROR,
    'no-dupe-args': ERROR,
    'no-implicit-coercion': ERROR,
    'no-loop-func': ERROR,
    'no-multiple-empty-lines': ERROR,
    'no-nested-ternary': ERROR,
    'no-new-func': ERROR,
    'no-new-object': ERROR,
    'no-param-reassign': ERROR,
    'no-shadow-restricted-names': ERROR,
    'no-shadow': ERROR,
    'no-trailing-spaces': ERROR,
    'no-undef': ERROR,
    'no-unreachable': ERROR,
    'no-unused-expressions': ERROR,
    'no-unused-vars': [ERROR, {'varsIgnorePattern': '^[A-Z].*[a-z]'}],
    'no-use-before-define': [OFF, {'functions': false, 'classes': false}],
    'object-curly-spacing': [ERROR, 'never'],
    'one-var': [ERROR, 'never'],
    'operator-linebreak': [ERROR, 'after'],
    'padded-blocks': [ERROR, 'never'],
    'prefer-rest-params': ERROR,
    'quotes': [ERROR, 'single', 'avoid-escape'],
    'quote-props': [ERROR, 'as-needed'],
    'semi': ERROR,
    'space-before-blocks': [ERROR, 'always'],
    'space-before-function-paren': [
      ERROR, {'anonymous': 'always', 'named': 'never'}
    ],
    'spaced-comment': [ERROR, 'always'],
    'space-infix-ops': ERROR,
    'space-in-parens': [ERROR, 'never'],
    'space-unary-ops': [ERROR, {'words': true, 'nonwords': false}],
    'wrap-iife': [ERROR, 'inside'],
  },
};