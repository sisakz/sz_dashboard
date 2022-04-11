import styled from 'styled-components';


type SectionProp = {
    children: React.ReactNode,
    id: string,
    title?: string,
}



const Section: React.FC<SectionProp> = (prop) => {
    const { children, id, title } = prop
    return (
        <section id={id}>
            <SectionWrapper>
                {(title) ? <SectionTitle>{title}</SectionTitle> : null}
                    <SectionContent>
                        {prop.children}
                    </SectionContent>
               </SectionWrapper>
         </section>
    )
}

export default Section;

const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0.5rem;
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