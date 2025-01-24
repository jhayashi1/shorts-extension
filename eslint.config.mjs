import react from 'eslint-plugin-react';
import parser from '@typescript-eslint/parser';
import TypeScriptESLint from '@typescript-eslint/eslint-plugin';

const commonRules = {
    quotes                : [2, 'single'],
    semi                  : [2, 'always'],
    'eol-last'            : 2,
    'no-trailing-spaces'  : 2,
    'no-multi-spaces'     : [2, {exceptions: {Property: true, TSPropertySignature: true}}],
    'quote-props'         : [2, 'as-needed'],
    'comma-spacing'       : [2, {before: false, after: true}],
    'object-curly-spacing': [2, 'never'],
    'object-curly-newline': [2, {
        ObjectExpression: {
            multiline: true, minProperties: 0, consistent: true,
        },
        ObjectPattern: {
            multiline: true, minProperties: 0, consistent: true,
        },
    }],
    'comma-dangle': [2, {
        arrays   : 'always-multiline',
        imports  : 'never',
        exports  : 'never',
        functions: 'never',
        objects  : 'always-multiline',
    }],
    'key-spacing': [2, {align: 'colon'}],
    'prefer-template': [2]
};

const typescriptRules = {
    ...TypeScriptESLint.configs.eslintRecommended,
    ...TypeScriptESLint.configs.recommendedTypeChecked,
    ...TypeScriptESLint.configs.strictTypeChecked,
    ...TypeScriptESLint.configs.stylisticTypeChecked,
    indent                                            : 2,
    'new-cap'                                         : [2, {capIsNew: false}],
    '@typescript-eslint/consistent-type-definitions'  : 2,
    '@typescript-eslint/consistent-type-exports'      : 2,
    '@typescript-eslint/consistent-type-imports'      : 2,
    '@typescript-eslint/explicit-function-return-type': [2, {
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        allowDirectConstAssertionInArrowFunctions           : true,
    }],
    '@typescript-eslint/naming-convention'           : 0,
    '@typescript-eslint/no-explicit-any'             : 2,
    '@typescript-eslint/no-extraneous-class'         : [2, {allowWithDecorator: true}],
    '@typescript-eslint/no-non-null-assertion'       : 1,
    'no-use-before-define'                           : 0,
    '@typescript-eslint/no-use-before-define'        : 0,
    '@typescript-eslint/no-unsafe-assignment'        : 1,
    '@typescript-eslint/no-unsafe-call'              : 1,
    'no-unused-expressions'                          : 0,
    '@typescript-eslint/no-unused-expressions'       : [2, {allowTernary: true}],
    '@typescript-eslint/no-unused-vars'              : 2,
    '@typescript-eslint/prefer-reduce-type-parameter': 0,
    '@typescript-eslint/promise-function-async'      : 2,
    'no-return-await'                                : 0,
    '@typescript-eslint/return-await'                : [2, 'always'],
};

const reactRules = {
    'react/jsx-first-prop-new-line'     : [2, 'multiline'],
    'react/jsx-max-props-per-line'      : [2, {when: 'always', maximum: 2}],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/jsx-curly-newline'           : [2, {multiline: 'consistent', singleline: 'consistent'}],
    'react/jsx-sort-props'              : [2,
        {
            callbacksLast       : true,
            shorthandFirst      : true,
            shorthandLast       : false,
            ignoreCase          : true,
            noSortAlphabetically: false,
        },
    ],
    'react/jsx-tag-spacing': [2,
        {
            beforeSelfClosing: 'always',
            afterOpening     : 'never',
            beforeClosing    : 'never',
        },
    ],
};

export default [{
    plugins: {
        react,
        '@typescript-eslint': TypeScriptESLint,
    },
    files          : ['**/*.js', '**/*.ts', '**/*.tsx'],
    languageOptions: {
        parser,
        parserOptions: {
            ecmaFeatures: {modules: true},
            ecmaVersion : 'latest',
            project     : './tsconfig.json',
        },
        ecmaVersion: 12,
        globals    : {
            browser      : true,
            commonjs     : true,
            es2021       : true,
            webextensions: true,
        },
    },
    rules: {
        ...commonRules,
        ...typescriptRules,
        ...reactRules,
    },
    ignores: ['dist/**', 'vite.config.ts'],
}];
