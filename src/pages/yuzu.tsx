import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

type Question = string;

type Character = {
    name: string;
    image: string;
    questions: Question[];
    answer: Question;
};

const shuffleArray = <T extends any>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

const Yuzu = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<Question | null>(null);

    // load data
    const url =
        "https://raw.githubusercontent.com/yashikota/quiz/master/src/data/yuzu.json";
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const json = await res.json();
            setCharacters(shuffleArray(json));
        };
        fetchData();
    }, []);

    const handleAnswerSelect = (answer: Question) => {
        if (selectedAnswer === null) {
            setSelectedAnswer(answer);
        }
    };


    const handleNextCharacter = () => {
        setSelectedAnswer(null);
        setCurrentCharacterIndex(currentCharacterIndex + 1);
    };

    return (
        <>
            <Head>
                <title>むりりん・こぶいち クイズ</title>
                <meta name="description" content="むりりん・こぶいち クイズ" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <button className="m-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    <Link href="/">戻る</Link>
                </button>
                <div className="flex flex-col items-center justify-center h-screen">
                    {characters.length > 0 && currentCharacterIndex < characters.length ? (
                        <>
                            <h1 className="text-3xl font-bold mb-4">{characters[currentCharacterIndex].name}</h1>
                            <img
                                src={characters[currentCharacterIndex].image}
                                alt={characters[currentCharacterIndex].name}
                                className="w-96 h-96 mb-4"
                            />
                            <div className="flex flex-wrap gap-4 justify-center">
                                {characters[currentCharacterIndex].questions.map((question, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerSelect(question)}
                                        className={`py-2 px-4 rounded-md bg-gray-200 hover:bg-gray-300 ${selectedAnswer === question && "bg-blue-500 text-white hover:bg-blue-600"}`}
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>
                            <div className="flex flex-col items-center justify-center mt-4">
                                {selectedAnswer && (
                                    <p className={`text-lg font-bold ${selectedAnswer === characters[currentCharacterIndex].answer ? "text-green-500" : "text-red-500"}`}>
                                        {selectedAnswer === characters[currentCharacterIndex].answer ? "正解！" : "不正解..."}
                                    </p>
                                )}
                                {selectedAnswer && currentCharacterIndex < characters.length - 1 && (
                                    <button onClick={handleNextCharacter} className="py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white">
                                        次のキャラクターへ
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                {selectedAnswer && currentCharacterIndex === characters.length - 1 && (
                    <footer className="flex justify-center py-8">
                        <p>おしまい</p>
                    </footer>
                )}
            </main>
        </>
    );

};

export default Yuzu;
