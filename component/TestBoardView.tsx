import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { selectBoard } from "../lib/board";

const TestBoardView: React.FC = () => {
    const router = useRouter();

    useEffect(()=>{
        if(!router.isReady) return;
        // codes using router.query
    }, [router.isReady]);

    const id = router.query.view;


    const a = selectBoard(id);
    console.log("=-==========================")
    console.log("=-==========================")
    console.log(router.isReady)
    console.log(router.query.view)
    console.log("=-==========================")
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

export async function getServerSideProps(ctx) {
    const { id } = ctx.query;
    console.log("jsakdljdsklfasdjkflsajklsjdklasdjlk" + id);
    return {
        props: {
            id,
        },
    };
}
export default TestBoardView;


