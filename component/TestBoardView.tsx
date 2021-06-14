import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { selectBoard } from "../lib/board";

const TestBoardView: React.FC = () => {

    const [ids, setIds] = useState(1);

    const router = useRouter();

    useEffect(()=>{
        if(!router.isReady) return;
        // codes using router.query
        setIds(Number(router.query.view));
    }, [router.isReady]);

    const id = router.query.view;


    const a = selectBoard(Number(ids));


    console.log(router.query.view)

    console.log(a);


    return (
        <>
            <span>글번호(수정할때만.......)</span>
            <div>
            </div>
            <span>제목</span>
            <div>
            </div>
            <span>내용</span>
            <div>
            </div>
            <span>작성자</span>
            <div>
            </div>
            <br/><br/><br/><br/><br/>
            <button id="updateButton">수정하기</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/">
                메인화면으로
            </Link>
        </>
    )
}
export default TestBoardView;


