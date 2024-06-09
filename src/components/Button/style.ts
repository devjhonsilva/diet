import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {Plus} from 'phosphor-react-native';


export const Container = styled(TouchableOpacity)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XG}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-left: 10px;
`;

export const Header = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 8px;
`;

export const Icon = styled(Plus).attrs(({theme}) => ({
  color: theme.COLORS.WHITE,
  size: 24
}))``;
