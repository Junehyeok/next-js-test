import { NextPage } from "next";
import Link from "next/link";

const index: NextPage = () => {
    return (
        <div>
            게시판 <br/>

            <br/><br/><br/><br/><br/>
            <Link href="/board/boardList">
                <a>글 목록보기</a>
            </Link>
            <br/><br/><br/><br/><br/>
            <Link href="/board/boardEdit">
                <a>글 작성하기</a>
            </Link>
        </div>
    )
}


export default index;