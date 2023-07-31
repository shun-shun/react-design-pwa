import styled from 'styled-components';
import { SearchInput } from '../molecules/SeachInput';
import { UserCard } from '../organisms/user/UserCard'

const users = [...Array(10).keys()].map(( (val) => {
    return{
        id: val,
        name: `ごん${val}`,
        image: "https://source.unsplash.com/Vs5HqX49DBw",
        email: "hogehoge.com",
        phone: "090-0000-1111",
        company: {
        name: "ほげほげ会社"
        },
        website: "http://google.com"
    }
})) 

export const Users = () => {
    return (
        <SContainer>
            <h2>ユーザ画面です</h2>
            <SearchInput />
            <SUserArea>
                {users.map((user) => (
                    <UserCard keys={user.id} user={user}/>
                ))}
            </SUserArea>
        </SContainer>
    );
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`;