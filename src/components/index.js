const resultFoto = document.querySelector("#resultFoto");
const textResult = document.querySelector("#totalResult");
const descriptionResult = document.querySelector("#descriptionResult");
const button = document.querySelector("#makeCalculation");
const inputData = document.querySelector("#inputData");
const result = document.querySelector("#result");
const refresh = document.querySelector("#refresh");
const form = document.forms.form;
const inputArray = Array.from(
    document.querySelectorAll(".entered-data__input")
);

let sum = 0;

button.addEventListener("click", (event) => {
    event.preventDefault();
    inputData.classList.add("output-data_not-visible");
    result.style.display = "flex";
    totalResult(inputArray);
    printResult();
});

refresh.addEventListener("click", () => {
    form.reset();
});

const totalResult = (array) => {
    array.forEach((item) => {
        if (item.value > 10) {
            item.value = 10;
        } else if (item.value <= 0) {
            item.value = 1;
        }
        sum = sum + Number(item.value);
    });
    return sum;
};

const printResult = () => {
    if (sum >= 50) {
        resultFoto.setAttribute(
            "src",
            "https://sun9-48.userapi.com/impf/5g0N8nzEQ5qpWSwSVKH_w2EIlD-0z-wUamyJBA/Xzctrh-3-jw.jpg?size=1280x960&quality=95&sign=f312f0e02efed502526559e11fa16799&type=album"
        );
        textResult.textContent = `Твой результат: ${(sum / 60) * 100}%`;
        descriptionResult.textContent = "У ТЕБЯ УЖЕ ВСЕ СУПЕР";
    } else if (sum >= 30 && sum < 50) {
        resultFoto.setAttribute(
            "src",
            "https://sun9-41.userapi.com/impf/zPCRhLYHGw9VANaFAeFP-udn-jEYGjPv7i3OPQ/nYbf5FLvv7E.jpg?size=1280x960&quality=95&sign=d9c84bd8dfc12a54682a5726ded4fa70&type=album"
        );
        textResult.textContent = `Твой результат: ${(sum / 60) * 100}%`;
        descriptionResult.textContent =
            "НУ ТЫ КОНЕЧНО НА ПУТИ К СЧАСТЬЮ, НО ЕСТЬ ГДЕ ПОДНАЖАТЬ!";
    } else {
        resultFoto.setAttribute(
            "src",
            "https://sun9-57.userapi.com/impf/m8F22_tbTZ8_y21mUG1m5KDoEFc-yplO9gGJjA/cjp6TjF-3Yc.jpg?size=960x1280&quality=95&sign=ab74b869c6e6e357883f34ef6c336d8c&type=album"
        );
        textResult.textContent = `Твой результат: ${(sum / 60) * 100}%`;
        descriptionResult.textContent =
            "Очень хорошо что ты не унываешь..мы такой тебя и знаем..но ничего. скоро все наладится!";
    }
};

resultFoto.addEventListener("click", () => {
    console.log(
        "Если ты вдруг открыла консоль, то, конечно, хотелось бы написать тебе: мы с Наташей тебя очень любим и желаем тебе всего самого хорошего и интересного в жизни. Здорово что ты такая есть у нас сестра и такой хороший человек, с которыс можно обо всем погворить, посмеяться и просто побыть! С днем рожденья, Дашкин!"
    );
});
