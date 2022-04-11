import { Section, Container, Card } from "."
import Content from "./Content"
import office365 from "../assets/image/office365-http.png"
import { useStore } from "./Store"

const Main = () => {
    const { dashboardItems } = useStore()
    console.log("dashboardItems", dashboardItems)
    return (
        <main>
            <Container >
                <Section id="main">
                    {dashboardItems?.map((item, index) => (
                        <Card key={index} title={item.title} imageUrl={item.image.url} url={item.url}/> 
                    ))}
                </Section>
            </Container>
        </main>
    )
}

export default Main;
 