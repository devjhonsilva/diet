import { Container, Title, Header, Icon } from "./style";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
}
export function Button({ title, ...rest }: Props) {
    return (
        <>
        <Header>Refeições</Header>
        <Container {...rest}>
            <Icon />
            <Title>
                {title}
            </Title>
        </Container>
        </>
    )
}
