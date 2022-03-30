import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import Loader from "../Loader";
import ButtonFollows from "./style";

export function ButtonFollow({ followingId }) {
    const [isFollow, setIsFollow] = useState(false);
    const [isDisable, setIsDisable] = useState(false);
    const { auth } = useAuth();

    useEffect(() => {
        if (auth) {
            const promise = api.getFollow(auth.token, followingId);
            promise.then((response) => {
                setIsFollow(response.data.follow);
            })
            promise.catch((error) => {
                alert("erro ao carregar seguidor");
            })
        }
    }, [follow]);

    async function follow(followingId) {
        setIsDisable(true);
        try {
            if (isFollow === false) {
                await api.follow(auth.token, followingId);
                setIsFollow(true);
                setIsDisable(false);
            }
            if (isFollow === true) {
                await api.unfollow(auth.token, followingId);
                setIsFollow(false);
                setIsDisable(false);
            }

        } catch (error) {
            alert("Não foi possível executar a operação");
        }

    }
    return (
        <ButtonFollows
            onClick={() => follow(followingId)}
            isFollow={isFollow}
            disabled={isDisable}>
            {isDisable ? <Loader /> : (!isFollow ? 'Follow' : 'Unfollow')}
        </ButtonFollows>
    );
}