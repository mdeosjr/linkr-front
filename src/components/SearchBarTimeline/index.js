import { SearchContainer, Input, SearchButton, Result, UserResult, UserSearchImg, Text, List } from './styles'
import SearchIcon from '../../assets/SearchIcon.svg';
import { DebounceInput } from "react-debounce-input";
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function SearchBar() {
    const [textSearch, setTextSearch] = useState('');
    const [usersSearch, setUsersSearch] = useState(undefined);
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    const { auth } = useAuth();

    useEffect(() => {
        if (textSearch.length > 2) {
            setActive(true);
        }
        if (textSearch.length < 3) {
            setActive(false);
        }
        searchUsers(textSearch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [textSearch])

    async function searchUsers(name) {
        if (textSearch.length < 3) {
            return
        }
        const users = await api.searchUsersByName(auth.token, name);
        setUsersSearch(users.data);
    }
    return (
        <>
            <SearchContainer>
                <DebounceInput
                    element={Input}
                    debounceTimeout={300}
                    placeholder='Search for people'
                    value={textSearch}
                    onChange={(e) => setTextSearch(e.target.value)}
                />
                <SearchButton>
                    <img src={SearchIcon} alt='lupa' />
                </SearchButton>
                {usersSearch
                    ?
                    <Result active={active}>
                        {usersSearch.map(user => {
                            return (
                                <UserResult key={user.id} onClick={() => navigate(`/user/${user.id}`)}>
                                    <UserSearchImg src={user.image} />
                                    <List>
                                        <Text>{user.name}</Text>
                                        {user.follow.length > 0 ?
                                            <Text follow={true}>{user.follow}</Text>
                                            : ''
                                        }
                                    </List>
                                </UserResult>
                            );
                        })}
                    </Result>

                    : ''
                }
            </SearchContainer>
        </>
    );
}