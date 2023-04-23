import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatList } from "../redux/features/chatSlice";

const useChat = () => {
  const chatList = useSelector((state) => state.chatListReducer.chatList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChatList());
  }, []);

  return { chatList };
};

export default useChat;
