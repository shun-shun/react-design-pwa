import { useContext } from 'react';
import styled from 'styled-components'
import { UserContext } from '../../../providers/UserProviders';

export const UserIconWithName = (props) => {
    const {image, name} = props
    const { userInfo } = useContext(UserContext)
    const isAdmin = userInfo ? userInfo.isAdmin : false

    return (
        <SContainer>
            <SImg 
            height={120} 
            src={image} 
            alt={name} />
            <SName>{name}</SName>
            {isAdmin && <a>編集</a>}
        </SContainer>
    );
}

const SContainer = styled.div`
    text-align: center;
    
`;
const SImg = styled.img`
    border-radius: 50%;
`;
const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #171298;
`;