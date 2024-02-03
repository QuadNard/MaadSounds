


/** @type {import('next').NextConfig} */
const nextConfig = {
								reactStrictMode: true,
								images: {
																remotePatterns: [
																								{
																																protocol: 'http',
																																hostname: 'localhost',
																								},
																],
								},
								webpack(config, { isServer }) {
																if (!isServer) {
																								// We're in the browser build, so we can safely exclude the sharp module
																								config.externals.push('sharp');
																}

																// shader support
																config.module.rules.push({
																								test: /\.(glsl|vs|fs|vert|frag)$/,
																								exclude: /node_modules/,
																								use: ['ts-shader-loader'],
																});

																return config;
								},
};

module.exports = (nextConfig);
