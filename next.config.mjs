import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    domains: ["flagcdn.com"], // Use 'domains' for specifying allowed domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        // port: "", // This line is not necessary for standard ports
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
