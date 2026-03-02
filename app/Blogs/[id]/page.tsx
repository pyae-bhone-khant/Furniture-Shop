"use client"

import { useParams } from "next/navigation"

export default function BlogsDetails() {
const {id} = useParams();
    return (
        <div>this is BlogsDetails : {id}</div>
    )
}