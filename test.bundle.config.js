const path = require('path');

// NOTE;
// If am using standart webpack config name, it will be recognized by Next.js
// and will use Babel instead of SWC compile.What I would like to avoid due to SWC is much faster.
// And Next.js is much better integratid with it.
module.exports = {
    entry: './index.ts',
    "mode": "development",
    "stats": "errors-only",
    "devtool": "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};