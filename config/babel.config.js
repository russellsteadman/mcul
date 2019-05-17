module.exports = (asNode) => ({
    presets: [
        ['@babel/preset-env', {
            'targets': {
                'browsers': asNode ? ['node >= 6'] : ['last 4 versions', 'safari >= 7', 'ie >= 9']
            }
        }]
    ],
    plugins: [
        require('@babel/plugin-proposal-object-rest-spread'),
        require('@babel/plugin-proposal-class-properties'),
        require('@babel/plugin-proposal-private-methods')
    ]
});