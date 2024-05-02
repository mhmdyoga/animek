/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.myanimelist.net',
            },
        ]
    },
    typescript: {
        ignoreBuildErrors: true
    }
};

export default nextConfig;
