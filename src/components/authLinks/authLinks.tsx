import Link from "next/link";
import styles from "./authLinks.module.css";

export default function AuthLinks() {
    const status = "unauthenticated";
    return(
        <>
        {status === "unauthenticated" ? (
            <div>
                <Link href="/login">Login</Link>
            </div>
        ) : (
            <div>
                <Link href="/write">Write</Link>
                <span>Logout</span>
            </div>
        )}
        </>     
    )
}