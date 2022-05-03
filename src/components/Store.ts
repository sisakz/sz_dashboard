import { useQuerySubscription } from "react-datocms"
import { createContext, useContext } from "react"

export interface IDashboardItem {
    title: string
    image: {
        url: string
    }
    url: string
}

export interface IDashboardPage {
        name: string
        dashboarditems: IDashboardItem[]
}

export interface IStore {
    dashboardPages: IDashboardPage[]
    backgroundcolor: string
}


export const StoreContext = createContext<IStore>({dashboardPages: [], backgroundcolor: ""});

export const useDato = () : IStore => {
    const token = "66bb6a91ab494f4febcc8cec6da8c0"
    const query = `{
        staticelement {
          backgroundcolor
        }
        allDashboardpages {
          id
          name
          dashboarditems {
            image {
              url
            }
            title
            url
          }
        }
      }
      `
    const { data, error } = useQuerySubscription({
        query,
        enabled: true,
        token,
    
    })
    console.log("data", data)

/*     const dashboardPages: IDashboardPage[] = data?.allDashboardpages.map((page: IDashboardPage, index: number) => {
        return {
            name: page.name,
            dashboardItems: data?.allDasboarditems.filter((item: IDashboardItem) => item.dashboardpage[index]?.name === page.name)
        }
    }) */
    const dashboardPages: IDashboardPage[] = data?.allDashboardpages
/*     const mainItems:IDashboardItem[] = data?.allDasboarditems.filter((item: IDashboardItem) => item.dashboardpage[0]?.name === "main")
    const anydeskItems:IDashboardItem[] = data?.allDasboarditems.filter((item: IDashboardItem) => item.dashboardpage[0]?.name === "anydesk")
    const dashboardItems:IDashboardItem[] = data?.allDasboarditems.filter((item: IDashboardItem) => item.dashboardpage[0]?.name === "main")
     */

    const store: IStore = {
        dashboardPages,
        backgroundcolor: data?.staticelement?.backgroundcolor
    }
    console.log("store", store)

    return store
}

export const useStore = () : IStore => {
    const store = useContext(StoreContext)
return store
}

