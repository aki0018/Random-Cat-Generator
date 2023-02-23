"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 92:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/pages/index.tsx


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
const fetchCatImage = async ()=>{
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = await res.json();
    return result[0];
};
// fetchCatImage().then((image) => {
//     // 戻り値がany型なので型エラーにならない
//     console.log(image.alt);
//     console.log(`猫の画像: ${image.url}`);  // シングルクォーテーションではなく、バッククォートを使用する
// });
const IndexPage = ({ initialCatImageUrl  })=>{
    const [catImageUrl, setCatImageUrl] = (0,external_react_.useState)(initialCatImageUrl);
    // const [catImageUrl, setCatImageUrl] = useState(
    //     "https://cdn2.thecatapi.com/images/bpc.jpg"
    // );
    const handleClick = async ()=>{
        const image = await fetchCatImage();
        setCatImageUrl(image.url);
    };
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("button", {
                onClick: handleClick,
                children: "きょうのにゃんこ\uD83D\uDE3A"
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                style: {
                    marginTop: 8
                },
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                    src: catImageUrl,
                    width: 500,
                    height: "auto"
                })
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    const catImage = await fetchCatImage();
    return {
        props: {
            initialCatImageUrl: catImage.url
        }
    };
};
/* harmony default export */ const pages = (IndexPage);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(92));
module.exports = __webpack_exports__;

})();