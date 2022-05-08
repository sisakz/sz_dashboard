import { Section, Container, Card } from "."
import { useStore } from "./Store"
import { Routes, Route, Navigate } from "react-router-dom"
import { IDashboardItem, IDashboardPage } from "./Store"

const Main = () => {
    const {dashboardPages, backgroundcolor}  = useStore()
    console.log("backgroundcolor", backgroundcolor)
    console.log("dashboardPages", dashboardPages)
    const routes = dashboardPages?.map((page: IDashboardPage, index: number) => {
        return <Route key={index} path={"/" + page.name} element={<Dashboard dashboardItems={page.dashboarditems} />} />
    })
    console.log("routes", routes)
    return (
        <main style={{backgroundColor: backgroundcolor, height: "100vh"}}>
            <Container >
                <Section id="main"  backgroundColor={backgroundcolor}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/main" />} />
                        {dashboardPages?.map((page: IDashboardPage, index: number) => {
                            return <Route key={index} path={"/" + page.name} element={<Dashboard dashboardItems={page.dashboarditems} />} />
                        })}
                    </Routes>
                </Section>
            </Container>
        </main>
    )
}

export default Main;

const Dashboard = (props : {dashboardItems: IDashboardItem[]}) => {
    const {dashboardItems}=props
    console.log("dashboarditems",dashboardItems)
    return (
        <>
            {dashboardItems?.map((item, index) => (
                <Card key={index} title={item.title} imageUrl={item.image.url} url={item.url}/> 
            ))}
        </>
    )
}