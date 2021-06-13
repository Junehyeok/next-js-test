import { useRouter } from "next/router";
import React, { useState } from "react";
import { insertBoard, updateBoard } from "../lib/board";
import Link from "next/link";

const TestBoardEdit: React.FC = () => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const router = useRouter();

    const saveBoard = async () => {
        if(!title && !content) {
            return false;
        }
        try {
            insertBoard({title, content, author});
            router.push("/");
        } catch(e) {
            console.log(e);
        }
    }

    const editBoard = async () => {
        try {
            const ids = Number(id);
            updateBoard({title, content, author}, ids);
            router.push("/");
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <>
            <span>글번호(수정할때만.......)</span>
            <div>
                <input type="number" id="id" value={id} onChange={(e) => setId(e.target.value)}/>
            </div>
            <span>제목</span>
            <div>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <span>내용</span>
            <div>
                <textarea id="content" value={content} onChange={(e) => setContent(e.target.value) } />
            </div>
            <span>작성자</span>
            <div>
                <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <br/><br/><br/><br/><br/>
            <button id="insertButton" onClick={saveBoard}>저장하기</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button id="updateButton" onClick={editBoard}>수정하기</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/">
                메인화면으로
            </Link>
        </>
    )
}

export default TestBoardEdit;