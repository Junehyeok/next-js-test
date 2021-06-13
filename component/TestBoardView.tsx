import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { selectBoard } from "../lib/board";

const TestBoardView: React.FC = () => {
    const router = useRouter();

    const { id } = router.query;

    console.log("=-==========================")
    console.log(id)

    const a = selectBoard(id);

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