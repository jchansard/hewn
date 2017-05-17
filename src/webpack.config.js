// const PHASER_DIR = path.join(__dirname, '/node_modules/phaser/');
//
// const config = {
//   resolve: {
//     extensions: ['.js', '.jsx', '.json'],
//     modules: [APP_DIR, 'node_modules'],
//     alias: {
//       phaser: path.join(PHASER_DIR, 'build/custom/phaser-split.js'),
//       pixi: path.join(PHASER_DIR, 'build/custom/pixi.js'),
//       p2: path.join(PHASER_DIR, 'build/custom/p2.js'),
//     },
//   },
//   module: {
//     rules: [
//       {
//         test: /pixi\.js/,
//         use: [{
//           loader: 'expose-loader',
//           options: 'PIXI',
//         }],
//       },
//       {
//         test: /phaser-split\.js$/,
//         use: [{
//           loader: 'expose-loader',
//           options: 'Phaser',
//         }],
//       },
//       {
//         test: /p2\.js/,
//         use: [{
//           loader: 'expose-loader',
//           options: 'p2',
//         }],
//       },
//     ],
//   },
// };
//
// module.exports = config;
const phaserModulePath = path.join(__dirname, '/node_modules/phaser/');

module.exports = {
    module: {
        loaders: [
            { test: /pixi\.js/, loader: 'expose?PIXI' },
            { test: /phaser-split\.js$/, loader: 'expose?Phaser' },
            { test: /p2\.js/, loader: 'expose?p2' },
        ]
    },
    resolve: {
        alias: {
            'phaser': path.join(phaserModulePath, 'build/custom/phaser-split.js'),
            'pixi': path.join(phaserModulePath, 'build/custom/pixi.js'),
            'p2': path.join(phaserModulePath, 'build/custom/p2.js')

        }
    }
}
