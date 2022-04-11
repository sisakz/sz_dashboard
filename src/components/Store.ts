import { useQuerySubscription } from "react-datocms"

export interface IDashboardItem {
    title: string
    image: {
        url: string
    }
    url: string
}

export interface IStore {
    dashboardItems: IDashboardItem[]
}

export const useStore = () : IStore => {
    const token = "66bb6a91ab494f4febcc8cec6da8c0"
    const query = `{
        allDasboarditems {
          title
          image {
            url
          }
          url
        }
      }`
    const { data, error } = useQuerySubscription({
        query,
        enabled: true,
        token,
    
    })
    const store = {dashboardItems: data?.allDasboarditems}

    return store
}

