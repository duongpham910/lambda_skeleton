module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "10.19.0"
        }
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ]
}
