const { resolve } = require( 'path' )

const ROOT = process.cwd()

const paths = {
    '@config': 'config',
    '@':       'src',
    '@assets': 'src/@assets',
    '@core':   'src/@core',
    '@store':  'src/@core/store',
    '@ui':     'src/@ui',
}

/**
 * returns a map of paths for webpack
 * 'ALIAS': 'PATH'
 * '@': resolve( process.cwd(), 'src' )
 * @return {{}}
 */
function makeAliasForWebpack() {
    return Object.entries( paths ).reduce( ( result, [ alias, path ] ) => {
        result[ alias ] = resolve( ROOT, path )
        return result
    }, {} )
}

/**
 * returns an array of paths for vite
 * { find: '@', replacement: resolve( process.cwd(), 'src' ) }[]
 * @return {Array}
 */
function makeAliasForVite() {
    return Object.entries( paths ).reduce( ( result, [ alias, path ] ) => {
        result.push( { find: alias, replacement: resolve( ROOT, path ) } )
        return result
    }, [] )
}

module.exports = {
    paths,
    makeAliasForVite,
    makeAliasForWebpack
}
