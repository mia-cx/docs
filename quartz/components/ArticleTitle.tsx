import { classNames } from "../util/lang"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const title = fileData.frontmatter?.title
    const icon = fileData.frontmatter?.icon
    if (title) {
        return (
            <h1 class={classNames(displayClass, "article-title")}>
                {icon ? <iconify-icon icon={icon} width="1em" height="1lh"></iconify-icon> : ""}
                {title}
            </h1>
        )
    } else {
        return null
    }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
