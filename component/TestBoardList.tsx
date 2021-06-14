import React, { useState } from "react";
import Link from "next/link";
import { listBoard } from "../lib/board";
import axios from "../lib/index";
import {BoardType} from "../type/board";

interface IProps {
    posts: BoardType[];
}

const TestBoardList: React.FC<IProps> = ({ posts }) => {
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
                <tbody>
                {posts.map((post) => (
                    <tr>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.author}</td>
                    </tr>
                ))}
                </tbody>
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
