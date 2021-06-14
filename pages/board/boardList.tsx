import React from "react";
import { NextPage } from "next";
import TestBoardList from "../../component/TestBoardList";
import axios from "../../lib/index";
import {BoardType} from "../../type/board";

interface IProps {
    posts: BoardType[];
}

const boardList: NextPage<IProps> = ({posts}) => {
    return <TestBoardList posts = {posts}/>;
}

export async function getServerSideProps() {
    const res = await axios.get<BoardType[]>("api/v1/lists");
    const posts = res.data
    return {
        props: {
            posts : posts,
        },
    }
}


export default boardList;