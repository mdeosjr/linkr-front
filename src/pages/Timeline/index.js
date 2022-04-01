import { FeedContainer } from "../../components/FeedContainer";
import { PageTitle } from "../../components/PageTitle";
import Loader from "../../components/Loader.js";
import { PostWarning } from "../../components/Post/style.js";
import PublishPostForm from "./PublishPostForm";
import Header from "../../components/Header/index.js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api.js";
import useAuth from "../../hooks/useAuth";
import SearchBarTimeline from "../../components/SearchBarTimeline/index.js";
import HashtagsSidebar from "../../components/HashtagsSidebar/index.js";
import { MainContainer } from "../../components/MainContainer.js";
import { PostsContainer } from "../../components/PostsContainer.js";
import LoadingBar from "../../components/LoadingBar";
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingScroll from "../../components/ScrollLoading";
import useInterval from 'use-interval'
import Post from "../../components/Post";

export default function Timeline() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(false);
  const [newPosts, setNewPosts] = useState(0);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const { hashtag } = useParams();

  const { auth, attPage, setAttPage } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }

    if (auth && !hashtag) {
            const promise = api.getTimelinePosts(auth.token, offset);
            promise.then((response) => {
                setServerError(false);
                setLoading(false);
                setPosts(response.data);
            });

            promise.catch((error) => {
                setServerError(true);
                setLoading(false);
            })
        };
        

        if (auth && hashtag) {
            const promise = api.getPostByHashtag(auth.token, hashtag);
            promise.then((response) => {
                setServerError(false);
                setLoading(false);
                setPosts(response.data);
            });

            promise.catch((error) => {
                setServerError(true);
                setLoading(false);
            })
        };

    setOffset(offset+10);
  }, []);

  useInterval(() => {
    const promise = api.getTimelinePosts(auth.token, offset);
    promise.then((response) => {
      if (response.data?.length === posts?.length) {
        return setNewPosts(0);
      } else if (response.data?.length > posts?.length) {
        return setNewPosts(response.data.length - posts.length);
      }
    });
  }, 15000);

  function fetchMorePosts() {
    const promise = api.getTimelinePosts(auth.token, offset);
    promise.then((response) => {
        if (response.data.length === 0) {
          return setHasMore(false)
        } else {
          setHasMore(true)
        }
        setServerError(false);
        setLoading(false);
        setOffset(offset+10);
        setPosts([...posts, ...response.data]);
    });

    promise.catch((error) => {
        setServerError(true);
        setLoading(false);
    });
  }

  return (
    <>
      <Header />
      <FeedContainer>
        <SearchBarTimeline/>
        <PageTitle>
          {hashtag === undefined ? "timeline" : "#" + hashtag}
        </PageTitle>
        <MainContainer>
          <InfiniteScroll
            dataLength={posts.length}
            next={fetchMorePosts}
            hasMore={hasMore}
            loader={<LoadingScroll/>}
          >
            <PostsContainer>
              {hashtag === undefined && (
                <PublishPostForm attPage={attPage} setAttPage={setAttPage} />
              )}
              {hashtag === undefined && <LoadingBar quantity={newPosts} setAttPage={setAttPage} setNewPosts={setNewPosts} />}
              {loading && <Loader />}
              {posts.length === 0 &&
                serverError === false &&
                loading === false && (
                  <PostWarning>There are no posts yet</PostWarning>
                )
              }
              {serverError ? (
                <PostWarning>
                  An error occured while trying to fetch the posts, please refresh
                  the page
                </PostWarning>
              ) : (
                posts.map(post => (
                  <Post
                    post={post}
                    setLoading={setLoading} 
                    setServerError={setServerError} 
                    offset={offset}
                    hashtag={hashtag}
                  />
                ))
              )}
            </PostsContainer>
          </InfiniteScroll>
          <HashtagsSidebar
            attPage={attPage}
            setAttPage={setAttPage}
            setPosts={setPosts}
            hashtagPost={hashtag}
          />
        </MainContainer>
      </FeedContainer>
    </>
  );
}