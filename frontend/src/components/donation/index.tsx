import React, { useState } from "react";

export function DonationModal(props: { show: boolean, articleId: number, dismiss: () => void }) {
    const [tokens, setTokens] = useState<number>(0)

    function donate() {
        setTimeout(function () {
            console.log(`Donating ${tokens} NEARs to article ${props.articleId}`)
        }, 0)
    }

    if (props.show) {
        return <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-slate-600 bg-opacity-70 flex-col">
            <div className="flex flex-col items-center justify-center gap-5 bg-gray-400 p-10 rounded-3xl">
                <p className="font-semibold text-slate-50 text-2xl">You are about to donate to this article for {tokens} NEARs.</p>
                <input className="border-none rounded w-40 h-16 text-right" value={tokens} type="number" step={0.00001} onChange={e => setTokens(parseFloat(e.target.value))}></input>
                <div className="flex flex-row gap-4">
                    <button className="bg-yellow-400 rounded-xl px-5 py-3 text-white font-bold text-2xl" onClick={props.dismiss}>Cancel</button>
                    <button className="bg-blue-400 rounded-xl px-6 py-3 text-white font-bold text-2xl" onClick={donate}>Send</button>
                </div>
            </div>
        </div>
    } else {
        return <></>
    }
}