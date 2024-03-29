module.exports = {
  stories: ["../src/components/**/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve("babel-loader")
    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
    ]
    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve("@babel/plugin-proposal-class-properties"),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve("babel-plugin-remove-graphql-queries"),
    ]
    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint

    config.resolve.mainFields = ["browser", "module", "main"]

    config.module.rules.push({
      test: require.resolve("gatsby-link"),
      loaders: ["imports-loader?___loader=>{enqueue:function(){}}"],
    })

    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      exclude: /\.module\.css$/,
    })

    const rules = config.module.rules.map(rule => {
      if (rule.test.toString() !== "/\\.css$/") {
        return rule
      }

      const use = rule.use.map(u => {
        const { loader } = u

        if (!loader || !loader.includes("/css-loader/")) {
          return u
        }

        const options = {
          ...u.options,
          modules: true,
        }

        return {
          ...u,
          options,
        }
      })

      return {
        ...rule,
        use,
      }
    })

    return {
      ...config,
      module: {
        ...config.module,
        rules,
      },
    }

    // ignore gatsby-link's global `__loader` variable

    return config
  },
}
