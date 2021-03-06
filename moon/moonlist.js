const sw = 'Sky Watcher 150/750 Explorer BD, '
const moonlist = [
    {
        id: 'moon01',
        title: 'Пепельный свет Луны',
        filename: 'earthshine',
        date: '26 марта 2020 г.',
        info: 'Ночная сторона Луны освещена солнечным светом, отраженным от Земли. Это явление наиболее заметно вблизи фазы новолуния, на снимке Луна находится в фазе 5%. Снимок сделан вскоре после захода Солнца, когда достаточно стемнело, чтобы пепельный свет стал различим на фоне светлого неба.',
        instruments: 'Canon 1100D, 300мм объектив',
    },
    {
        id: 'moon02',
        title: 'Луна над перистыми облаками',
        filename: 'img_7836',
        instruments: 'Canon 1100D, 300мм объектив',
    },
    {
        id: 'moon03',
        title: 'Луна в фазе 8%',
        filename: 'moon_tower',
        date: '1 сентября 2019 г.',
        info: 'Удалось поймать момент, когда заходящая Луна проходила за таллинской телевышкой.',
        instruments: 'Canon 1100D, 300мм объектив',
    },
    {
        id: 'moon04',
        title: 'Луна в фазе 96%',
        filename: 'fullmoon',
        date: '29 марта 2018 г.',
        info: 'Мозаика Луны из нескольких снимков.',
        instruments: sw+'ZWO ASI224MC',
    },
    {
        id: 'moon05',
        title: 'Луна в фазе 73%',
        filename: 'moon_180326',
        date: '26 марта 2018 г.',
        info: 'Мозаика Луны из нескольких снимков. Сложено 37 фрагментов зелёного канала (каждый 100 из 300 кадров).',
        instruments: sw+'линза барлоу 5х, Фильтр Baader UHC-S, ZWO ASI224MC',
    },
    {
        id: 'moon06',
        title: 'Птолемей, Альфонс и Арзахель',
        filename: 'alphonsus',
        date: '17 февраля 2019 г.',
        info: 'Утро в ударных кратерах Птолемей (центр), Альфонс (правее) и Арзахель (правый из трех). Валы отбрасывают длинные тени на дно кратеров.',
        instruments: sw+'линза барлоу 3х + ZWO ASI224MC',
    },
    {
        id: 'moon07',
        title: 'Море Дождей и Кавказ',
        filename: 'aristillus',
        info: 'Море Дождей (нижняя часть кадра), Кавказ (справа) и Альпы (центр). Центральный необычный кратер - Кассини, диаметром 57км. Дно кратера испещрено малыми кратерами Кассини А и В.',
        instruments: sw+'линза барлоу 3х, ZWO ASI224MC',
    },
    {
        id: 'moon08',
        title: 'Арзахель',
        filename: 'arzahel',
        info: 'Сравнительно молодой 97-километровый кратер Арзахель расположен в центральной южной части видимой стороны Луны, на восточной окраине Моря Облаков. Его глубина - 3,6 км. Благодаря своей хорошей различимости кратер является одним из наиболее наблюдаемых астрономами-любителями объектов на поверхности Луны. Наилучшее время для наблюдения — седьмой день после новолуния.',
        instruments: sw+'линза барлоу 3х, ZWO ASI224MC',
    },
    {
        id: 'moon09',
        title: 'Южная часть Луны',
        filename: 'clavius_0',
        info: 'Панорама южной части видимой стороны Луны',
        instruments: sw+'линза барлоу 3х, ZWO ASI224MC',
    },
    {
        id: 'moon10',
        title: 'Клавий',
        filename: 'clavius',
        info: 'Кратер Клавий - древний 230-километровый ударный кратер в южной части видимой стороны Луны. Является одним из древнейших образований на Луне. Южная часть вала (левая верхняя) перекрыта кратером Резерфурд. От него начинается дуга уменьшающихся в диаметре кратеров на дне Клавия: Клавий D — Клавий C — Клавий N — Клавий J — Клавий JA. Эта интересная последовательность часто используется в любительской астрономии как эталон для оценки разрешающей способности телескопа.',
        instruments: sw+'линза барлоу 2х, Canon 1100D',
    },
    {
        id: 'moon11',
        title: 'Цветная Луна в фазе 66%',
        filename: 'color_quarter',
        date: '3 февраля 2020 г.',
        info: 'Луна не совсем черно-белая, ее поверхность слегка цветная. Если выкрутить ползунок насыщенности при обработке, становятся заметны различия в цвете. Цвет зависит от химического состава поверхности. Синие оттенки - области, богатые титаном; оранжевые - с пониженным содержанием титана и железа.',
        instruments: sw+'Canon 1100D',
    },
    {
        id: 'moon12',
        title: 'Луна за церковью',
        filename: 'moon_church',
        date: '8 марта 2020 г.',
        info: 'Для выбора точки для этого снимка пришлось воспользоваться калькулятором положения Луны и google-картой.',
        instruments: 'Canon 1100D, объектив 300мм',
    },
    {
        id: 'moon13',
        title: 'Луна над городом',
        filename: 'tallinn_moonset',
        date: '5 сентября 2016 г.',
        info: 'Спонтаный снимок Луны, заходящей за жилыми девятиэтажками в соседнем городе.',
        instruments: 'Canon 1100D, Sky Watcher Skymax 90/1250'
    },
    {
        id: 'moon14',
        title: "Платон",
        filename: 'plato',
        date: '28 марта 2019 г.',
        info: 'Древний ударный кратер на северо-восточной границе Моря Дождей. Диаметр приблизительно 95-100 км. На юге от кратера находятся горы Тенерифе, на северо-западе простирается Море Холода, на востоке - борозды Платона.',
        instruments: sw+'линза барлоу 2х и 3х, ZWO ASI224MC'
    },
    {
        id: 'moon15',
        title: "Шиллер",
        filename: 'schiller',
        info: 'Шиллер - кратер необычной формы на юго-западной части видимого полушария Луны.  Шиллер имеет вытянутую форму, которая усиливается благодаря близости к лунному лимбу. Кратер словно создан слиянием нескольких кратеров и похож на след от подошвы обуви. Размеры кратера 179х71 км.',
        instruments: sw+'линза барлоу 2х и 3х, ZWO ASI224MC'
    },
    {
        id: 'moon16',
        date: '10 июля 2016 г.',
        title: "Цветная Луна в фазе 38%",
        filename: 'color_quarter2',
        info: 'Луна не совсем черно-белая, ее поверхность слегка цветная. Если выкрутить ползунок насыщенности при обработке, становятся заметны различия в цвете. Цвет зависит от химического состава поверхности.',
        instruments: sw+'Canon 1100D',
    },
    {
        id: 'moon17',
        date: '30 апреля 2020 г.',
        title: "Цветная Луна на боку",
        filename: 'moon_20200430_15',
        info: 'Луна не совсем черно-белая, ее поверхность слегка цветная. Если выкрутить ползунок насыщенности при обработке, становятся заметны различия в цвете. Цвет зависит от химического состава поверхности.',
        instruments: sw+'Canon 1100D',
    },
    {
        id: 'moon18',
        title: "Шиккард",
        filename: 'schickard',
        info: 'Шиккард — большой лунный ударный кратер диаметром около 210 км и глубиной 1,5 км, расположенный в юго-западной части видимой стороны.',
        instruments: sw+'ASI224MC, линза барлоу 2х',
    },
    {
        id: 'moon19',
        title: "Луна в фазе 21%",
        filename: 'crescent',
        info: 'Один кадр.',
        instruments: sw+'Canon 1100D, линза барлоу 2х',
    },
    {
        id: 'moon20',
        title: "Цветное полнолуние",
        filename: 'fullmoon_color',
        info: 'Луна не совсем черно-белая, ее поверхность слегка цветная. Если выкрутить ползунок насыщенности при обработке, становятся заметны различия в цвете. Цвет зависит от химического состава поверхности.',
        instruments: sw+'Canon 1100D, линза барлоу 2х',
    },
    {
        id: 'moon21',
        title: 'Луна за жилым зданием',
        filename: 'moon_building',
        date: '8 марта 2020 г.',
        info: 'Для выбора точки для этого снимка пришлось воспользоваться калькулятором положения Луны и google-картой.',
        instruments: 'Canon 1100D, объектив 300мм',
    },
]