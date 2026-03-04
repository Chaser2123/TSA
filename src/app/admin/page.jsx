'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
    const route = useRouter();
    
    useEffect(() => {
        route.replace("/");
    }, [route]);
    return(
        <>
            <h1>admin</h1>
        </>
    );
}