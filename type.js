const typewriter = (param) => {

    let el = document.querySelector(param.el);
    let speed = param.speed;
    let string = param.string.split("");
    string.forEach((char, index) => {
        setTimeout(() => {
            el.textContent += char;
        }, speed * index);
    });
};
typewriter({
    el: "#typewriter", //要素
    string: "4人の自己紹介", //文字列
    speed: 70 //速度
});

const wrap = document.getElementById('wrap');

const wraphide = () => {
    wrap.classList.add('wraphide'); //wraphideクラス追加
};

wrap.addEventListener('click', wraphide); //クリック時イベント
window.addEventListener('keydown', wraphide); //クリック時イベント
