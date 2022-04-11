import styled from 'styled-components';

type ContainerProp = {
    children?: React.ReactNode,
}

const Container: React.FC<ContainerProp> = (prop) => {
    return (
        <ContainerWrapper>
            {prop.children}
        </ContainerWrapper>
    )
}

export default Container;

const ContainerWrapper = styled.div`
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    background-color: #fff;
`