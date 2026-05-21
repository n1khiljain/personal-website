/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: [
        "resend",
        "@react-email/render",
    ],
    // images:{
    //     remotePatterns:[
    //         {
    //             protocol: 'https',
    //             hostname: 'cdn.jsdelivr.net',
    //         }
    //     ]
    // }
}

module.exports = nextConfig
