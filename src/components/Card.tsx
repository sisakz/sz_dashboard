import styled from 'styled-components';



type CardProp = {
    children?: React.ReactNode,
    title?: string,
    imageUrl?: string,
    url?: string,
}



const Card: React.FC<CardProp> = (prop) => {
    const { children, title, imageUrl, url } = prop
    return (
            <CardWrapper>
                <CardContent>
                    <a href={url}>
                        <CardTitle>{title}</CardTitle>
                        <CardBody>
                            {children}
                            <img src={imageUrl} alt="" />
                        </CardBody>
                    </a>
                </CardContent> 
            </CardWrapper>

    )
}

export default Card;

const CardWrapper = styled.div`
    flex: 0 0 25%;
    position: relative;
    float: left;
    transition: flex-basis 0.2s linear;
    &:after {
        content: "";
        display: block;
        padding-bottom: 50%;
    };
    @media (max-width: 768px) {
        flex: 0 0 50%;
        transition: flex-basis 0.2s linear;
    }
`
const CardContent = styled.div`
    position: absolute;
    background-color: lightgray;
    width: 95%;
    height: 95%;
    & a {
        text-decoration: none;
        color: black;
        &:hover {
        }
    }
`
const CardTitle = styled.h3`
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.1rem;
    margin: 0;
    padding: 0.25rem 0.5rem;
    
`

const CardBody = styled.div`
    position: absolute;
    padding: 0;
    bottom: -4px;
    width: 100%;
    & img {
        width: 100%;
    }
`