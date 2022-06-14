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
  content: ['/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-accountability','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-admin','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-api','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-assemblies','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-blogs','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-budgets','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-comments','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-conferences','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-consultations','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-core','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-debates','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-dev','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-elections','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-forms','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-generators','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-initiatives','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-meetings','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-pages','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-participatory_processes','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-proposals','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-sortitions','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-surveys','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-system','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-templates','/Users/fernando/.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-5eb6050bfad2/decidim-verifications','.'].flatMap(directory => [
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
