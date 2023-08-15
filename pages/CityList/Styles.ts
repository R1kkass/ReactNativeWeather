import { styled } from "styled-components/native";

const ViewContainer = styled.View`
    width: 100%;
    dislay: flex;
    gap: 10px;
    height: 100%;
    padding: 10px;
    padding: 10px;
`;

const TextCity = styled.Text`
    font-size: 20px;
    color: rgb(10, 10, 10);
`;

const ViewSearch = styled.View`
    height: 40px;
    background: rgba(258, 208, 208, 0.1);
    width: 100%;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    padding-left: 10px;
    border: 1px solid gray;
    elevation: 3;
`;

export default {ViewSearch, TextCity, ViewContainer}