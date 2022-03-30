import LoadingBarStyle from "./style";
import { FaSyncAlt } from "react-icons/fa";

export default function LoadingBar({quantity, setAttPage, setNewPosts}) {
    return (
        <LoadingBarStyle quantity={quantity} onClick={() => {setAttPage(true); setNewPosts(0)}}>
            {quantity} new posts, load more! <FaSyncAlt/>
        </LoadingBarStyle>
    )
}