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
  content: ['/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-accountability','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-admin','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-api','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-assemblies','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-blogs','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-budgets','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-comments','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-conferences','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-consultations','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-core','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-debates','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-dev','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-elections','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-forms','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-generators','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-initiatives','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-meetings','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-pages','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-participatory_processes','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-proposals','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-sortitions','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-surveys','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-system','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-templates','/home/hugo/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-04e202c4dc42/decidim-verifications','.'].flatMap(directory => [
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
        DEFAULT: "#C0C6CC",
        2: "#576075",
        3: "#242424"
      },
      background: {
        DEFAULT: "#FAFBFC",
        2: "#F8F8F8",
        3: "#F3F4F7",
        4: "#EFEFEF",
        // 60% opacity
        5: "#E4EEFF99"
      },
      border: {
        DEFAULT: "#C0C6CC",
        2: "#F3F4F7",
        3: "#E1E5EF"
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
