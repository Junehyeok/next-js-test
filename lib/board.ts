import axios from ".";
import { BoardType } from "../type/board";

interface AddBoard {
    title: string
    content: string
    author: string
}


export const insertBoard = (body : AddBoard) => axios.post("/api/v1/posts", body);

export const updateBoard = (body : AddBoard, id: number) => axios.put(`/api/v1/posts/${id}`, body);

export const selectBoard = async (id: number) => {
    console.log("id >>> " + id);
    await axios.get(`/api/v1/posts/${id}`);
}

export const listBoard = async () => {
    console.log("start")
    const list = await axios.get<BoardType[]>("api/v1/lists");
    return list;
}