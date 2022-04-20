import { useQuerySubscription } from "react-datocms"
import { createContext, useContext } from "react"

export interface IDashboardItem {
    title: string
    image: {
        url: string
    }
    url: string
    dashboardpage: string
}

export interface IStore {
    dashboardItems: IDashboardItem[],
    anydeskItems: IDashboardItem[],
    backgroundcolor: string
}


export const StoreContext = createContext<IStore>({dashboardItems: [], anydeskItems: [], backgroundcolor: ""});

export const useDato = () : IStore => {
    const token = "66bb6a91ab494f4febcc8cec6da8c0"
    const query = `{
        allDasboarditems(first: "50") {
          title
          image {
            url
          }
          url
          dashboardpage
        }
        staticelement {
            backgroundcolor 
        }
      }`
    const { data, error } = useQuerySubscription({
        query,
        enabled: true,
        token,
    
    })
    console.log("data", data)
    const store: IStore = {
        dashboardItems: data?.allDasboarditems.filter((item: IDashboardItem) => item.dashboardpage === "main"),
        anydeskItems: data?.allDasboarditems.filter((item: IDashboardItem) => item.dashboardpage === "anydesk"),
        backgroundcolor: data?.staticelement?.backgroundcolor
    }

    return store
}

export const useStore = () : IStore => {
    const store = useContext(StoreContext)
return store
}

