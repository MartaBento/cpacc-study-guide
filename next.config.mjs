import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    images: {
        domains: ["cdn.buymeacoffee.com"],
    },
};

export default withMDX(config);
