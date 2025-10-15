import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
    configuration: {
        pageTitle: "mia.cx Doc",
        pageTitleSuffix: " | mia.cx Docs",
        enableSPA: true,
        enablePopovers: true,
        analytics: {
            provider: "plausible",
            host: "https://plausible.mia.cx",
        },
        locale: "en-US",
        baseUrl: "docs.mia.cx",
        ignorePatterns: ["00 Private", "99 Meta", ".obsidian"],
        defaultDateType: "modified",
        theme: {
            fontOrigin: "googleFonts",
            cdnCaching: true,
            typography: {
                title: "Archivo Black",
                header: "Archivo",
                body: "Archivo",
                code: "Google Sans Code",
            },
            colors: {
                lightMode: {
                    light: "#eff1f5", // catppuccin base
                    lightgray: "#e6e9ef", // catppuccin overlay2
                    gray: "#7c7f93", // catppuccin overlay2
                    darkgray: "#4c4f69", // catppuccin text
                    dark: "#4c4f69", // catppuccin text
                    secondary: "#40a02b", // catppuccin green
                    tertiary: "#179299", // catppuccin teal
                    highlight: "rgba(124, 127, 147, 0.2)", // catppuccin overlay2
                    textHighlight: "rgba(64, 160, 43, 0.2)", // catppuccin green
                },
                darkMode: {
                    light: "#1e1e2e", // catppuccin base
                    lightgray: "#181825", // catppuccin overlay2
                    gray: "#9399b2", // catppuccin overlay2
                    darkgray: "#cdd6f4", // catppuccin text
                    dark: "#cdd6f4", // catppuccin text
                    secondary: "#a6e3a1", // catppuccin green
                    tertiary: "#94e2d5", // catppuccin teal
                    highlight: "rgba(147, 153, 178, 0.2)", // catppuccin overlay2
                    textHighlight: "rgba(166, 227, 161, 0.2)", // catppuccin green
                },
            },
        },
    },
    plugins: {
        transformers: [
            Plugin.FrontMatter(),
            Plugin.CreatedModifiedDate({
                priority: ["frontmatter", "git", "filesystem"],
            }),
            Plugin.SyntaxHighlighting({
                theme: {
                    light: "github-light",
                    dark: "github-dark",
                },
                keepBackground: false,
            }),
            Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
            Plugin.GitHubFlavoredMarkdown(),
            Plugin.TableOfContents(),
            Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
            Plugin.Description(),
            Plugin.Latex({ renderEngine: "katex" }),
        ],
        filters: [Plugin.RemoveDrafts()],
        emitters: [
            Plugin.AliasRedirects(),
            Plugin.ComponentResources(),
            Plugin.ContentPage(),
            Plugin.FolderPage(),
            Plugin.TagPage(),
            Plugin.ContentIndex({
                enableSiteMap: true,
                enableRSS: true,
            }),
            Plugin.Assets(),
            Plugin.Static(),
            Plugin.Favicon(),
            Plugin.NotFoundPage(),
            // Comment out CustomOgImages to speed up build time
            Plugin.CustomOgImages(),
        ],
    },
}

export default config
