/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const withTM = require("next-transpile-modules")([]);

module.exports = withTM({
  reactStrictMode: true,
  styledComponents: true,
  experimental: { esmExternals: true },
});
