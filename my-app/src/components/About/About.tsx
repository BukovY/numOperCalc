import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";

export default function About() {
  return (
    <Box>
      <Typography variant="h2" align="center">
        О программе
      </Typography>
      <Typography variant="subtitle1" align="center">
        Калькулятор просчета времени и типов операций
      </Typography>
      <Typography variant="h4" align="center">
        Технологии
      </Typography>
      <Typography variant="subtitle1" align="center">
        TypeScript, React (with hooks), Redux, React-Redux, Redux Toolkit, React
        Router, Material UI, localStorage
      </Typography>
      <Typography variant="h5" align="center">
        Разработчик: Быков Евгений
        <a href="https://www.linkedin.com/in/%D0%B6%D0%B5%D0%BD%D1%8F-%D0%B1%D1%8B%D0%BA%D0%BE%D0%B2-8178011b6/">
          профиль linkedIn
        </a>
      </Typography>
      <Typography variant="h5" align="center">
        История версий
      </Typography>
      <Typography variant="h6" align="left">
        The future
      </Typography>
      <Typography variant="body1" align="left">
        Дизайн и более удобное расположение управляющих элементов
      </Typography>
      <Typography variant="h6" align="left">
        V1.0 (09-04-2021)
      </Typography>
      <Typography variant="body1" align="left">
        Приложение переписано с 0. Добавлена возможность хранения в localStorage
        (отказались от телеграм бота как от лишней зависимости). Часы и минуты
        теперь управляются вместе. Добавлена возможность сохранения данных дней
        в localStorage. Добавленна возможность удаления данных дня. Добавлена
        возможность автоматической калькуляции всех операций по выбранным дням.
      </Typography>
      <Typography variant="h6" align="left">
        V0.9 (02-12-2021)
      </Typography>
      <Typography variant="body1" align="left">
        Пофиксили отправку последнего типа операции. Сменили кнопку +15 минут на
        +20
      </Typography>
      <Typography variant="h6" align="left">
        V0.8
      </Typography>
      <Typography variant="body1" align="left">
        Функционал подключается на странице в коде, не требуется сброс кеша.
        Сокращен код с 182 на 133 строки.
      </Typography>
      <Typography variant="h6" align="left">
        V 0.7
      </Typography>
      <Typography variant="body1" align="left">
        Добавлены кнопки для ускорения подсчета времени операций. Затирание
        комментария при нажатии сбросить данные — пофикшено. Затирание полей
        ввода времени -0 — пофикшено. Label for для СА + ЭА + ИВЛ — пофикшено.
      </Typography>
      <Typography variant="h6" align="left">
        V 0.6
      </Typography>
      <Typography variant="body1" align="left">
        Отправка в телеграм — пофикшено. Добавлено новое поле вид операции и
        поле для ввода комментария
      </Typography>
      <Typography variant="h6" align="left">
        V 0.5
      </Typography>
      <Typography variant="body1" align="left">
        Модернизация пользовательского интерфейса. Раскраска кнопок, удаление
        лишних отступов, флотирование элементов.
      </Typography>
      <Typography variant="h6" align="left">
        V 0.4 (01-15-2021)
      </Typography>
      <Typography variant="body1" align="left">
        Реализована отправка данных в Telegram
      </Typography>
      <Typography variant="h6" align="left">
        V 0.3
      </Typography>
      <Typography variant="body1" align="left">
        Добавлено поле всего операций Переключение типа операций — залипание —
        пофикшено
      </Typography>
      <Typography variant="h6" align="left">
        V 0.2
      </Typography>
      <Typography variant="body1" align="left">
        Добавлены переключатели типа операций (СМА + ИВЛ, ПВТБ + ИВЛ, ЭА + ИВЛ)
        Добавлено поле всего минут
      </Typography>
      <Typography variant="h6" align="left">
        V 0.1
      </Typography>
      <Typography variant="body1" align="left">
        При превышении количества минут 60 данные пересчитываются добавляя к
        часам каждые 60 минут и остаток оставляя в поле минуты
      </Typography>
      <Typography variant="h6" align="left">
        V 0.0 (12-15-2021)
      </Typography>
      <Typography variant="body1" align="left">
        Созданы поля ввода минут и часов, переключатель типов операций (ТВА,
        СМА, ИВЛ)
      </Typography>
    </Box>
  );
}
