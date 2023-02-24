import { useEffect, useState } from "react";
import type { NextPage, GetServerSideProps } from "next";

interface CatCategory {
    id: number;
    name: string;
}

interface SearchCatImage {
    breeds: string[];
    categories: CatCategory[];
    id: string;
    url: string;
    width: number;
    height: number;
}

type SearchCatImageResponse = SearchCatImage[];

// const catImages: string[] = [
//         "https://cdn2.thecatapi.com/images/bpc.jpg",
//         "https://cdn2.thecatapi.com/images/eac.jpg",
//         "https://cdn2.thecatapi.com/images/6qi.jpg",
//         "http://abehiroshi.la.coocan.jp/abe-top-20190328-2.jpg",
// ];
//
// const randomCatImage = (): string => {
//     const index = Math.floor(Math.random() * catImages.length);
//     return catImages[index];
// };

const fetchCatImage = async (): Promise<SearchCatImage> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = (await res.json()) as SearchCatImageResponse;
    return result[0];
};

interface IndexPageProps {
    initialCatImageUrl: string;
}

// fetchCatImage().then((image) => {
//     // 戻り値がany型なので型エラーにならない
//     console.log(image.alt);
//     console.log(`猫の画像: ${image.url}`);  // シングルクォーテーションではなく、バッククォートを使用する
// });

const IndexPage: NextPage<IndexPageProps> = ({ initialCatImageUrl }) => {
    const [catImageUrl, setCatImageUrl] = useState(initialCatImageUrl);
    // const [catImageUrl, setCatImageUrl] = useState(
    //     "https://cdn2.thecatapi.com/images/bpc.jpg"
    // );

    const handleClick = async () => {
        const image = await fetchCatImage();
        setCatImageUrl(image.url);
    };

    return (
        <div>
            <button 
                onClick={handleClick}
                style={{
                    backgroundColor: "#319795",
                    border: "none",
                    borderRadius: "4px",
                    color: "white",
                    padding: "4px 8px"
                }}
            >
                きょうのにゃんこ😺
            </button>
            <div style={{ marginTop: 8}}>
                <img src={catImageUrl} width={500} height="auto" />
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async() => {
    const catImage = await fetchCatImage();
    return {
        props: {
            initialCatImageUrl: catImage.url,
        },
    };
}

export default IndexPage;