import { Container, ContainerLogo, ContainerTitle, IconUser, Logo, TitleLogo } from "./style";

export function Header(){
    return(
        <Container>

            <ContainerLogo>
            <Logo />
            <ContainerTitle>
            <TitleLogo>Daily</TitleLogo>
            <TitleLogo>Diet</TitleLogo>
            </ContainerTitle>

            </ContainerLogo>

            <IconUser />
        </Container>
    )
}
