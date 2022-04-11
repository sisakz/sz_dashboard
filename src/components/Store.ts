import { useQuerySubscription } from "react-datocms"
import { createContext, useContext } from "react"

export interface IDashboardItem {
    title: string
    image: {
        url: string
    }
    url: string
}

export interface IStore {
    dashboardItems: IDashboardItem[],
    backgroundcolor: string
}


export const StoreContext = createContext<IStore>({dashboardItems: [], backgroundcolor: ""});

export const useDato = () : IStore => {
    const token = "66bb6a91ab494f4febcc8cec6da8c0"
    const query = `{
        allDasboarditems {
          title
          image {
            url
          }
          url
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
    const store = {
        dashboardItems: data?.allDasboarditems,
        backgroundcolor: data?.staticelement?.backgroundcolor
    }

    return store
}

export const useStore = () : IStore => {
    const store = useContext(StoreContext)
return store
}

