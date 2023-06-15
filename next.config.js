/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/insights2",
                destination: "/",
                permanent: true,
            },
            {
                source: "/competencies2",
                destination: "/",
                permanent: true,
            },
            {
                source: "/contact2",
                destination: "/",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
