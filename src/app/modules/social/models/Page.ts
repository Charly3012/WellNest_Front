import { Post } from "./Post";

export interface Page {
    content: Post[]
    pageNumber: number,
    pageSize: number,

}