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
  content: ['/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-accountability','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-admin','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-api','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-assemblies','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-blogs','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-budgets','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-comments','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-conferences','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-consultations','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-core','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-debates','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-dev','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-elections','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-forms','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-generators','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-initiatives','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-meetings','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-pages','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-participatory_processes','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-proposals','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-sortitions','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-surveys','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-system','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-templates','/opt/hostedtoolcache/Ruby/3.0.2/x64/lib/ruby/gems/3.0.0/bundler/gems/decidim-5662560619ae/decidim-verifications','.'].flatMap(directory => [
    `${directory}/app/views/**/*.html.erb`,
    `${directory}/app/cells/**/*.erb`,
    `${directory}/app/helpers/**/*.rb`,
    `${directory}/app/packs/**/*.js`
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
