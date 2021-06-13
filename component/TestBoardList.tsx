import React, { useState } from "react";
import Link from "next/link";
import { listBoard } from "../lib/board";
import axios from "../lib/index";
import {BoardType} from "../type/board";

const TestBoardList: React.FC = () => {
    const list = listBoard();
    console.log("+adslfkafdlkjfdlsk+ " + list);
    const [posts, setPosts] = useState([]);
    const arr = [];


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>

            <br/><br/><br/><br/><br/>
            <Link href="/board/boardEdit">
                <a>글 작성하기</a>
            </Link>
            <Link href="/">
                메인화면으로
            </Link>
        </>
    )
}

export default TestBoardList;
