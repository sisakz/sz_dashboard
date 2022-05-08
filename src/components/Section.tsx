import styled from 'styled-components';


type SectionProp = {
    children: React.ReactNode,
    id: string,
    title?: string,
    backgroundColor?: string,
}



const Section: React.FC<SectionProp> = (prop) => {
    const { id, title, backgroundColor } = prop
    console.log("backgroundColor", backgroundColor)


    return (
        <section id={id}>
            <SectionWrapper backgroundColor={backgroundColor}>
                {(title) ? <SectionTitle>{title}</SectionTitle> : null}
                    <SectionContent>
                        {prop.children}
                    </SectionContent>
               </SectionWrapper>
         </section>
    )
}

const SectionWrapper = styled.div.attrs((props:{backgroundColor: string}) => props)`
    display: flex;
    flex-direction: column;
    padding: 1rem 0.5rem;
    background-color: ${(props) => props.backgroundColor};
`
const SectionTitle = styled.h2`
    text-transform: uppercase;
    font-size: 1.8rem;
`
const SectionContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`



export default Section;

