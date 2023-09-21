import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { currentId, roomId } from "../../store/recoil/recoil";
import UserData from "../../store/UserData.json";
import UserProfile from "../profile/HedaerProfile";

function ChatRoomHeader() {
  let userData = UserData.users;
  let room = useRecoilValue(roomId);
  const [userId, setUserId] = useRecoilState(currentId);

  return (
    <Header>
      <Link to="/Chat" onClick={() => setUserId(0)}>
        <CloseBtn>back</CloseBtn>
      </Link>
    </Header>
  );
}

const Header = styled.div`
  position: relative;
  margin: 0 auto;
  background: #ffffff;
  height: 3rem;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
  display: flex;
  flex-direction: row;
`;

const CloseBtn = styled.div`
  
  position: absolute;
  margin: 0.125rem;
  right: 1rem;
  top: 1rem;
  width: 1rem;
  height: 1rem;
  background: #ffffff;
  border-radius: 1rem;
`;

export default ChatRoomHeader;
