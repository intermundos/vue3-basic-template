const plugins = {}

plugins.tailwindcss = {}

if (process.env.NODE_ENV === 'production') {
    plugins.autoprefixer = {}
}

module.exports = {
    plugins
}
