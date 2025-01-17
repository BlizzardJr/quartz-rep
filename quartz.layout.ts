import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Discord Community1": "https://discord.gg/cRFFHYye7t",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
  sortFn: (a, b) => {
    const nameOrderMap: Record<string, number> = {
      "Cities": 100,
      "Atlas": 200,
      "Gods & Religion": 300,
      "The Races": 400,
      "Dramatis Personae": 500,
      "Organizations": 600,
      "Herbarium": 700,
      "Mechanics": 800,
      "OOC": 900,
    }
 
    let orderA = 0
    let orderB = 0
 
    if (a.file && a.file.slug) {
      orderA = nameOrderMap[a.file.slug] || 0
    } else if (a.name) {
      orderA = nameOrderMap[a.name] || 0
    }
 
    if (b.file && b.file.slug) {
      orderB = nameOrderMap[b.file.slug] || 0
    } else if (b.name) {
      orderB = nameOrderMap[b.name] || 0
    }
 
    return orderA - orderB
  },
})),
  ],
  right: [
    Component.DesktopOnly(Component.FreeHTML({
      html: 
        '<a href="https://www.dndbeyond.com/campaigns/4259461" target="_blank"> <img src="https://dndbeyond-support.wizards.com/hc/theming_assets/01JDAVQD7VQ3KSMGT6RCBM9XRZ" alt="Logo" style="height: 80px;"></a>'
    })),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.DesktopOnly(Component.FreeHTML({
      html: 
        '<a href="https://www.dndbeyond.com/campaigns/4259461" target="_blank"> <img src="https://dndbeyond-support.wizards.com/hc/theming_assets/01JDAVQD7VQ3KSMGT6RCBM9XRZ" alt="Logo" style="height: 80px;"></a>'
    })),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
  
}

