import { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../providers/UserProviders';
import { useNavigate } from 'react-router-dom';
import {SecondaryButton} from '../atoms/button/SecondaryButton'

export const Top = () => {
    const navigation = useNavigate();
    const {setUserInfo} = useContext(UserContext)

    const onClickAdmin = () => {
        setUserInfo({isAdmin:true})
        navigation("/users")
    }

    const onClickGeneral = () => {
        setUserInfo({isAdmin:false})
        navigation("/users")
    }

    return (
        <SContainer>
            <h2>TOP画面です</h2>
            <br />
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザ</SecondaryButton>
            <br />
            <br />
            <SecondaryButton onClick={onClickGeneral}>一般ユーザ</SecondaryButton>
        </SContainer>
    );
}

const SContainer = styled.div`
    text-align: center;
`;