import { SearchContainer, Input, SearchButton, Result, UserResult, UserSearchImg } from './styles'
import SearchIcon from '../../assets/SearchIcon.svg';
import { DebounceInput } from "react-debounce-input";
import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function SearchBar() {
    const [textSearch, setTextSearch] = useState('');
    const [usersSearch, setUsersSearch] = useState(undefined);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if(textSearch.length > 2){
            setActive(true);
        } 
        if(textSearch.length < 3) {
            setActive(false);
        }
        searchUsers(textSearch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [textSearch])

    async function searchUsers(name) {
        if(textSearch.length < 3){
            return
        }
        const users = await api.searchUsersByName(name);
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
                                <UserResult key={user.id}>
                                    <UserSearchImg src={user.image} />
                                    <p>{user.name}</p>
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