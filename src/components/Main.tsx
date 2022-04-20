import { Section, Container, Card } from "."
import { useStore } from "./Store"
import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import { IDashboardItem } from "./Store"

const Main = () => {
    const store = useStore()
    const {dashboardItems, anydeskItems, backgroundcolor}  = useStore()
    console.log("backgroundcolor", backgroundcolor)
    console.log("dashboardItems", dashboardItems)
    return (
        <main style={{backgroundColor: backgroundcolor, height: "100vh"}}>
            <Container >
                <Section id="main"  backgroundColor={backgroundcolor}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/main" />} />
                        <Route path="/main" element={<Dashboard dashboardItems={dashboardItems} />} />
                        <Route path="/anydesk" element={<Dashboard dashboardItems={anydeskItems} />} />
                    </Routes>
                </Section>
            </Container>
        </main>
    )
}

export default Main;

const Dashboard = (props : {dashboardItems: IDashboardItem[]}) => {
    const {dashboardItems}=props
    return (
        <>
            {dashboardItems?.map((item, index) => (
                <Card key={index} title={item.title} imageUrl={item.image.url} url={item.url}/> 
            ))}
        </>
    )
}