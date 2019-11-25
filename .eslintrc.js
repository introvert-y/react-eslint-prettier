module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended"],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/forbid-prop-types": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/interactive-supports-focus": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/no-array-index-key": "off",
    "react/jsx-props-no-spreading": "off",
    "no-console": "off"
  },
  env: {
    browser: true
  }
};
