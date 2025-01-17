import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
      <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm50ZXU4MDlucHcwMDV3aW1rdTN5dnY3eWYzNWkyZHlhMTJnN2Z4ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0ExsgrTuACbtPaqQ/giphy.gif" 
        style={{ display: 'block', marginTop: '20px' }}
       alt="404 Not Found GIF"/>

    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
