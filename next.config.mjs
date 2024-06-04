import CopyPlugin from 'copy-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { isServer }) {
        if (isServer) {
            console.log('running webpack config for server');
            config.plugins.push(new CopyPlugin({
                patterns: [
                    { from: "src/app/binaryFile.copyme", to: "[path][name][ext]" },
                ]
            }))
        }
        return config
    }
};

export default nextConfig;
