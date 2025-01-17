import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  html: string // The HTML content to render
  className?: string // Optional CSS class for styling
}

const defaultOptions: Options = {
  html: "<p>Default content</p>", // Default HTML content
  className: "custom-html", // Default class name
}

export default ((userOpts?: Options) => {
  const opts = { ...defaultOptions, ...userOpts }

  function FreeHTMLComponent(props: QuartzComponentProps) {
    return (
      <div
        className={opts.className}
        dangerouslySetInnerHTML={{ __html: opts.html }}
      ></div>
    )
  }

  return FreeHTMLComponent
}) satisfies QuartzComponentConstructor
