import { Section, Container, Card } from "."
import { useStore } from "./Store"

const Main = () => {
    const store = useStore()
    const {dashboardItems, backgroundcolor}  = useStore()
    console.log("backgroundcolor", backgroundcolor)
    console.log("dashboardItems", dashboardItems)
    return (
        <main style={{backgroundColor: backgroundcolor, height: "100vh"}}>
            <Container >
                <Section id="main"  backgroundColor={backgroundcolor}>
                    {dashboardItems?.map((item, index) => (
                        <Card key={index} title={item.title} imageUrl={item.image.url} url={item.url}/> 
                    ))}
                </Section>
            </Container>
        </main>
    )
}

export default Main;
 