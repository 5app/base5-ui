module.exports = {
    "extends": ["5app", "plugin:react/recommended"],
    "rules": {
        "arrow-parens": [0, "as-needed"],
        "prefer-template": 0,
        "quote-props": [0, "as-needed"],
        "no-unused-vars": [2, {"ignoreRestSiblings": true}],

        "jsx-quotes": [2, "prefer-double"],
        "react/jsx-indent": [2, "tab"],
        "react/jsx-no-bind": [2, {"ignoreRefs": true}],
        "react/prop-types": 0
    },
    "settings": {
        "react": {
            "version": "16.4",
        }
    }
};