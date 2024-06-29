"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Write a function called fetchData that uses fetch to get data from a given URL and returns the JSON response. Handle any potential errors with a try-catch block.
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        try {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            else {
                const data = response.json();
                return data;
            }
        }
        catch (error) {
            console.error("Error:", error.message);
            throw error;
        }
    });
}
const url = 'https://jsonplaceholder.typicode.com/posts/1';
fetchData(url).then(data => console.log(data)).catch(error => console.log(error));
