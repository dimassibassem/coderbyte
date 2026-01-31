'use client';
import {useState} from "react";

export default function App() {
    const [text, setText] = useState("");
    const [search, setSearch] = useState("");

    const escapeRegExp = (value: string) =>
        value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const highlightText = () => {
        if (!search) return text;

        const escaped = escapeRegExp(search);
        const regex = new RegExp(`(${escaped})`, "gi");

        return text.replace(
            regex,
            '<span class="bg-yellow-300 font-semibold">$1</span>'
        );
    };

    return (
        <div className="max-w-xl mx-auto p-6 space-y-4">
            <h3 className="text-lg font-bold">Text Search</h3>

            <textarea
                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                rows={5}
                placeholder="Enter text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <input
                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <p
                className="leading-relaxed"
                dangerouslySetInnerHTML={{__html: highlightText()}}
            />
        </div>
    );
}
