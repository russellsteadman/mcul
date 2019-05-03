module.exports = {
    presets: [
        ['@babel/preset-env', {
            'targets': {
                'browsers': ['last 4 versions', 'safari >= 7', 'ie >= 9']
            }
        }]
    ],
    plugins: [
        require('@babel/plugin-proposal-object-rest-spread')
    ]
};