import Link from "next/link";

export default function Home() {
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
