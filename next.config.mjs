/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:'painter.backend.bidhee.net',
                pathname:'**/*',
                protocol:'https',
            }
        ]
    }
};

export default nextConfig;
