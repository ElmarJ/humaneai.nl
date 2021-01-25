const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Bèta Gamma-blog Human(e) AI 2021", // <title>
  shortSiteTitle: "Human(e) AI 2021", // <title> ending for posts and pages
  siteDescription: "Een verzameling van blogs over AI, geschreven door studenten van de opleiding Bèta Gamma aan de Universiteit van Amsterdam",
  siteUrl: "https://humaneai.nl",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "elmar jansen",
  authorTwitterAccount: "elmarj",
  // info
  infoTitle: "Human(e) AI",
  infoTitleNote: "Blog 2021",
  // manifest.json
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "e.f.jansen@uva.nl",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/elmarj/humaneai.nl" },
    { name: "facebook", url: "https://www.facebook.com/groups/688688937901464" }
  ]
};
