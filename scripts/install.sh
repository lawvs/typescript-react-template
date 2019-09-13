set -e

echo "start install..."

echo "install webpack..."
npm install --save-dev webpack webpack-cli webpack-merge webpack-dev-server

echo "install webpack plugin..."
npm install --save-dev html-webpack-plugin html-webpack-template copy-webpack-plugin clean-webpack-plugin

echo "install webpack loader..."
npm install --save-dev awesome-typescript-loader url-loader

echo "install success!"
