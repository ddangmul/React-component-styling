/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // extend - fontFamily : 폰트 목록을 확장하겠다는 의미
        title: ['"Pacifico"', "cursive"], // 구글폰트는 홑따옴표 안 쌍따옴표로 작성해야 함
      },
    },
  },
  plugins: [],
};
