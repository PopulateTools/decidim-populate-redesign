const { inherit, current, transparent, white } = require("tailwindcss/colors")

const withOpacity =
  (variable) =>
  ({ opacityValue }) =>
    opacityValue === undefined
      ? `rgb(var(${variable}))`
      : `rgb(var(${variable}) / ${opacityValue})`;

module.exports = {
  // This content is generated automatically by decidim:webpacker:install task, it
  // shouldn't be updated manually.
  // The array must contain all the decidim modules active in the application
  content: ['/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-accountability','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-admin','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-api','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-assemblies','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-blogs','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-budgets','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-comments','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-conferences','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-consultations','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-core','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-debates','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-dev','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-elections','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-forms','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-generators','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-initiatives','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-meetings','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-pages','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-participatory_processes','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-proposals','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-sortitions','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-surveys','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-system','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-templates','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-b205e3b7de2b/decidim-verifications','.'].flatMap(directory => [
    `${directory}/app/views/**/*.html.erb`,
    `${directory}/app/cells/**/*.erb`,
    `${directory}/app/helpers/**/*.rb`,
    `${directory}/app/packs/**/*.js`,
    `${directory}/lib/**/*.rb`
  ]),
  // Comment out the next line to disable purging the tailwind styles
  // safelist: [{ pattern: /.*/ }],
  theme: {
    colors: {
      inherit,
      current,
      transparent,
      white,
      primary: withOpacity("--primary-rgb"),
      secondary: withOpacity("--secondary-rgb"),
      tertiary: withOpacity("--tertiary-rgb"),
      green: withOpacity("--green-rgb"),
      red: withOpacity("--red-rgb"),
      yellow: withOpacity("--yellow-rgb"),
      black: "#020203",
      gray: {
        DEFAULT: "#6B72804D", // 30% opacity
        2: "#3E4C5C",
        3: "#E1E5EF"
      },
      background: {
        DEFAULT: "#F3F4F7",
        2: "#FAFAFA",
        3: "#EFEFEF",
        4: "#E4EEFF99" // 60% opacity
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "4rem"
      }
    },
    fontFamily: {
      sans: ["Source Sans Pro", "ui-sans-serif", "system-ui", "sans-serif"]
    },
    fontSize: {
      xs: ["13px", "16px"],
      sm: ["14px", "18px"],
      md: ["16px", "20px"],
      lg: ["18px", "23px"],
      xl: ["20px", "25px"]
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
