"use client";

import { useState } from "react";
import styles from "./writePage.module.css";
import ReactQuill from "react-quill";   
import "react-quill/dist/quill.bubble.css";

export default function WritePage() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
 
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" />
            <div className={styles.editor}>
                <button className={styles.button}>
                    <i className="bx bx-bold"></i>
                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <i className="bx bx-image"></i>
                        </button>
                        <button className={styles.addButton}>
                            <i className="bx bx-upload"></i>
                        </button>
                        <button className={styles.addButton}>
                            <i className="bx bx-video"></i>
                        </button>
                    </div>
                )}
                <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Goot any idea?"/>
            </div>
        </div>
    )
}