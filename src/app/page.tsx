"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";

interface topheadLinesInterface {
  articles: {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
      name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
  }[];
}

export default function Home() {
  const [topheadLines, setTopHeadlines] = useState<topheadLinesInterface>();
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        var url =
          "https://newsapi.org/v2/top-headlines?" +
          "country=us&" +
          "apiKey=885e08a7737f481c93ad3e8ba71b6c7e";

        const res = await (await fetch(url)).json();
        console.log(res);
        setTopHeadlines(res);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fillerSearchData = [
    {
      content: "Lorem ipsum",
    },
    {
      content: "Lorem ipsum",
    },
    {
      content: "Lorem ipsum",
    },
    {
      content: "Lorem ipsum",
    },
    {
      content: "Lorem ipsum",
    },
  ];

  return (
    <main className="bg-[#080808] text-white">
      <div className="flex justify-between mt-2 fixed w-screen">
        <div />
        <h1 className="text-3xl font-black tracking-widest">NAP</h1>
        <button className="-translate-x-3" onClick={() => setActive(true)}>
          <Search />
        </button>
      </div>

      {active ? (
        <div
          className="w-screen h-screen fixed z-50 duration-150 animate-fade animate-fill-both flex justify-center flex-col items-center"
          style={{
            backdropFilter: "blur(20px)",
          }}
        >
          <button onClick={() => setActive(false)}>
            <X
              className="absolute right-3 top-3
          "
            />
          </button>
          <input
            value={value}
            placeholder="Search..."
            className="bg-transparent outline-none text-xl placeholder:text-zinc-600"
            onChange={(e) => setValue(e.target.value)}
          />
          <ul className="w-[17rem]">
            {fillerSearchData.map((item, index) => (
              <li
                className="border-zinc-900 border-2 rounded-xl p-2 m-1 cursor-pointer"
                key={index}
              >
                {item.content}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {!loading && topheadLines ? (
        <div className="translate-y-44 z-0">
          <section
            id="top-headlines"
            className="flex flex-col justify-center items-center bg-[#080808]"
          >
            <div className="grid container-grid">
              <img
                className="md:h-[30vw] h-[50vw] rounded-xl blur-3xl z-10"
                alt="Amogus"
                src={topheadLines.articles[0].urlToImage}
              />
              <img
                className="md:h-[30vw] h-[50vw] rounded-xl z-50"
                alt="Amogus"
                src={topheadLines.articles[0].urlToImage}
              />
            </div>

            <h1 className="text-xl font-black mt-2 md:w-[45vw] w-[65vw] text-center">
              {topheadLines.articles[0].title}
            </h1>
          </section>
          <section id="feed" className="mt-10">
            <div className="flex justify-center flex-col w-screen items-center">
              <div
                className="md:w-[53vw] flex flex-row items-center rounded-xl rounded-t-3xl w-[80vw] mb-2 h-24 bg-[#202020] cursor-pointer"
                onClick={() => location.assign(topheadLines.articles[1].url)}
              >
                <div className="mx-3">
                  <img
                    className="rounded-xl w-20 h-20 object-cover"
                    alt="Amogus"
                    src={topheadLines.articles[1].urlToImage}
                  />
                </div>
                <h1 className="md:text-base text-sm w-[45vw]">
                  {topheadLines.articles[1].title}
                </h1>
              </div>
              <div
                className="md:w-[53vw] flex flex-row items-center rounded-xl rounded-t-3xl w-[80vw] mb-2 h-24 bg-[#202020] cursor-pointer"
                onClick={() => location.assign(topheadLines.articles[2].url)}
              >
                <div className="mx-3">
                  <img
                    className="rounded-xl w-20 h-20 object-cover"
                    alt="Amogus"
                    src={topheadLines.articles[2].urlToImage}
                  />
                </div>
                <h1 className="md:text-base text-sm w-[45vw]">
                  {topheadLines.articles[2].title}
                </h1>
              </div>
              <div
                className="md:w-[53vw] flex flex-row items-center rounded-xl rounded-t-3xl w-[80vw] mb-2 h-24 bg-[#202020] cursor-pointer"
                onClick={() => location.assign(topheadLines.articles[3].url)}
              >
                <div className="mx-3">
                  <img
                    className="rounded-xl w-20 h-20 object-cover"
                    alt="Amogus"
                    src={topheadLines.articles[3].urlToImage}
                  />
                </div>
                <h1 className="md:text-base text-sm w-[45vw]">
                  {topheadLines.articles[3].title}
                </h1>
              </div>
              <a href="/" className="text-zinc-400 mb-2">
                More...
              </a>
            </div>
          </section>
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </main>
  );
}
