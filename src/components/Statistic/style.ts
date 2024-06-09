import styled from "styled-components/native";
import {ArrowUpRight} from 'phosphor-react-native';


export const Container = styled.View`
    width: 100%;
    min-height: 100px;
    max-height: 100px;
    align-items: center;
    justify-content: center;
    padding-top: 6px;

    background-color: ${({theme}) => theme.COLORS.GREEN_MID};
    border-radius: 8px;
    margin-top: 50px;
    margin-bottom: 40px;
`;

export const StatisticNumber = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: ${({theme}) => theme.FONT_SIZE.EG}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    padding-top: 10px;
    margin-bottom: 5px;
`;

export const StatisticText = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`;

export const AreaBtn = styled.TouchableOpacity`
    flex: 1;
`;

export const Button = styled(ArrowUpRight).attrs(({theme}) => ({
    color: theme.COLORS.GREEN_DARK,
    size: 24
}))`
    position: fixed;
    left: 160px;
    top: -78px;
`;
