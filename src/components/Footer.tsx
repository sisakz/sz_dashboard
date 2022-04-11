import styled from 'styled-components'
import { useStore } from "./Store"

const Footer = () => {
    
    const {dashboardItems}  = useStore()
    return (
        <footer>
            <FooterWrapper>
                {" "}
            </FooterWrapper>
        </footer>
    )
}

export default Footer;

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgray;
` 