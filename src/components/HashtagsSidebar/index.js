import { HashtagLink, SidebarContainer, SidebarTitle } from "./styles";
import api from "../../services/api.js";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function HashtagsSidebar({attPage, hashtagPost }) {

  const [hashtags, setHashtags] = useState([]);
  const { auth } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    if (auth !== undefined) {
      const promise = api.getTrendingHashtags(auth.token);
      promise.then((response) => {
        setHashtags(response.data);
      });
      promise.catch((error) => {
        console.log(error);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attPage]);
  

  return (
    <>
      <SidebarContainer>
        <SidebarTitle>timeline</SidebarTitle>
        {hashtags.length === 0
          ? ""
          : hashtags.map((hashtag) => (
            <HashtagLink
              key={hashtag.hashtagId}
              onClick={() => {               
                navigate(`/hashtag/${hashtag.hashtagText}`);                
              }}
            >
              # {hashtag.hashtagText}
            </HashtagLink>
          ))}
      </SidebarContainer>
    </>
  );
}
