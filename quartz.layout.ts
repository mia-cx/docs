import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
    head: Component.Head(),
    header: [],
    afterBody: [
        // TODO set up giscus
        // Component.Comments({
        //     provider: "giscus",
        //     options: {
        //         repo: "mia-cx/docs",
        //         repoId: "R_kgDOP8-lsg",
        //         category: "Comments",
        //         categoryId: "DIC_kwDOP8-lss4CwTYz",
        //         themeUrl: "https://giscus.catppuccin.com/themes",
        //         lightTheme: "latte-green",
        //         darkTheme: "mocha-green",
        //         mapping: "pathname",
        //         strict: true,
        //         reactionsEnabled: true,
        //         inputPosition: "top",
        //         lang: "en",
        //     },
        // }),
    ],
    footer: Component.Footer({
        links: {
            GitHub: "https://github.com/mia-cx",
        },
    }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
    beforeBody: [
        Component.ConditionalRender({
            component: Component.Breadcrumbs(),
            condition: (page) => page.fileData.slug !== "index",
        }),
        Component.ArticleTitle(),
        Component.ContentMeta(),
        Component.TagList(),
    ],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Flex({
            components: [
                {
                    Component: Component.Search(),
                    grow: true,
                },
                { Component: Component.Darkmode() },
                { Component: Component.ReaderMode() },
            ],
        }),
        Component.Explorer({
            sortFn: (a, b) => {
                if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
                    return (a.sortName ?? a.displayName).localeCompare(b.sortName ?? b.displayName, undefined, {
                        numeric: true,
                        sensitivity: "base",
                    })
                }

                if (!a.isFolder && b.isFolder) {
                    return 1
                } else {
                    return -1
                }
            },
        }),
    ],
    right: [
        Component.Graph({
            localGraph: {
                depth: 1,
                enableRadial: false,
            },
            globalGraph: {
                repelForce: 1.0,
                linkDistance: 15,
                enableRadial: false,
            },
        }),
        Component.DesktopOnly(Component.TableOfContents()),
        Component.Backlinks(),
        Component.RecentNotes({
            title: "Recently updated",
            limit: 5,
        }),
    ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
    beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Flex({
            components: [
                {
                    Component: Component.Search(),
                    grow: true,
                },
                { Component: Component.Darkmode() },
                { Component: Component.ReaderMode() },
            ],
        }),
        Component.Explorer({
            sortFn: (a, b) => {
                if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
                    return (a.sortName ?? a.displayName).localeCompare(b.sortName ?? b.displayName, undefined, {
                        numeric: true,
                        sensitivity: "base",
                    })
                }

                if (!a.isFolder && b.isFolder) {
                    return 1
                } else {
                    return -1
                }
            },
        }),
    ],
    right: [
        Component.Graph({
            localGraph: {
                depth: 1,
                repelForce: 0.5,
                centerForce: 0.7,
                enableRadial: true,
            },
            globalGraph: {
                depth: -1,
                repelForce: 0.5,
                centerForce: 0.7,
                linkDistance: 15,
                enableRadial: true,
            },
        }),
        Component.DesktopOnly(Component.TableOfContents()),
        Component.Backlinks(),
        Component.RecentNotes({
            title: "Recently updated",
            limit: 5,
        }),
    ],
}
