"use client";
import { Key } from 'lucide-react';
import React, { useState } from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoMdSend } from "react-icons/io";
import { FaT, FaTrash } from "react-icons/fa6";
import { RiRobot3Fill } from "react-icons/ri";
import { FaSpinner } from "react-icons/fa";

const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);


    const sendMessage = async () => {
        if (!input.trim()) return;
        setLoading(true);

        const newMessages = [...messages, { role: "user", content: input }];
        setMessages(newMessages);

        setInput("");

        // API call
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query: input }),
            });
            const data = await res.json();
            setMessages([...newMessages, { role: "assistant", content: data.answer }]);
        } catch (err) {
            console.error("Failed to make API call", err);
        } finally {
            setLoading(false);
        }
    }

  return (
    <div className='fixed bottom-4 right-4 z-50'>
        {/* Toggle button */}
        {!open && (
            <button
                onClick={() => setOpen(true)}
                className='border p-5 flex items-center w-80 justify-between bg-white dark:bg-black'
            >
                <div className='flex flex-col hover:underline'>
                    <p className='text-xs'>Chat with</p>
                    <p className='text-sm flex items-center gap-2'><GoDotFill color='green' size={10} className='animate-ping [animation-duration:1.5s] rounded-fully opacity-75 '/> Andy Support</p>
                </div>

                <FaArrowDown className='ml-2' />
                
            </button>
        )}

        {/* Chat window */}
        <div
            className={`
            fixed bottom-4 right-4
            transition-all duration-750 ease-in-out
            ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
            `}
        >
            <div className='w-80 h-96 border bg-white dark:bg-black flex flex-col overflow-hidden shadow-xl'>
                {/* Header */}
                <div className='border-b-2'>
                    <button
                        onClick={() => setOpen(false)}
                        className='w-full flex items-center justify-between p-5'
                    >
                        <div className='flex flex-col hover:underline'>
                            <p className='text-xs'>Chat with</p>
                            <p className='text-sm flex items-center gap-2'><GoDotFill color='green' size={10} className='animate-ping [animation-duration:1.5s] rounded-fully opacity-75 '/> Andy Support</p>
                        </div>
                        <FaArrowUp />
                    </button>
                </div>

                {/* messages */}
                <div className='flex-1 p-3 overflow-y-auto'>
                    {/* if no message */}
                    {messages.length === 0 &&(
                        <div className='flex flex-col items-center justify-center h-full text-center'>
                            <p className='font-medium'>Send a message to start the chat!</p>
                            <p className='text-xs font-light mt-3'>You can ask me anything about Andy! This bot will provide relevant information.</p>
                        </div>
                    )}

                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`mb-2 flex items-center gap-2 ${msg.role === "user" ? "justify-end" : "justify-start" }`}
                        >
                            {msg.role != "user" && (
                                <RiRobot3Fill size={18} />
                            )}

                            <div
                                className={`text-sm mb-2 p-2 ${msg.role === "user" ? "bg-accent rounded w-fit" : "bg-accent rounded w-fit" }`}
                            >
                                {msg.content}
                            </div>

                        
                        </div>
                    ))}
                    {loading && (
                        <div className='flex text-sm justify-center gap-2'>
                            <FaSpinner  className='animate-spin'/>
                            Loading...
                        </div>
                    )}
                </div>
                
                {/* Input area */}
                <div className='border-t flex items-center justify-between p-2 gap-2'>
                    
                    <div className='flex flex-1 gap-2'>
                        <button 
                        className='border rounded p-2 hover:bg-accent'
                        onClick={() => setMessages([])}
                        >
                            <FaTrash  color='red' />
                        </button>
                        <input
                            type='text'
                            placeholder='Ask a question'
                            className='p-2 text-sm w-full border rounded'
                            value={input}
                            onChange={ (e) => setInput(e.target.value) }
                            onKeyDown={(e) => {
                                if (e.key == "Enter") {
                                    e.preventDefault();
                                    sendMessage();
                                }
                            }}
                        />
                    </div>


                    <button 
                        onClick={sendMessage}
                        className='border p-2 rounded bg-accent hover:bg-gray-300'
                    >
                        <IoMdSend className='text-black dark:text-white' />
                    </button>


                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Chatbot