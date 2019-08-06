export const simpleAnswers = [
	{
		r: /^(прив(ет(ствую)?)?|здравствуй(те)?|х[ао]й|хауди)[.!]?$/,
		t: ["Привет.", "Hello, world!", "Доброго времени суток!"]
	},
	{
		r: /^(пока|до свидания|прощай(те)?|до скорого)[.!]?$/,
		t: ["Пока!", "До скорой встречи!", "До свидания!"]
	},
	{
		r: /^((доброй|спокойной) ночи|(добрых|спокойных|хороших|сладких) снов)[.!]?/,
		e: "🌃"
	},
	{
		r: /^(как дела|что (ты )?делаешь)[?]?/,
		t: ["Отвечаю на твоё сообщение.", "Какие дела могут быть у скрипта?"]
	},
	{
		r: /^((что ты|ты что) такое|(кто ты|ты кто)( такой)?)[?]?/,
		t: ["Я – просто скрипт."]
	}
]