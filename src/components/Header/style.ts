import styled from "styled-components/native";
import {UserCircle, ForkKnife} from 'phosphor-react-native';

export const Container = styled.View`
    flex-direction: row;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled(ForkKnife).attrs({
    size: 42
})``;

export const IconUser = styled(UserCircle).attrs({
    size: 45
})``;

export const ContainerLogo = styled.View`
flex-direction: row;
`;

export const ContainerTitle = styled.View`
    flex-direction: column;
`;

export const TitleLogo = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.XG}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;
