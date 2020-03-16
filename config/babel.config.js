module.exports = (asNode) => ({
    presets: [
        ['@babel/preset-env', {
            'targets': {
                'browsers': asNode ? ['maintained node versions'] : ['last 2 versions', '> .2%', 'not dead'],
            },
        }],
    ],
    plugins: [
        require('@babel/plugin-proposal-object-rest-spread'),
        require('@babel/plugin-proposal-class-properties'),
    ],
});