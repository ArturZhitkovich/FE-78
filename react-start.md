# Первый проект на React

**Стек:** React + TypeScript + Vite + SCSS Modules + Material UI (светлая и тёмная тема)

---

# Памятка: как забрать новые материалы из `main`

Преподаватель добавляет новые файлы в ветку `main`. Вы работаете в своей ветке, например `Ivan-Ivanov-main`. Чтобы получить новые файлы к себе, нужно влить `main` в свою ветку.

**Один раз** (если своей ветки ещё нет):

```bash
git clone https://github.com/ArturZhitkovich/FE-78.git
cd FE-78
git checkout -b Ivan-Ivanov-main
git push -u origin Ivan-Ivanov-main
```

**Каждый раз, когда вышли новые материалы:**

```bash
# 1. Сохраняем свою работу
git add .
git commit -m "моя работа"

# 2. Обновляем main
git checkout main
git pull origin main

# 3. Возвращаемся в свою ветку и вливаем в неё main
git checkout Ivan-Ivanov-main
git merge main

# 4. Отправляем на GitHub
git push
```

> Проверить, в какой вы ветке: `git branch` (текущая отмечена `*`).

> Если git написал `CONFLICT` — вы и преподаватель поменяли один и тот же файл. Откройте файл в VS Code, выберите нужный вариант (Accept Current / Incoming / Both), затем `git add .` и `git commit`.

> В ветке `main` ничего не меняйте и не коммитьте — она только для получения обновлений.

---

# Глава 1. Создаём проект

## 0. Что должно быть установлено

- **Node.js** версии 20.19+ или 22+ — проверить: `node -v`
- **VS Code** (желательно)

---

## 1. Создаём проект

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

Откройте адрес из терминала (обычно http://localhost:5173) — должна появиться стартовая страница Vite.

> `my-app` — название папки проекта, можно заменить на своё.

---

## 2. Ставим библиотеки

```bash
# Material UI + его движок стилей + иконки
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

# Поддержка SCSS (только для разработки)
npm install -D sass-embedded
```

Больше ничего настраивать не нужно — Vite сам понимает `.scss` и `.module.scss`.

---

## Про Material UI: зачем и как

**Material UI (MUI)** — библиотека готовых React-компонентов в стиле Material Design от Google. Документация: https://mui.com/material-ui/all-components/

### Зачем мы его используем

- **Не верстаем с нуля.** Кнопки, поля ввода, карточки, модальные окна, таблицы, меню уже готовы и хорошо выглядят.
- **Единый стиль.** Все компоненты сочетаются друг с другом: одинаковые отступы, шрифты, скругления.
- **Темы.** Цвета задаются в одном месте (`theme.ts`), и тёмная тема работает для всех компонентов сразу.
- **Доступность.** Работа с клавиатуры, фокус и `aria`-атрибуты уже настроены.
- **Популярность.** Огромное сообщество, подробная документация с примерами, часто встречается в реальных проектах.

### Как использовать

**1. Импортируем компонент** из `@mui/material` и используем как обычный React-компонент.

**2. Настраиваем через props.** У большинства компонентов есть `variant`, `color`, `size`, `disabled`:

```tsx
import { Button, Stack } from '@mui/material';

<Stack direction="row" spacing={2}>
  <Button variant="text">Text</Button>
  <Button variant="outlined">Outlined</Button>
  <Button variant="contained">Contained</Button>
  <Button variant="contained" color="error" size="small">Удалить</Button>
</Stack>
```

**3. Быстрые стили через `sx`.** Это проп со стилями, который понимает значения из темы. Число в отступах умножается на 8px:

```tsx
import { Box } from '@mui/material';

<Box
  sx={{
    p: 2,                       // padding: 16px (2 × 8px)
    mt: 1,                      // margin-top: 8px
    bgcolor: 'primary.main',    // цвет из темы
    color: 'primary.contrastText',
    borderRadius: 1,
    '&:hover': { opacity: 0.8 },
  }}
>
  Блок со стилями через sx
</Box>
```

**4. Собираем вместе.** Пример маленькой формы:

```tsx
import { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const MuiDemo = () => {
  const [name, setName] = useState('');

  return (
    <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Привет, {name || 'гость'}!
      </Typography>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Ваше имя"
          size="small"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          disabled={!name}
          onClick={() => alert(`Отправлено: ${name}`)}
        >
          Отправить
        </Button>
      </Stack>
    </Box>
  );
};
```

### Самые нужные компоненты

| Компонент                 | Для чего                                           |
| ------------------------- | -------------------------------------------------- |
| `Box`                     | универсальный контейнер (как `div`, но с `sx`)     |
| `Stack`                   | элементы в ряд или столбик с отступом `spacing`    |
| `Grid`                    | сетка и адаптивная раскладка                       |
| `Container`               | ограничивает ширину контента и ставит его по центру |
| `AppBar`, `Toolbar`       | шапка сайта                                        |
| `Typography`              | текст: заголовки `h1`–`h6`, `body1`, `caption`     |
| `Button`, `IconButton`    | кнопки                                             |
| `TextField`               | поле ввода                                         |
| `Card`, `Paper`           | карточки и «листы» с фоном                         |
| `Dialog`                  | модальное окно                                     |
| `Snackbar`, `Alert`       | уведомления                                        |

Иконки берём из `@mui/icons-material`, поиск по названию: https://mui.com/material-ui/material-icons/

### `sx` или SCSS-модуль?

- **`sx`** — подправить один MUI-компонент: отступ, цвет, ширину.
- **`*.module.scss`** — своя вёрстка и большие блоки стилей, которые не связаны с MUI.

### Как читать документацию

Откройте страницу компонента на mui.com: сверху живые примеры (у каждого есть кнопка «Show code»), внизу ссылка **API** со списком всех props.

---

## 3. Чистим шаблон

Удалите файлы `src/App.css` и `src/index.css` и уберите их импорты из `main.tsx` и `App.tsx`.

Итоговая структура:

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── ThemeToggle.tsx
│   └── Layout/
│       └── Layout.tsx
├── styles/
│   └── _variables.scss
├── theme/
│   └── theme.ts
├── App.tsx
├── App.module.scss
└── main.tsx
```

---

## 4. Создаём тему (светлая + тёмная)

`src/theme/theme.ts`

```ts
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  // MUI создаст CSS-переменные (--mui-palette-...), их можно использовать в SCSS
  cssVariables: { colorSchemeSelector: 'data' },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#1976d2' },
        background: { default: '#f5f5f5', paper: '#ffffff' },
      },
    },
    dark: {
      palette: {
        primary: { main: '#90caf9' },
        background: { default: '#121212', paper: '#1e1e1e' },
      },
    },
  },
  // Контрольные точки экрана. Оставляем стандартные значения MUI:
  // xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536.
  // Если понадобится другая ширина (например, xl: 1440), задаём её здесь:
  // breakpoints: {
  //   values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1440 },
  // },
  components: {
    // Любой <Container> по умолчанию будет шириной до xl (1536px)
    MuiContainer: {
      defaultProps: { maxWidth: 'xl' },
    },
  },
});
```

- `colorSchemes` — цвета для светлой и тёмной темы.
- `components.MuiContainer` — настройки по умолчанию для компонента `Container`. Теперь любой `<Container>` в проекте ограничен шириной `xl` (1536px) и стоит по центру.
- `breakpoints` — ширины экрана, на которых меняется раскладка. Мы оставляем стандартные значения MUI. Если дизайн требует другую ширину, например 1440px, раскомментируйте блок `breakpoints` и поменяйте `xl` — ширина изменится для всего сайта.

> Учтите: `xl` — это ещё и контрольная точка для адаптивности. Если её поменять, `Grid` и `theme.breakpoints.up('xl')` тоже начнут срабатывать на новой ширине.

---

## 5. Подключаем тему

`src/main.tsx`

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme} defaultMode="system">
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
```

- `ThemeProvider` — раздаёт тему всем компонентам.
- `CssBaseline` — сбрасывает стили браузера и красит фон под текущую тему.
- `defaultMode="system"` — по умолчанию берётся тема из настроек ОС.

Выбор пользователя MUI **сам сохраняет в localStorage** — после перезагрузки тема останется.

---

## 6. Кнопка переключения темы

`src/components/Header/ThemeToggle.tsx`

```tsx
import { IconButton, Tooltip } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export const ThemeToggle = () => {
  const { mode, systemMode, setMode } = useColorScheme();

  if (!mode) return null; // тема ещё не определилась

  const current = mode === 'system' ? systemMode : mode;
  const isDark = current === 'dark';

  return (
    <Tooltip title={isDark ? 'Светлая тема' : 'Тёмная тема'}>
      <IconButton color="inherit" onClick={() => setMode(isDark ? 'light' : 'dark')}>
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
};
```

---

## 7. Шапка и Layout на компонентах MUI

Используем готовые компоненты MUI:

- `AppBar` — шапка, фон на всю ширину экрана;
- `Toolbar` — строка внутри шапки;
- `Container` — ограничивает ширину (у нас до `xl`, 1536px) и ставит контент по центру;
- `Box` с `component="main"` — тег `<main>` с отступами через `sx`.

`src/components/Header/Header.tsx`

```tsx
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  return (
    // фон шапки — на всю ширину экрана
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'divider' }}
    >
      {/* а содержимое — внутри контейнера */}
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="h1" color="primary">
            Мой первый проект
          </Typography>
          <ThemeToggle />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
```

`disableGutters` убирает у `Toolbar` собственные отступы — их уже даёт `Container`, поэтому шапка ровно по краям с контентом.

**Layout** — общий каркас для всех страниц: шапка сверху, под ней контент в контейнере. Новую страницу просто оборачиваем в `<Layout>`.

`src/components/Layout/Layout.tsx`

```tsx
import type { ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import { Header } from '../Header/Header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ py: 4 }}>
        <Container>{children}</Container>
      </Box>
    </>
  );
};
```

`children` — это всё, что положили между тегами: `<Layout>вот это</Layout>`.

---

## 8. SCSS Modules

**Правило:** файл называется `Имя.module.scss`. Классы из него доступны только в том компоненте, куда импортированы, — конфликтов имён не будет.

MUI отвечает за готовые компоненты, а SCSS-модули — за нашу собственную вёрстку.

### Общие переменные для всего проекта

Отступы, скругления и другие общие значения храним в одном файле. Поменяли там — поменялось во всём проекте.

`src/styles/_variables.scss`

```scss
// Общие переменные проекта — меняем здесь, и они меняются везде.
// Подключаем в нужный файл: @use '<путь до src>/styles/variables' as *;

// Отступы
$gap-small: 8px;
$gap: 16px;
$gap-large: 32px;

// Скругления
$radius: 8px;
```

Подключаем этот файл в начале любого `.scss`, где нужны переменные, строкой `@use`. Путь — относительный, как у обычного импорта:

| Где лежит ваш `.scss`                         | Что пишем в первой строке                    |
| --------------------------------------------- | -------------------------------------------- |
| `src/App.module.scss`                         | `@use './styles/variables' as *;`            |
| `src/components/Header/Header.module.scss`    | `@use '../../styles/variables' as *;`        |

`as *` значит «использовать переменные напрямую»: пишем `$gap`, а не `variables.$gap`. Подчёркивание и `.scss` в пути не пишем.

### Используем в компоненте

`src/App.module.scss`

```scss
// Подключаем общие переменные проекта
@use './styles/variables' as *;

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start; // кнопка не растягивается на всю ширину
  gap: $gap;
}

.hint {
  margin: 0;
  padding-left: $gap-small;
  // цвета берём из темы MUI — они сами меняются при переключении
  color: var(--mui-palette-text-secondary);
  border-left: 3px solid var(--mui-palette-primary-main);
}
```

---

## 9. Собираем страницу

`src/App.tsx`

```tsx
import { useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { Layout } from './components/Layout/Layout';
import styles from './App.module.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className={styles.content}>
        <p className={styles.hint}>
          Переключите тему в шапке — цвета этого текста тоже поменяются.
        </p>
        <Card>
          <CardContent>
            <Typography variant="h5">Счётчик: {count}</Typography>
          </CardContent>
        </Card>
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          Нажми меня
        </Button>
      </div>
    </Layout>
  );
}

export default App;
```

Запустите `npm run dev`, нажмите на иконку луны/солнца — вся страница (и компоненты MUI, и ваши SCSS-стили) поменяет тему. Растяните окно шире 1536px — контент останется по центру.

---

## 10. Полезные команды

| Команда           | Что делает                              |
| ----------------- | --------------------------------------- |
| `npm run dev`     | запуск в режиме разработки              |
| `npm run build`   | проверка типов + сборка в папку `dist`  |
| `npm run preview` | просмотр собранной версии               |

---

## Шпаргалка: где что писать

| Задача                                   | Инструмент                                          |
| ---------------------------------------- | --------------------------------------------------- |
| Готовые кнопки, карточки, поля, модалки  | компоненты MUI (`Button`, `Card`, `TextField`...)   |
| Подправить стиль одного MUI-компонента   | проп `sx`                                           |
| Свою вёрстку и раскладку                 | `*.module.scss` + `className={styles.xxx}`          |
| Общие отступы и переменные SCSS          | `src/styles/_variables.scss` + `@use`              |
| Ограничить ширину страницы               | `<Container>` из MUI (ширина `xl` в `theme.ts`)    |
| Цвета, которые зависят от темы           | `var(--mui-palette-...)` в SCSS                     |
| Поменять цвета темы                      | `src/theme/theme.ts`                                |

## Частые ошибки

- **Импортировали `App.scss` вместо `App.module.scss`** — стили станут глобальными, `styles.content` будет `undefined`.
- **Писали `class` вместо `className`** — в JSX только `className`.
- **Цвет в SCSS захардкожен (`#fff`)** — в тёмной теме он не поменяется. Используйте переменные `--mui-palette-*`.
- **Компонент назван с маленькой буквы** — React-компоненты всегда с большой: `Header`, а не `header`.

---
---

# Глава 2. Компоненты и хуки

## 2.1. Что такое компонент

**Компонент** — это функция, которая возвращает разметку (JSX). Из компонентов, как из кубиков, собирается всё приложение: `App` → `Layout` → `Header` → `ThemeToggle`.

```tsx
export const Hello = () => {
  return <h2>Привет!</h2>;
};

// используем как тег
<Hello />
```

Правила:

- имя всегда **с большой буквы**: `Hello`, а не `hello`;
- возвращает **один** корневой элемент. Если нужно несколько — оборачиваем в `<>...</>` (фрагмент);
- один компонент — один файл с тем же именем: `Hello.tsx`.

> Раньше писали **классовые** компоненты (`class Hello extends React.Component`). Сейчас пишем только **функциональные** — классовые встретите разве что в старых проектах.

---

## 2.2. Props — входные данные компонента

Props — это «атрибуты» компонента. Через них родитель передаёт данные внутрь. Тип props описываем через `type`:

```tsx
type ProductCardProps = {
  title: string;
  price: number;
};

export const ProductCard = ({ title, price }: ProductCardProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{price} ₽</p>
    </div>
  );
};

// использование
<ProductCard title="Наушники" price={4990} />
```

- `step?: number` — знак `?` делает проп **необязательным**, значение по умолчанию задаём прямо в параметрах: `({ step = 1 })`.
- `children` — особый проп: всё, что положили **между тегами** (мы уже использовали его в `Layout`).
- Props **только для чтения** — внутри компонента их не меняем.

---

## 2.3. Какие бывают компоненты

| Вид                | Что делает                                                        | Примеры                                  | Где лежит            |
| ------------------ | ----------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| **UI-компоненты**  | Только показывают то, что пришло в props. Без запросов и сложной логики. Легко переиспользовать. | `ProductCard`, `Avatar`, `PriceTag`      | `src/components/`    |
| **Блоки (виджеты)**| Крупный кусок экрана со своей логикой и состоянием.               | `Counter`, `LoginForm`, `ProductList`    | `src/components/`    |
| **Layout**         | Каркас: шапка, подвал, контейнер. Внутрь кладём страницу через `children`. | `Layout`, `Header`                       | `src/components/`    |
| **Страницы**       | Целый экран. Собирают блоки вместе, отвечают за конкретный адрес. | `HomePage`, `ProfilePage`                | `src/pages/`         |

Плюс готовые компоненты библиотек — у нас это MUI (`Button`, `Card`, `TextField`). Свои компоненты часто собираются **из них**.

---

## 2.4. Хуки

**Хук** — функция, которая начинается с `use` и даёт компоненту дополнительные возможности: память, реакцию на изменения, доступ к DOM.

### Основные хуки

| Хук           | Для чего                                                                 | Когда нужен                                      |
| ------------- | ------------------------------------------------------------------------ | ------------------------------------------------ |
| `useState`    | Хранит данные, при изменении которых компонент **перерисовывается**      | счётчик, открыто/закрыто, текст в поле           |
| `useEffect`   | Выполняет код **после отрисовки**: запросы, таймеры, подписки            | загрузить данные, поменять `document.title`      |
| `useRef`      | Ссылка на DOM-элемент или значение, которое **не вызывает** перерисовку  | поставить фокус в поле, хранить id таймера       |
| `useContext`  | Достаёт общие данные без передачи props через все уровни                 | тема, текущий пользователь, язык                 |
| `useMemo`     | Запоминает **результат** тяжёлого вычисления                             | фильтрация/сортировка большого списка            |
| `useCallback` | Запоминает **функцию** между перерисовками                               | передаём функцию в оптимизированный компонент    |
| `useReducer`  | Как `useState`, но для сложного состояния с разными действиями           | корзина, многошаговая форма                      |
| `useId`       | Уникальный id                                                            | связать `<label>` и `<input>`                    |

Хуки из MUI, которые пригодятся: `useColorScheme` (тема — уже используем), `useTheme` (достать значения темы), `useMediaQuery` (проверить ширину экрана).

> Для начала хватит **трёх**: `useState`, `useEffect`, `useRef`. `useMemo` и `useCallback` — оптимизация, без них всё работает.

### `useState` — память компонента

```tsx
const [isOpen, setIsOpen] = useState(false);
//     ↑ значение  ↑ функция для изменения   ↑ начальное значение

<button onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? 'Скрыть' : 'Показать'}
</button>
```

Меняем значение **только** через `setIsOpen`. Если новое значение зависит от старого — передаём функцию: `setCount((prev) => prev + 1)`.

### `useEffect` — действие после отрисовки

```tsx
// выполняется после отрисовки и каждый раз, когда меняется count
useEffect(() => {
  document.title = `Счётчик: ${count}`;
}, [count]);
```

Второй аргумент — **массив зависимостей**:

| Массив        | Когда выполнится                          |
| ------------- | ----------------------------------------- |
| `[count]`     | при появлении и при каждом изменении `count` |
| `[]`          | один раз, когда компонент появился        |
| не передан    | после **каждой** отрисовки (обычно ошибка) |

Если запустили таймер или подписку — возвращаем **функцию очистки**:

```tsx
useEffect(() => {
  const id = setInterval(() => setSeconds((s) => s + 1), 1000);

  // функция очистки — когда компонент исчезает
  return () => clearInterval(id);
}, []);
```

### `useRef` — доступ к элементу

```tsx
const inputRef = useRef<HTMLInputElement>(null);

<TextField inputRef={inputRef} label="Поиск" />
<Button onClick={() => inputRef.current?.focus()}>Перейти к поиску</Button>
```

### Правила хуков

1. Вызываем **только внутри компонента** или своего хука.
2. Только **на верхнем уровне** — не внутри `if`, циклов и обычных функций.
3. Имя своего хука всегда начинается с **`use`**.

### Свои хуки

Если логика повторяется или мешает читать разметку — выносим её в свой хук в папку `src/hooks/`:

`src/hooks/useCounter.ts`

```ts
import { useState } from 'react';

// Свой хук: логика счётчика отдельно от разметки
export const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + step);
  const reset = () => setCount(initialValue);

  return { count, increment, reset };
};
```

---

## 2.5. Как понять, что пора создавать компонент

Выносите кусок разметки в отдельный компонент, если ответ «да» хотя бы на один вопрос:

- **Повторяется?** Один и тот же блок встречается 2 раза и больше (карточки товаров, пункты меню).
- **Можно назвать?** У куска есть понятное имя: «шапка», «форма входа», «карточка товара».
- **Своя логика?** У куска есть своё состояние или обработчики (открыть/закрыть, ввод текста).
- **Файл разросся?** Компонент длиннее ~100–150 строк, и в нём трудно ориентироваться.

**Не нужно** создавать компонент ради одного `<div>` или одной строки текста — слишком мелкое дробление тоже мешает читать код.

### Пример: выносим счётчик

Раньше счётчик был прямо в `App.tsx`. Если нужно два счётчика — пришлось бы копировать код. Выносим в компонент:

`src/components/Counter/Counter.module.scss`

```scss
@use '../../styles/variables' as *;

.counter {
  display: flex;
  align-items: center;
  gap: $gap;
}
```

`src/components/Counter/Counter.tsx`

```tsx
import { Button, Typography } from '@mui/material';
import { useCounter } from '../../hooks/useCounter';
import styles from './Counter.module.scss';

type CounterProps = {
  title: string;
  step?: number; // ? — необязательный проп
};

export const Counter = ({ title, step = 1 }: CounterProps) => {
  const { count, increment, reset } = useCounter(0, step);

  return (
    <div className={styles.counter}>
      <Typography variant="h6">
        {title}: {count}
      </Typography>
      <Button variant="contained" onClick={increment}>
        +{step}
      </Button>
      <Button onClick={reset}>Сбросить</Button>
    </div>
  );
};
```

Создаём страницу и используем счётчик дважды с разными props:

`src/pages/HomePage/HomePage.tsx`

```tsx
import { Stack, Typography } from '@mui/material';
import { Counter } from '../../components/Counter/Counter';

export const HomePage = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h4">Главная</Typography>
      <Counter title="Яблоки" />
      <Counter title="Груши" step={5} />
    </Stack>
  );
};
```

`App.tsx` становится совсем коротким — только каркас и страница:

`src/App.tsx`

```tsx
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;
```

---

## 2.6. Где что лежит

```
src/
├── api/          # запросы к серверу
├── assets/       # картинки, иконки, шрифты
├── components/   # общие компоненты: UI, блоки, Layout
│   ├── Counter/
│   │   ├── Counter.tsx
│   │   └── Counter.module.scss
│   ├── Header/
│   └── Layout/
├── hooks/        # свои хуки: useCounter.ts
├── pages/        # страницы
│   └── HomePage/
│       └── HomePage.tsx
├── styles/       # общие SCSS-переменные
├── theme/        # тема MUI
├── types/        # общие типы TypeScript
├── utils/        # вспомогательные функции: formatPrice.ts
├── App.tsx
└── main.tsx
```

Папки создаём **по мере надобности** — пустые `api/` или `types/` заводить заранее не нужно.

### Правила именования

| Что                  | Как называем                     | Пример                               |
| -------------------- | -------------------------------- | ------------------------------------ |
| Компонент            | `PascalCase`, папка = имя файла  | `ProductCard/ProductCard.tsx`        |
| Стили компонента     | рядом, то же имя + `.module.scss`| `ProductCard/ProductCard.module.scss`|
| Страница             | `PascalCase` + слово `Page`      | `pages/HomePage/HomePage.tsx`        |
| Хук                  | `camelCase`, начинается с `use`  | `hooks/useCounter.ts`                |
| Утилита              | `camelCase`                      | `utils/formatPrice.ts`               |

- Одна папка — один компонент, всё, что к нему относится, лежит рядом.
- Компонент нужен только на одной странице? Можно положить его в папку этой страницы: `pages/HomePage/components/`.

### Шаблон нового компонента

```
src/components/ProductCard/
├── ProductCard.tsx
└── ProductCard.module.scss
```

`src/components/ProductCard/ProductCard.tsx`

```tsx
import styles from './Template.module.scss';

type ProductCardProps = {
  title: string;
  price: number;
};

export const ProductCard = ({ title, price }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{price} ₽</p>
    </div>
  );
};
```

---

## 2.7. Частые ошибки с компонентами и хуками

- **Меняем состояние напрямую** (`count++` или `items.push(...)`) — React не узнает об изменении и не перерисует. Всегда через `setCount(...)`, для массивов — новый массив: `setItems([...items, newItem])`.
- **`useEffect` без массива зависимостей и с `setState` внутри** — бесконечная перерисовка.
- **Хук внутри `if`** — React путает хуки между отрисовками. Хуки — всегда сверху компонента.
- **Читаем состояние сразу после `setState`** — новое значение появится только при следующей отрисовке.
- **Забыли `key` в списке** — при выводе массива через `map` каждому элементу нужен уникальный `key`: `items.map((item) => <ProductCard key={item.id} ... />)`.
- **Меняем props внутри компонента** — props только для чтения. Нужно менять — заводим `useState` или просим родителя.

---
---

# Глава 3. Жизненный цикл компонента

## 3.1. Три этапа жизни

У каждого компонента есть «жизнь»: он появляется на странице, обновляется и исчезает.

| Этап                               | Что происходит                                       | Пример                                    |
| ---------------------------------- | ---------------------------------------------------- | ----------------------------------------- |
| **Монтирование** (mount)           | Компонент **впервые** появился на странице           | открыли страницу, показали модалку        |
| **Обновление** (update)            | Компонент **перерисовался** с новыми данными         | нажали «+1», ввели текст в поле           |
| **Размонтирование** (unmount)      | Компонент **убрали** со страницы                     | закрыли модалку, перешли на другую страницу |

```
Монтирование  →  Обновление  →  Обновление  →  ...  →  Размонтирование
   (1 раз)         (сколько угодно раз)                     (1 раз)
```

---

## 3.2. Когда компонент перерисовывается

Компонент обновляется (React заново вызывает функцию компонента), если:

1. Изменилось его **состояние** — вызвали `setState`.
2. Изменились его **props** — родитель передал новые данные.
3. Перерисовался **родитель** — дети перерисовываются вместе с ним.
4. Изменился **контекст**, который компонент читает через `useContext`.

> Перерисовка — это не «перезагрузка страницы». React вызывает функцию, сравнивает новый результат со старым и меняет в браузере **только то, что изменилось**.

Что происходит при каждой отрисовке, по порядку:

1. **Render** — React вызывает функцию компонента и получает JSX.
2. **Commit** — React обновляет DOM (то, что видно на странице).
3. **Effects** — запускаются `useEffect`, у которых изменились зависимости.

---

## 3.3. Жизненный цикл через `useEffect`

В функциональных компонентах всеми этапами управляет `useEffect`:

| Этап                 | Как поймать                                     |
| -------------------- | ----------------------------------------------- |
| Монтирование         | `useEffect(() => { ... }, [])`                  |
| Обновление           | `useEffect(() => { ... }, [value])`             |
| Размонтирование      | `return () => { ... }` внутри `useEffect`       |

Посмотрите, в каком порядке появляются сообщения в консоли браузера (F12 → Console):

`LifecycleDemo.tsx`

```tsx
import { useEffect, useState } from 'react';

export const LifecycleDemo = ({ name }: { name: string }) => {
  const [count, setCount] = useState(0);

  // 1. Рендер: тело функции выполняется при КАЖДОЙ отрисовке
  console.log('render', { name, count });

  // 2. Монтирование и размонтирование
  useEffect(() => {
    console.log('mount: компонент появился на странице');

    return () => {
      console.log('unmount: компонент убрали со страницы');
    };
  }, []);

  // 3. Обновление: срабатывает, когда изменился count
  useEffect(() => {
    console.log('update: count стал', count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>{name}: {count}</button>;
};
```

Чтобы увидеть размонтирование, компонент нужно убрать со страницы:

`ShowHide.tsx`

```tsx
import { useState } from 'react';
import { LifecycleDemo } from './LifecycleDemo';

export const ShowHide = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Убрать' : 'Показать'}
      </button>

      {/* visible = false → LifecycleDemo размонтируется */}
      {visible && <LifecycleDemo name="Счётчик" />}
    </>
  );
};

type User = {
  id: number;
  name: string;
};
```

> **Почему в консоли всё по два раза?** В режиме разработки `<StrictMode>` специально монтирует компонент, сразу размонтирует и монтирует снова — чтобы найти эффекты без функции очистки. В собранном проекте (`npm run build`) такого нет. Это нормально, ничего не сломалось.

---

## 3.4. Практика: загрузка данных

Самая частая задача для `useEffect` — загрузить данные с сервера, когда компонент появился, и перезагрузить, когда изменился параметр:

`UserCard.tsx`

```tsx
import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
};

export const UserCard = ({ userId }: { userId: number }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data: User) => setUser(data))
      .catch(() => {}) // запрос отменён или ошибка сети
      .finally(() => setIsLoading(false));

    // userId поменялся или компонент исчез → отменяем старый запрос
    return () => controller.abort();
  }, [userId]);

  if (isLoading) return <p>Загрузка...</p>;
  if (!user) return <p>Пользователь не найден</p>;

  return <h3>{user.name}</h3>;
};
```

- **Монтирование** — запрос уходит первый раз.
- **Обновление** — поменялся `userId` → старый запрос отменяется, уходит новый.
- **Размонтирование** — ушли со страницы → запрос отменяется, `setUser` не вызовется у исчезнувшего компонента.

### Почему `useEffect(..., [])` срабатывает 2 раза при разработке

Откройте вкладку **Network** (F12) — при запуске через `npm run dev` вы увидите **два** запроса к `/users/1`, а первый будет помечен как **canceled**. Это не ошибка.

**Кто это делает.** `<StrictMode>` в `main.tsx`. Только в режиме разработки он для каждого компонента делает так:

```
mount → эффект запустился (запрос №1)
unmount → функция очистки (запрос №1 отменён)
mount → эффект запустился снова (запрос №2) ✓
```

**Зачем.** React проверяет, что у эффекта правильная функция очистки. Если очистки нет, ошибка вылезет сразу при разработке, а не у пользователей:

| Эффект                         | Без очистки при двойном запуске               | С очисткой                     |
| ------------------------------ | --------------------------------------------- | ------------------------------ |
| `setInterval`                  | два таймера, счётчик идёт ×2                  | работает один таймер           |
| `addEventListener`             | обработчик срабатывает два раза               | один обработчик                |
| `fetch`                        | два запроса, ответы могут прийти не по порядку | первый отменён, данные от второго |

**Когда так не будет.** В собранном проекте (`npm run build` и `npm run preview`) эффект срабатывает **один раз**.

**Что делать.** Ничего не отключать — просто всегда писать функцию очистки. Если с очисткой всё работает правильно при двойном запуске, значит, эффект написан верно.

> Не убирайте `<StrictMode>` и не ставьте «защиту» через `useRef`, чтобы эффект срабатывал один раз, — так вы прячете проблему, а не решаете её.

---

## 3.5. Для справки: классовые компоненты

В старом коде вы встретите методы жизненного цикла. Вот чему они соответствуют:

| Классовый компонент      | Функциональный компонент                  |
| ------------------------ | ----------------------------------------- |
| `componentDidMount`      | `useEffect(() => {...}, [])`              |
| `componentDidUpdate`     | `useEffect(() => {...}, [value])`         |
| `componentWillUnmount`   | `return () => {...}` внутри `useEffect`   |
| `render()`               | тело функции компонента                   |

---

## 3.6. Частые ошибки

- **Нет функции очистки** у таймера или подписки — после ухода со страницы они продолжают работать и тратят память.
- **Забыли зависимость** — эффект использует `userId`, но в массиве его нет: при смене `userId` данные не перезагрузятся.
- **Объект или массив в зависимостях**, который создаётся заново при каждой отрисовке, — эффект будет срабатывать каждый раз.
- **Считаем данные в `useEffect`**, хотя их можно посчитать прямо при отрисовке. Если значение вычисляется из props или state — `useEffect` не нужен: `const fullName = firstName + ' ' + lastName;`

---
---

# Глава 4. Навигация по сайту

## 4.1. Зачем нужен роутер

Наше приложение — **SPA** (Single Page Application): в браузер загружается одна HTML-страница, а всё остальное рисует React. Чтобы у сайта были разные страницы со своими адресами (`/`, `/posts`, `/about`), нужен **роутер**. Он:

- смотрит на адрес в браузере и показывает нужную страницу;
- переключает страницы **без перезагрузки** — быстро, состояние не теряется;
- поддерживает кнопки «Назад» и «Вперёд» браузера.

Используем самую популярную библиотеку — **React Router**.

```bash
npm install react-router
```

---

## 4.2. Подключаем роутер

Оборачиваем приложение в `BrowserRouter`:

`src/main.tsx`

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme} defaultMode="system">
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
```

---

## 4.3. Описываем страницы

Каждая страница — компонент в папке `src/pages/`. Маршруты описываем в `App.tsx`:

`src/App.tsx`

```tsx
import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { PostsPage } from './pages/PostsPage/PostsPage';
import { PostPage } from './pages/PostPage/PostPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Routes>
      {/* Layout — общий каркас, страницы появляются на месте <Outlet /> */}
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<PostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
```

| Маршрут                              | Адрес               | Что покажет                     |
| ------------------------------------ | ------------------- | ------------------------------- |
| `index`                              | `/`                 | главная страница                |
| `path="about"`                       | `/about`            | страница «О проекте»            |
| `path="posts"`                       | `/posts`            | список постов                   |
| `path="posts/:id"`                   | `/posts/1`, `/posts/2` | один пост, `:id` — параметр |
| `path="*"`                           | любой другой адрес  | страница 404                    |

---

## 4.4. Общий каркас: `Outlet`

`Layout` теперь получает страницу не через `children`, а через **`<Outlet />`** — место, куда роутер подставит текущую страницу. Шапка остаётся на месте, меняется только контент:

`src/components/Layout/Layout.tsx`

```tsx
import { Outlet } from 'react-router';
import { Box, Container } from '@mui/material';
import { Header } from '../Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ py: 4 }}>
        <Container>
          {/* сюда подставляется текущая страница */}
          <Outlet />
        </Container>
      </Box>
    </>
  );
};
```

---

## 4.5. Ссылки и меню

Для переходов **не используем** `<a href>` — он перезагружает всю страницу. Вместо него:

- **`Link`** — обычная ссылка: `<Link to="/about">О проекте</Link>`;
- **`NavLink`** — ссылка для меню: сама добавляет класс `active`, когда мы на этой странице.

С MUI удобно передать ссылку в проп `component` — получится кнопка MUI, которая работает как ссылка:

`src/components/Header/Header.tsx`

```tsx
import { NavLink } from 'react-router';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { to: '/', label: 'Главная' },
  { to: '/posts', label: 'Посты' },
  { to: '/about', label: 'О проекте' },
];

export const Header = () => {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'divider' }}
    >
      <Container>
        <Toolbar disableGutters sx={{ gap: 2 }}>
          <Typography variant="h6" component="h1" color="primary">
            Мой первый проект
          </Typography>

          <Box component="nav" sx={{ display: 'flex', gap: 1, flexGrow: 1 }}>
            {links.map((link) => (
              <Button
                key={link.to}
                component={NavLink}
                to={link.to}
                color="inherit"
                // NavLink сам добавляет класс .active текущей ссылке
                sx={{ '&.active': { color: 'primary.main' } }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          <ThemeToggle />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
```

Список, где каждый пункт ведёт на свою страницу:

`src/data/posts.ts`

```ts
export type Post = {
  id: number;
  title: string;
  text: string;
};

export const posts: Post[] = [
  { id: 1, title: 'Первый пост', text: 'Учим React и TypeScript.' },
  { id: 2, title: 'Второй пост', text: 'Подключили Material UI и тёмную тему.' },
  { id: 3, title: 'Третий пост', text: 'Разобрались с навигацией.' },
];
```

`src/pages/PostsPage/PostsPage.tsx`

```tsx
import { Link } from 'react-router';
import { List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { posts } from '../../data/posts';

export const PostsPage = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Посты
      </Typography>
      <List>
        {posts.map((post) => (
          <ListItemButton key={post.id} component={Link} to={`/posts/${post.id}`}>
            <ListItemText primary={post.title} />
          </ListItemButton>
        ))}
      </List>
    </>
  );
};
```

---

## 4.6. Параметры адреса и переход из кода

- **`useParams`** — достаёт параметры из адреса: для `/posts/2` получим `{ id: '2' }`.
- **`useNavigate`** — переход из кода: после отправки формы, кнопка «Назад».

`src/pages/PostPage/PostPage.tsx`

```tsx
import { useNavigate, useParams } from 'react-router';
import { Button, Typography } from '@mui/material';
import { posts } from '../../data/posts';

export const PostPage = () => {
  const { id } = useParams(); // id из адреса /posts/:id — всегда строка
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <Typography>Пост не найден</Typography>;
  }

  return (
    <>
      <Button onClick={() => navigate(-1)}>← Назад</Button>
      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>
      <Typography>{post.text}</Typography>
    </>
  );
};
```

Переход после действия пользователя:

`LoginForm.tsx`

```tsx
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // ...проверили логин и пароль
    navigate('/profile'); // переходим на другую страницу из кода
  };

  return <Button onClick={handleSubmit}>Войти</Button>;
};
```

`navigate(-1)` — назад, как кнопка браузера. `navigate('/path')` — на указанную страницу.

---

## 4.7. Страница 404

Маршрут `path="*"` срабатывает, если ни один другой не подошёл:

`src/pages/NotFoundPage/NotFoundPage.tsx`

```tsx
import { Link } from 'react-router';
import { Button, Typography } from '@mui/material';

export const NotFoundPage = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        404 — страница не найдена
      </Typography>
      <Button component={Link} to="/" variant="contained">
        На главную
      </Button>
    </>
  );
};
```

---

## 4.8. Итоговая структура

```
src/
├── components/
│   ├── Header/
│   └── Layout/
├── data/
│   └── posts.ts
├── pages/
│   ├── HomePage/
│   ├── AboutPage/
│   ├── PostsPage/
│   ├── PostPage/
│   └── NotFoundPage/
├── App.tsx        # маршруты
└── main.tsx       # BrowserRouter
```

Новая страница = **3 шага**:

1. Создать компонент в `src/pages/НазваниеPage/НазваниеPage.tsx`.
2. Добавить `<Route path="..." element={<НазваниеPage />} />` в `App.tsx`.
3. Добавить ссылку в меню (`links` в `Header.tsx`).

---

## 4.9. Частые ошибки

- **`<a href="/about">` вместо `<Link to="/about">`** — страница полностью перезагружается, состояние теряется.
- **Забыли `<Outlet />` в `Layout`** — шапка есть, а страницы не появляются.
- **`useNavigate` или `Link` вне `BrowserRouter`** — ошибка в консоли. `BrowserRouter` должен оборачивать всё приложение.
- **Сравниваем `id` из `useParams` с числом** — параметр всегда строка: `Number(id)`.
- **Сайт на хостинге показывает 404 при обновлении `/posts`** — сервер не знает про маршруты React. На хостинге нужно настроить, чтобы все адреса отдавали `index.html`. В `npm run dev` всё работает само.

---

# Глава 5. Redux: общее состояние приложения

## 5.1. Зачем нужен Redux

Пока данные нужны одному компоненту, хватает `useState`. Проблемы начинаются, когда одни и те же данные нужны **разным частям приложения**.

Пример из нашего блога: пользователь выбрал пост в списке. Этот выбор хотим видеть:

- в списке постов — подсветить выбранный;
- в шапке сайта — «Выбран: Первый пост»;
- в отдельной карточке под списком.

С `useState` здесь две проблемы:

1. **Prop drilling («проброс пропсов»)** — `Header` и `PostsPage` не родственники. Чтобы они видели одно значение, `useState` придётся поднять в `App` и передавать вниз через несколько компонентов, которым эти данные вообще не нужны.
2. **Состояние пропадает** — `useState` живёт, пока живёт компонент. Ушли со страницы `/posts` на `/about` — `PostsPage` размонтировался, выбор потерян.

**Redux** — это одно общее хранилище (**store**) для всего приложения. Оно живёт вне компонентов, поэтому:

- любой компонент может **прочитать** данные из store напрямую, без пропсов;
- любой компонент может **изменить** данные, и все, кто их читает, перерисуются;
- данные **не теряются** при переходе между страницами.

Используем **Redux Toolkit** (RTK) — официальный современный способ писать на Redux. Старый «чистый» Redux с `switch` и `ACTION_TYPES` в новых проектах не пишут.

| Инструмент   | Когда использовать                                                          |
| ------------ | --------------------------------------------------------------------------- |
| `useState`   | данные нужны одному компоненту (и, может, его детям): открыто ли меню, текст в поле |
| `useContext` | редко меняющиеся данные для всего дерева: тема, язык, «залогинен ли»        |
| **Redux**    | данные нужны многим компонентам в разных местах и часто меняются: выбранный пост, корзина, фильтры, пользователь |

> **Не всё подряд в Redux.** Открыта ли модалка, что введено в поле — это локальное состояние, ему место в `useState`.

---

## 5.2. Главные понятия

| Понятие      | Что это                                                             | Пример                                    |
| ------------ | ------------------------------------------------------------------- | ----------------------------------------- |
| **store**    | хранилище: один большой объект со всем состоянием приложения        | `{ selectedPost: { post: null } }`        |
| **slice**    | «кусок» store про одну тему + функции, которые его меняют           | `selectedPostSlice`                       |
| **action**   | объект-событие «что случилось»: `type` + данные `payload`           | `{ type: 'selectedPost/selectPost', payload: post }` |
| **reducer**  | функция, которая по action меняет state                             | `selectPost: (state, action) => { ... }`  |
| **dispatch** | «отправить» action в store                                          | `dispatch(selectPost(post))`              |
| **selector** | функция, которая достаёт нужное из store                            | `(state) => state.selectedPost.post`      |

### Как ходят данные

1. **Клик** — пользователь нажал на пост.
2. **dispatch** — компонент вызывает `dispatch(selectPost(post))`.
3. **reducer** — Redux находит нужный reducer, тот записывает пост в state.
4. **store** — в store лежит новый state.
5. **useSelector** — все компоненты, которые читают выбранный пост, перерисовываются.

Данные всегда идут **по кругу в одну сторону**. Компонент не меняет store напрямую — только отправляет action.

---

## 5.3. Устанавливаем

```bash
npm install @reduxjs/toolkit react-redux
```

- `@reduxjs/toolkit` — сам Redux и удобные функции: `createSlice`, `configureStore`;
- `react-redux` — связь с React: `Provider`, `useSelector`, `useDispatch`.

Всё, что связано с Redux, кладём в папку `src/store/`.

---

## 5.4. Создаём slice

Slice описывает один кусок состояния: как он выглядит, с чего начинается и как меняется.

`src/store/selectedPostSlice.ts`

```ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Post } from '../data/posts';
import type { RootState } from './store';

// 1. Как выглядит этот кусок состояния
type SelectedPostState = {
  post: Post | null;
};

// 2. Значение при старте приложения: ничего не выбрано
const initialState: SelectedPostState = {
  post: null,
};

// 3. Слайс = состояние + функции, которые его меняют
export const selectedPostSlice = createSlice({
  name: 'selectedPost',
  initialState,
  reducers: {
    // action.payload — то, что передали при вызове: selectPost(post)
    selectPost: (state, action: PayloadAction<Post>) => {
      state.post = action.payload;
    },
    clearSelectedPost: (state) => {
      state.post = null;
    },
  },
});

// 4. Action creators — их вызываем в компонентах через dispatch
export const { selectPost, clearSelectedPost } = selectedPostSlice.actions;

// 5. Селектор — функция, которая достаёт нужное из store
export const selectSelectedPost = (state: RootState) => state.selectedPost.post;

// 6. Reducer — подключаем в store
export default selectedPostSlice.reducer;
```

- `name` — префикс для action: `selectPost` превратится в `{ type: 'selectedPost/selectPost' }`.
- `reducers` — по одной функции на каждое действие. `createSlice` сам создаёт из них **action creators**: `selectPost(post)` вернёт готовый объект `{ type, payload }`.
- `PayloadAction<Post>` — говорим TypeScript, что в `payload` лежит пост.

> **Почему можно писать `state.post = ...`?** В React state менять напрямую нельзя. Redux Toolkit внутри использует библиотеку **Immer**: мы пишем как будто меняем объект, а Immer сам создаёт новую копию. Так можно **только внутри `createSlice`**.

---

## 5.5. Создаём store

`src/store/store.ts`

```ts
import { configureStore } from '@reduxjs/toolkit';
import selectedPostReducer from './selectedPostSlice';

export const store = configureStore({
  reducer: {
    // ключ selectedPost — так этот кусок будет называться в state
    selectedPost: selectedPostReducer,
  },
});

// Типы для TypeScript: TS сам выводит их из store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

Store собирается из слайсов. Появится новый слайс (например, корзина) — добавим строку `cart: cartReducer`, и в state появится `state.cart`.

---

## 5.6. Хуки с типами

Обычные `useSelector` и `useDispatch` не знают, как устроен наш store. Делаем их версии с типами один раз и дальше используем только их:

`src/store/hooks.ts`

```ts
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';

// Те же useDispatch и useSelector, но уже знают типы нашего store
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
```

Теперь VS Code подсказывает поля state: пишем `state.` — видим `selectedPost`.

---

## 5.7. Подключаем store

Оборачиваем приложение в `Provider` — как `BrowserRouter` и `ThemeProvider`. Теперь store доступен в любом компоненте:

`src/main.tsx`

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import { store } from './store/store';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme} defaultMode="system">
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
```

---

## 5.8. Практика: храним выбранный пост

Задача: клик по посту в списке **выбирает** его. Выбранный пост:

- подсвечивается в списке;
- показывается в карточке под списком;
- виден в шапке на любой странице;
- не теряется при переходе на другую страницу.

### Список постов: записываем в store

`src/pages/PostsPage/PostsPage.tsx`

```tsx
import { Link } from 'react-router';
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { posts } from '../../data/posts';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectPost, selectSelectedPost } from '../../store/selectedPostSlice';
import { SelectedPost } from '../../components/SelectedPost/SelectedPost';

export const PostsPage = () => {
  const dispatch = useAppDispatch();
  // читаем из store: какой пост сейчас выбран
  const selectedPost = useAppSelector(selectSelectedPost);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Посты
      </Typography>

      <List>
        {posts.map((post) => (
          <ListItem
            key={post.id}
            disablePadding
            secondaryAction={
              <Button component={Link} to={`/posts/${post.id}`} size="small">
                Читать
              </Button>
            }
          >
            <ListItemButton
              // подсвечиваем выбранный пост
              selected={selectedPost?.id === post.id}
              // кладём пост в store
              onClick={() => dispatch(selectPost(post))}
            >
              <ListItemText primary={post.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <SelectedPost />
    </>
  );
};
```

- `useAppDispatch()` — получаем функцию `dispatch`.
- `dispatch(selectPost(post))` — отправляем action «выбрали этот пост».
- `useAppSelector(selectSelectedPost)` — читаем выбранный пост. Когда он изменится, компонент перерисуется сам.

### Карточка выбранного поста: читаем из store

Обратите внимание: `SelectedPost` **не получает пропсов**. Он сам берёт пост из store.

`src/components/SelectedPost/SelectedPost.tsx`

```tsx
import { Button, Paper, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearSelectedPost, selectSelectedPost } from '../../store/selectedPostSlice';

export const SelectedPost = () => {
  const dispatch = useAppDispatch();
  const post = useAppSelector(selectSelectedPost);

  if (!post) {
    return <Typography color="text.secondary">Выберите пост из списка</Typography>;
  }

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Typography variant="overline">Выбранный пост</Typography>
      <Typography variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <Typography sx={{ mb: 2 }}>{post.text}</Typography>
      <Button onClick={() => dispatch(clearSelectedPost())}>Сбросить выбор</Button>
    </Paper>
  );
};
```

### Шапка: тот же пост в другом конце приложения

`Header` и `PostsPage` никак не связаны пропсами, но видят одни и те же данные:

`src/components/Header/SelectedPostChip.tsx`

```tsx
import { Chip } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearSelectedPost, selectSelectedPost } from '../../store/selectedPostSlice';

export const SelectedPostChip = () => {
  const dispatch = useAppDispatch();
  const post = useAppSelector(selectSelectedPost);

  if (!post) return null;

  return (
    <Chip
      label={`Выбран: ${post.title}`}
      color="primary"
      variant="outlined"
      // крестик на чипе сбрасывает выбор
      onDelete={() => dispatch(clearSelectedPost())}
    />
  );
};
```

В `Header.tsx` добавляем чип рядом с кнопкой темы:

```tsx
import { SelectedPostChip } from './SelectedPostChip';

// ...внутри <Toolbar>, перед <ThemeToggle />
<SelectedPostChip />
<ThemeToggle />
```

### Страница поста: тоже запоминаем выбор

Если пост открыли по ссылке `/posts/2`, тоже кладём его в store:

`src/pages/PostPage/PostPage.tsx`

```tsx
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Button, Typography } from '@mui/material';
import { posts } from '../../data/posts';
import { useAppDispatch } from '../../store/hooks';
import { selectPost } from '../../store/selectedPostSlice';

export const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const post = posts.find((p) => p.id === Number(id));

  // открыли пост по ссылке — тоже запоминаем его как выбранный
  useEffect(() => {
    if (post) {
      dispatch(selectPost(post));
    }
  }, [post, dispatch]);

  if (!post) {
    return <Typography>Пост не найден</Typography>;
  }

  return (
    <>
      <Button onClick={() => navigate(-1)}>← Назад</Button>
      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>
      <Typography>{post.text}</Typography>
    </>
  );
};
```

`dispatch` вызываем в `useEffect`, а не прямо в теле компонента: менять store во время отрисовки нельзя.

---

## 5.9. Проверяем

1. `npm run dev`, открываем `/posts`.
2. Кликаем по посту — он подсвечивается, внизу появляется карточка, в шапке — чип «Выбран: …».
3. Переходим на «О проекте» — чип в шапке **остался**.
4. Возвращаемся на «Посты» — пост **всё ещё выбран**. С `useState` выбор бы потерялся.
5. Нажимаем крестик на чипе — выбор сбросился везде сразу.

> **Redux DevTools.** Поставьте расширение **Redux DevTools** для Chrome или Firefox. `configureStore` подключает его сам. Во вкладке Redux видно каждый action, его `payload` и state до и после. Это главный инструмент отладки.

> **После перезагрузки страницы (F5) store пустой.** Store живёт в памяти вкладки. Чтобы данные переживали перезагрузку, их сохраняют в `localStorage` — это отдельная тема.

---

## 5.10. Итоговая структура

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   ├── SelectedPostChip.tsx   # читает store
│   │   └── ThemeToggle.tsx
│   ├── Layout/
│   └── SelectedPost/
│       └── SelectedPost.tsx       # читает store
├── data/
│   └── posts.ts
├── pages/
├── store/
│   ├── hooks.ts                   # useAppDispatch, useAppSelector
│   ├── selectedPostSlice.ts       # state + reducers + actions + селектор
│   └── store.ts                   # configureStore + типы
├── App.tsx
└── main.tsx                       # <Provider store={store}>
```

Новые данные в Redux = **4 шага**:

1. Создать слайс `src/store/имяSlice.ts` через `createSlice`.
2. Добавить его reducer в `configureStore` в `store.ts`.
3. Читать в компоненте: `useAppSelector(селектор)`.
4. Менять: `dispatch(action(данные))`.

---

## 5.11. Частые ошибки

- **Забыли `<Provider store={store}>`** — ошибка `could not find react-redux context value`. `Provider` должен оборачивать всё приложение.
- **Меняем state вне reducer**: `selectedPost.title = 'x'` в компоненте — так нельзя. Менять данные можно только через `dispatch`.
- **Забыли `dispatch`**: просто `selectPost(post)` — ничего не произойдёт. Функция только создаёт action, отправляет его `dispatch`.
- **Забыли добавить reducer в `store.ts`** — `state.selectedPost` будет `undefined`.
- **В reducer и меняем state, и делаем `return`** — выбирайте одно: либо `state.post = ...`, либо `return { ...новый state }`.
- **Кладём в Redux всё подряд** — открыта ли модалка, что введено в поле — это `useState`. В Redux только то, что нужно нескольким частям приложения.
- **Используем `useSelector` / `useDispatch` без типов** — TypeScript не подскажет поля. Берите `useAppSelector` / `useAppDispatch` из `store/hooks.ts`.

---

# Глава 6. RTK Query: запросы к серверу

## 6.1. Зачем нужен RTK Query

Посмотрите, как сейчас грузятся посты в нашем блоге. В `HomePage`, `PostsPage` и `PostPage` повторяется одно и то же:

```tsx
const [isLoading, setIsLoading] = useState<boolean>(true);
const [posts, setPosts] = useState<Post[]>([]);

useEffect(() => {
  getPosts()
    .then((fetched) => {
      setPosts(fetched);
      dispatch(loadedPosts(fetched)); // и ещё копия в Redux
    })
    .catch(() => console.error('error'))
    .finally(() => setIsLoading(false));
}, []);
```

Что здесь плохо:

1. **Один и тот же код в трёх местах.** `useState` для данных, `useState` для загрузки, `useEffect`, `then / catch / finally`. Нужна ошибка — пишем ещё один `useState`.
2. **Нет кэша.** Ушли с главной на «О проекте» и вернулись — посты грузятся заново, снова скелетон.
3. **Данные дублируются.** Посты лежат и в `useState` страницы, и в `postsSlice`. Легко получить две разные версии.
4. **После изменения данных список устаревает.** Создали или удалили пост — список сам не узнает, его надо перезапросить руками.

**RTK Query** — часть Redux Toolkit для работы с сервером. Мы один раз описываем запросы, а он сам:

- делает запрос и отдаёт `data`, `isLoading`, `isError`;
- **кэширует** ответ: вернулись на страницу — данные показываются сразу;
- **не делает лишних запросов**: если два компонента просят одно и то же, запрос уйдёт один;
- **перезапрашивает** список после создания или удаления поста;
- кладёт всё в Redux store, так что в Redux DevTools видно каждый запрос.

Было и станет:

```tsx
// было: ~15 строк в каждой странице
const [isLoading, setIsLoading] = useState(true);
const [posts, setPosts] = useState<Post[]>([]);
useEffect(() => { /* ... */ }, []);

// стало: одна строка
const { data, isLoading, isError } = useGetPostsQuery({ limit: 11 });
```

| Что храним               | Где                         | Пример                                     |
| ------------------------ | --------------------------- | ------------------------------------------ |
| Данные с сервера         | **RTK Query**               | список постов, один пост, профиль          |
| Общее состояние клиента  | обычный slice (`createSlice`) | выбранный пост, лайки, корзина            |
| Локальное состояние      | `useState`                  | текст в поле поиска, открыта ли модалка    |

> RTK Query ставить отдельно не нужно — он уже внутри `@reduxjs/toolkit`.

---

## 6.2. Наш сервер и Swagger

Бэкенд блога: `https://studapi.teachmeskills.by`

Документация: **[Swagger](https://studapi.teachmeskills.by/api/schema/swagger-ui/)**. Это страница, где описаны все адреса API: какие параметры принимают и что возвращают. Каждый запрос там можно выполнить кнопкой **Try it out**.

Нам нужны:

| Метод    | Адрес                     | Что делает                         | Нужен токен |
| -------- | ------------------------- | ---------------------------------- | ----------- |
| `GET`    | `/blog/posts/`            | список постов                      | нет         |
| `GET`    | `/blog/posts/{id}/`       | один пост                          | нет         |
| `POST`   | `/blog/posts/`            | создать пост (с картинкой)         | да          |
| `DELETE` | `/blog/posts/{id}/`       | удалить пост                       | да          |
| `GET`    | `/blog/posts/my_posts/`   | мои посты                          | да          |
| `POST`   | `/auth/jwt/create/`       | логин: email + пароль → токены     | нет         |

Список постов приходит не массивом, а объектом **с пагинацией**:

```json
{
  "count": 1418,
  "next": "http://studapi.teachmeskills.by/blog/posts/?limit=2&offset=2",
  "previous": null,
  "results": [
    { "id": 1, "image": "https://...", "text": "...", "date": "2021-10-06",
      "lesson_num": 123, "title": "...", "description": "...", "author": 7 }
  ]
}
```

Параметры списка: `limit` (сколько постов), `offset` (сколько пропустить), `search` (поиск), `ordering` (сортировка, например `-date`).

> Лайков и дизлайков на сервере **нет**. Они останутся у нас в обычном slice (см. 6.8).

---

## 6.3. Главные понятия

| Понятие           | Что это                                                                  |
| ----------------- | ------------------------------------------------------------------------ |
| `createApi`       | создаёт «API-слой»: базовый адрес + список запросов                      |
| `fetchBaseQuery`  | обёртка над `fetch`: подставляет `baseUrl`, заголовки, разбирает JSON    |
| **endpoint**      | один запрос к серверу: «получить посты», «удалить пост»                  |
| **query**         | запрос на **чтение** (`GET`). Хук `useXxxQuery` запускается сам          |
| **mutation**      | запрос на **изменение** (`POST`, `PUT`, `PATCH`, `DELETE`). Хук `useXxxMutation` даёт функцию, которую вызываем по клику |
| **tag**           | ярлык в кэше. Query говорит «я даю `Post`» (`providesTags`), mutation — «я испортил `Post`» (`invalidatesTags`). Все query с этим тегом перезапросятся |
| `injectEndpoints` | добавить эндпоинты в уже созданный API из другого файла                  |

---

## 6.4. Базовый API

Один `createApi` на весь проект. В нём только общее: адрес сервера и заголовки. Сами запросы добавим в отдельных файлах — так делает и автогенерация (6.9).

`src/store/api/baseApi.ts`

```ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  // ключ, под которым кэш RTK Query лежит в store: state.api
  reducerPath: 'api',

  // как делать запросы: обёртка над fetch с общим адресом сервера
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://studapi.teachmeskills.by',
    // перед каждым запросом: если есть токен, добавляем заголовок
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  // «ярлыки» для кэша: по ним RTK Query понимает, что пора перезапросить
  tagTypes: ['Post'],

  // эндпоинты добавим в отдельных файлах через injectEndpoints
  endpoints: () => ({}),
});
```

> Импорт именно из `@reduxjs/toolkit/query/react` — только эта версия создаёт React-хуки.

---

## 6.5. Подключаем к store

У RTK Query свой reducer (там лежит кэш) и свой middleware (он отправляет запросы). Добавляем оба:

`src/store/store.ts`

```ts
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import selectedPostReducer from './selectedPostSlice';
import postsReducer from './postsSlice';
import { baseApi } from './api/baseApi';

const logger = createLogger();

export const store = configureStore({
  reducer: {
    selectedPost: selectedPostReducer,
    fetchedPosts: postsReducer,
    // кэш запросов: state.api
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // middleware RTK Query: отправляет запросы, чистит старый кэш
    getDefaultMiddleware().concat(baseApi.middleware, logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

`main.tsx` не меняется: `<Provider store={store}>` уже есть.

---

## 6.6. Пишем API руками

Сначала обновим тип поста под сервер. `likes` и `dislikes` убираем — их сервер не присылает:

`src/types/post.ts`

```ts
// Пост — ровно то, что присылает сервер (схема Post в Swagger)
export interface Post {
  id: number;
  image: string;
  text: string;
  date?: string; // "2026-11-09"
  lesson_num: number;
  title: string;
  description: string;
  author: number;
}

// Ответ сервера со списком: посты + данные для пагинации
export interface PostsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Post[];
}

// Что можно передать в GET /blog/posts/
export interface GetPostsParams {
  limit?: number;
  offset?: number;
  search?: string;
  ordering?: string;
}
```

Теперь сами запросы. Каждый эндпоинт — это `build.query` или `build.mutation` с двумя типами: **что приходит** и **что передаём**.

`src/store/api/postsApi.ts`

```ts
import { baseApi } from './baseApi';
import type { GetPostsParams, Post, PostsResponse } from '../../types/post';

export const postsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // GET /blog/posts/?limit=..&offset=..&search=..
    // build.query<ЧтоПриходит, ЧтоПередаём>
    getPosts: build.query<PostsResponse, GetPostsParams>({
      query: (params) => ({ url: '/blog/posts/', params }),
      providesTags: ['Post'],
    }),

    // GET /blog/posts/5/
    getPostById: build.query<Post, number>({
      query: (id) => `/blog/posts/${id}/`,
      providesTags: (_result, _error, id) => [{ type: 'Post', id }],
    }),

    // POST /blog/posts/ — картинку отправляем файлом, поэтому FormData
    createPost: build.mutation<Post, FormData>({
      query: (formData) => ({ url: '/blog/posts/', method: 'POST', body: formData }),
      invalidatesTags: ['Post'],
    }),

    // DELETE /blog/posts/5/
    deletePost: build.mutation<void, number>({
      query: (id) => ({ url: `/blog/posts/${id}/`, method: 'DELETE' }),
      invalidatesTags: ['Post'],
    }),
  }),
});

// Хуки RTK Query создал сам: use + ИмяЭндпоинта + Query/Mutation
export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useDeletePostMutation,
} = postsApi;
```

- `query` возвращает либо строку-адрес, либо объект `{ url, method, body, params }`.
- `params` превращается в query string: `{ limit: 11, search: 'react' }` → `?limit=11&search=react`.
- `providesTags: ['Post']` — «этот ответ про посты». `invalidatesTags: ['Post']` — «посты изменились, перезапросите всё, что их даёт».
- Имя хука собирается из имени эндпоинта: `getPosts` → `useGetPostsQuery`, `deletePost` → `useDeletePostMutation`.

---

## 6.7. Используем в компонентах

### Главная: список постов

`src/pages/HomePage/HomePage.tsx`

```tsx
import { Alert, Box, Skeleton } from '@mui/material';
import { Card } from '../../components/Card/Card';
import { useGetPostsQuery } from '../../store/api/postsApi';

export const HomePage = () => {
  // один хук вместо useState + useEffect + then/catch/finally
  const { data, isLoading, isError } = useGetPostsQuery({ limit: 11 });

  if (isLoading) {
    return <Skeleton height={300} width={600} />;
  }

  if (isError || !data) {
    return <Alert severity="error">Не удалось загрузить посты</Alert>;
  }

  const posts = data.results;
  const firstPost = posts[0] ?? null;
  const mediumPosts = posts.slice(1, 5);
  const smallPosts = posts.slice(5);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {firstPost && <Card postData={firstPost} />}
      {mediumPosts.map((post) => <Card key={post.id} postData={post} variant="medium" />)}
      {smallPosts.map((post) => <Card key={post.id} postData={post} variant="small" />)}
    </Box>
  );
};
```

Что возвращает query-хук:

| Поле         | Что значит                                                                  |
| ------------ | --------------------------------------------------------------------------- |
| `data`       | ответ сервера (пока не пришёл — `undefined`)                                |
| `isLoading`  | **первая** загрузка, данных ещё нет — показываем скелетон                   |
| `isFetching` | идёт **любой** запрос, в том числе повторный (данные уже есть, но обновляются) |
| `isError`    | запрос упал                                                                 |
| `error`      | сама ошибка: `{ status: 404, data: ... }`                                   |
| `refetch`    | функция «запросить заново»                                                  |

### Страница постов: поиск

Аргумент хука изменился — RTK Query сам делает новый запрос. `useEffect` с зависимостями писать не нужно:

`src/pages/PostsPage/PostsPage.tsx`

```tsx
import { useState } from 'react';
import { Alert, Box, Skeleton, TextField } from '@mui/material';
import { Card } from '../../components/Card/Card';
import { useGetPostsQuery } from '../../store/api/postsApi';

export const PostsPage = () => {
  const [search, setSearch] = useState('');

  // поменялся search — RTK Query сам сделает новый запрос
  const { data, isFetching, isError } = useGetPostsQuery({ limit: 20, search });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Поиск"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {isError && <Alert severity="error">Не удалось загрузить посты</Alert>}
      {isFetching && <Skeleton height={300} width={600} />}

      {data?.results.map((post) => (
        <Card key={post.id} postData={post} variant="search" />
      ))}
    </Box>
  );
};
```

> Каждый новый `search` — отдельная запись в кэше. Напечатали «react», стёрли, напечатали снова — второй раз ответ возьмётся из кэша.

### Страница поста

`src/pages/PostPage/PostPage.tsx`

```tsx
import { useParams } from 'react-router';
import { Alert, Box, Skeleton } from '@mui/material';
import { Card } from '../../components/Card/Card';
import { useGetPostByIdQuery } from '../../store/api/postsApi';

export const PostPage = () => {
  const { id } = useParams();

  const { data: post, isLoading, isError } = useGetPostByIdQuery(Number(id));

  if (isLoading) return <Skeleton height={300} width={600} />;
  if (isError || !post) return <Alert severity="error">Пост не найден</Alert>;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Card postData={post} variant="search" />
    </Box>
  );
};
```

### Mutation: удаляем пост

Mutation **не запускается сама**. Хук возвращает массив: функцию-запуск и состояние запроса.

`src/components/DeletePostButton/DeletePostButton.tsx`

```tsx
import { Button } from '@mui/material';
import { useDeletePostMutation } from '../../store/api/postsApi';

export const DeletePostButton = ({ id }: { id: number }) => {
  // [функция-запуск, { состояние запроса }]
  const [deletePost, { isLoading }] = useDeletePostMutation();

  const handleDelete = async () => {
    try {
      await deletePost(id).unwrap();
      // список постов обновится сам: deletePost сбросил тег 'Post'
    } catch {
      alert('Не получилось удалить пост');
    }
  };

  return (
    <Button color="error" onClick={handleDelete} disabled={isLoading}>
      Удалить
    </Button>
  );
};
```

- `.unwrap()` — превращает результат в обычный Promise: успех → данные, ошибка → `catch`. Без `unwrap` ошибка не попадёт в `catch`.
- После удаления `invalidatesTags: ['Post']` помечает кэш постов устаревшим, и `useGetPostsQuery` на главной перезапросится сам.

> Создавать и удалять посты можно только с токеном (см. 6.10). Без него сервер ответит `401`.

Создание поста — так же, только данные собираем в `FormData` (в посте есть файл-картинка):

```tsx
const [createPost, { isLoading }] = useCreatePostMutation();

const handleSubmit = async (image: File) => {
  const formData = new FormData();
  formData.append('title', 'Мой пост');
  formData.append('text', '...');        // минимум 200 символов
  formData.append('description', '...'); // минимум 50 символов
  formData.append('lesson_num', '6');
  formData.append('image', image);

  await createPost(formData).unwrap();
};
```

---

## 6.8. Лайки остаются в slice

Лайков на сервере нет, поэтому это **клиентское** состояние — ему место в обычном slice. А вот сами посты из `postsSlice` убираем: теперь их хранит RTK Query, и `loadedPosts` больше не нужен.

Храним лайки по `id` поста. Названия action и селекторов оставляем прежними — `CardFooter` менять не придётся:

`src/store/postsSlice.ts`

```ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

type Reactions = { likes: number; dislikes: number };

type PostsState = {
  // лайки по id поста: { 12: { likes: 3, dislikes: 0 } }
  reactions: Record<number, Reactions>;
};

const initialState: PostsState = {
  reactions: {},
};

export const postsSlice = createSlice({
  name: 'fetchedPosts',
  initialState,
  reducers: {
    likePostById: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.reactions[id] ??= { likes: 0, dislikes: 0 };
      state.reactions[id].likes += 1;
    },
    dislikePostById: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.reactions[id] ??= { likes: 0, dislikes: 0 };
      state.reactions[id].dislikes += 1;
    },
  },
});

export const { likePostById, dislikePostById } = postsSlice.actions;

export const selectCountLikesOfPost = (id: number) => (state: RootState) =>
  state.fetchedPosts.reactions[id]?.likes ?? 0;

export const selectCountDisLikesOfPost = (id: number) => (state: RootState) =>
  state.fetchedPosts.reactions[id]?.dislikes ?? 0;

export default postsSlice.reducer;
```

Папку `src/mocks/` можно удалить — данные теперь приходят с сервера.

> **Правило:** данные с сервера не копируем в свой slice через `dispatch(loadedPosts(...))`. Источник правды один — кэш RTK Query. Нужны посты в другом компоненте — просто вызываем там тот же хук: запрос не повторится, данные возьмутся из кэша.

---

## 6.9. Автогенерация API из Swagger

Писать эндпоинты и типы руками долго, и легко ошибиться: опечатка в адресе, забыли поле в типе, на сервере поменяли ответ. Swagger уже **знает** все адреса и типы — пусть код по нему напишет генератор.

Swagger-страница строится по файлу-схеме (**OpenAPI**). Её JSON лежит тут: `https://studapi.teachmeskills.by/api/schema/?format=json`. Генератор `@rtk-query/codegen-openapi` читает схему и создаёт файл с эндпоинтами, типами и хуками.

### Устанавливаем

```bash
npm install -D @rtk-query/codegen-openapi esbuild-runner
```

- `@rtk-query/codegen-openapi` — сам генератор;
- `esbuild-runner` — нужен, чтобы генератор смог прочитать конфиг на TypeScript (`.ts`). Без него будет ошибка `neither esbuild-runner nor ts-node are installed`.

### Конфиг

В корне проекта (рядом с `package.json`):

`openapi-config.ts`

```ts
import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  // откуда брать описание API (тот же JSON, по которому строится Swagger)
  schemaFile: 'https://studapi.teachmeskills.by/api/schema/?format=json',

  // наш пустой createApi, в который будут добавлены эндпоинты
  apiFile: './src/store/api/baseApi.ts',
  apiImport: 'baseApi',

  // куда положить результат
  outputFile: './src/store/api/blogApi.generated.ts',
  exportName: 'blogApi',

  // сгенерировать хуки useXxxQuery / useXxxMutation
  hooks: true,
  // проставить providesTags / invalidatesTags по разделам Swagger
  tag: true,

  // берём только нужное: посты, группы и логин
  filterEndpoints: [/^blog/, /^authJwt/],
};

export default config;
```

### Скрипт в `package.json`

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "api:generate": "rtk-query-codegen-openapi openapi-config.ts"
}
```

Запускаем:

```bash
npm run api:generate
```

В терминале: `Generating ./src/store/api/blogApi.generated.ts` → `Done`.

### Что получилось

Имена берутся из `operationId` в схеме (их видно в Swagger, если раскрыть запрос):

| Запрос                     | `operationId`             | Хук                                 |
| -------------------------- | ------------------------- | ----------------------------------- |
| `GET /blog/posts/`         | `blog_posts_list`         | `useBlogPostsListQuery`             |
| `GET /blog/posts/{id}/`    | `blog_posts_retrieve`     | `useBlogPostsRetrieveQuery`         |
| `POST /blog/posts/`        | `blog_posts_create`       | `useBlogPostsCreateMutation`        |
| `PATCH /blog/posts/{id}/`  | `blog_posts_partial_update` | `useBlogPostsPartialUpdateMutation` |
| `DELETE /blog/posts/{id}/` | `blog_posts_destroy`      | `useBlogPostsDestroyMutation`       |
| `GET /blog/posts/my_posts/` | `blog_posts_my_posts_list` | `useBlogPostsMyPostsListQuery`    |
| `POST /auth/jwt/create/`   | `auth_jwt_create_create`  | `useAuthJwtCreateCreateMutation`    |

Кусочек сгенерированного файла — это тот же `injectEndpoints`, что мы писали руками:

```ts
import { baseApi as api } from './baseApi';
export const addTagTypes = ['auth', 'blog'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({ addTagTypes })
  .injectEndpoints({
    endpoints: (build) => ({
      blogPostsList: build.query<BlogPostsListApiResponse, BlogPostsListApiArg>({
        query: (queryArg) => ({
          url: `/blog/posts/`,
          params: {
            author__course_group: queryArg.authorCourseGroup,
            limit: queryArg.limit,
            offset: queryArg.offset,
            ordering: queryArg.ordering,
            search: queryArg.search,
          },
        }),
        providesTags: ['blog'],
      }),
      // ...
    }),
  });

export type PostRead = {
  id: number;
  image: string;
  text: string;
  date?: string;
  lesson_num: number;
  title: string;
  description: string;
  author: number;
};
// ...
export const { useBlogPostsListQuery, useBlogPostsRetrieveQuery /* ... */ } = injectedRtkApi;
```

> Типы с суффиксом `Read` — то, что сервер **присылает** (есть `id`). Без суффикса — то, что мы **отправляем** (`id` нет, его выдаёт сервер).

### Переходим на сгенерированный код

**1. Типы.** Свои интерфейсы больше не пишем — берём сгенерированные. Остальные файлы проекта продолжают импортировать `Post` отсюда и ничего не замечают:

`src/types/post.ts`

```ts
// Типы теперь берём из сгенерированного файла — они всегда совпадают с сервером
export type {
  PostRead as Post,
  PaginatedPostListRead as PostsResponse,
} from '../store/api/blogApi.generated';
```

**2. Теги.** Генератор с `tag: true` использует теги по разделам Swagger: `'blog'` и `'auth'`. В `baseApi.ts` меняем `tagTypes`:

```ts
// теги 'blog' и 'auth' генератор добавит сам; 'blog' объявляем для своего createPost
tagTypes: ['blog'],
```

**3. Хуки.** Меняем импорты в страницах. Главное отличие: у сгенерированных хуков аргумент **всегда объект**.

`src/pages/HomePage/HomePage.tsx`

```tsx
import { useBlogPostsListQuery } from '../../store/api/blogApi.generated';

// ...
const { data, isLoading, isError } = useBlogPostsListQuery({ limit: 11 });

// в схеме results необязательный, поэтому ?? []
const posts = data?.results ?? [];
```

`src/pages/PostPage/PostPage.tsx`

```tsx
import { useBlogPostsRetrieveQuery } from '../../store/api/blogApi.generated';

// ...
// было: useGetPostByIdQuery(Number(id))
const { data: post, isLoading, isError } = useBlogPostsRetrieveQuery({ id: Number(id) });
```

Удаление: `useBlogPostsDestroyMutation()` и вызов `deletePost({ id }).unwrap()`.

**4. Что генератор не умеет.** Создание поста отправляет **файл** (`multipart/form-data`). Сгенерированный `useBlogPostsCreateMutation` отправит объект как JSON, и картинка потеряется. Такой эндпоинт оставляем рукописным — ручной и сгенерированный код спокойно живут вместе в одном `baseApi`:

`src/store/api/postsApi.ts`

```ts
import { baseApi } from './baseApi';
import type { Post } from '../../types/post';

// Только то, что генератор не умеет: отправка файла через FormData
export const postsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPost: build.mutation<Post, FormData>({
      query: (formData) => ({ url: '/blog/posts/', method: 'POST', body: formData }),
      invalidatesTags: ['blog'],
    }),
  }),
});

export const { useCreatePostMutation } = postsApi;
```

### Правила работы с генерацией

- **`*.generated.ts` руками не правим.** Следующий `npm run api:generate` перезапишет все правки. Нужно что-то поменять — делаем это в своём файле через `injectEndpoints` или `enhanceEndpoints`.
- **Бэкенд поменялся — запускаем `npm run api:generate`.** Если поле переименовали, TypeScript сразу покажет все места, где оно используется.
- **Сгенерированный файл коммитим** в git — чтобы проект собирался без доступа к Swagger.

---

## 6.10. Логин и токен

Создавать, менять и удалять посты можно только авторизованным. Сервер использует **JWT**: отправляем email и пароль, получаем два токена:

- `access` — пропуск, живёт недолго. Его отправляем в каждом запросе в заголовке `Authorization: Bearer <access>`;
- `refresh` — чтобы получить новый `access`, когда старый истечёт.

Заголовок уже подставляет `prepareHeaders` в `baseApi.ts` (6.4) — осталось сохранить токен после логина:

`src/pages/LoginPage/LoginPage.tsx`

```tsx
import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { Alert, Box, Button, TextField } from '@mui/material';
import { useAuthJwtCreateCreateMutation } from '../../store/api/blogApi.generated';
import { useAuth } from '../../context/AuthContext';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const [createToken, { isLoading, isError }] = useAuthJwtCreateCreateMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // POST /auth/jwt/create/ → { access, refresh }
      const tokens = await createToken({
        tokenObtainPairRequest: { email, password },
      }).unwrap();

      localStorage.setItem('access', tokens.access);
      localStorage.setItem('refresh', tokens.refresh);
      login();
      navigate('/posts');
    } catch {
      // ошибку покажет isError
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2, maxWidth: 360 }}>
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField
        label="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {isError && <Alert severity="error">Неверный email или пароль</Alert>}
      <Button type="submit" variant="contained" disabled={isLoading}>
        Войти
      </Button>
    </Box>
  );
};
```

Добавьте маршрут в `App.tsx`, например `<Route path="/login" element={<LoginPage />} />`.

> Аккаунт создаётся через `POST /auth/users/` и подтверждается письмом. `access`-токен живёт ограниченное время: когда сервер начнёт отвечать `401`, нужно получить новый через `/auth/jwt/refresh/` или просто войти заново. Автоматическое обновление токена — отдельная тема.

---

## 6.11. Проверяем

1. `npm run dev`, открываем главную. Во вкладке **Network** (F12) — запрос `posts/?limit=11`, на странице — посты с сервера.
2. Переходим на «О проекте» и обратно — **нового запроса нет**, посты появляются сразу: сработал кэш.
3. В **Redux DevTools** видно ветку `api` в state и actions вида `api/executeQuery/pending` → `api/executeQuery/fulfilled`.
4. На `/posts` печатаем в поиск — на каждое изменение уходит запрос с `?search=...`.
5. Ставим лайк — счётчик растёт, на сервер ничего не уходит (лайки в `postsSlice`).
6. Логинимся, удаляем свой пост — список перезапрашивается сам.

> **Кэш живёт 60 секунд** после того, как последний компонент перестал использовать данные. Потом запись удаляется, и следующий заход сделает запрос заново. Время меняется опцией `keepUnusedDataFor` в `createApi`.

---

## 6.12. Итоговая структура

```
react-blog/
├── openapi-config.ts              # настройки генератора
├── package.json                   # "api:generate": "rtk-query-codegen-openapi openapi-config.ts"
└── src/
    ├── pages/
    │   ├── HomePage/              # useBlogPostsListQuery
    │   ├── PostsPage/             # useBlogPostsListQuery + поиск
    │   ├── PostPage/              # useBlogPostsRetrieveQuery
    │   └── LoginPage/             # useAuthJwtCreateCreateMutation
    ├── store/
    │   ├── api/
    │   │   ├── baseApi.ts             # createApi: baseUrl, токен, tagTypes
    │   │   ├── blogApi.generated.ts   # сгенерирован, руками не трогаем
    │   │   └── postsApi.ts            # свои эндпоинты (createPost с FormData)
    │   ├── hooks.ts
    │   ├── postsSlice.ts          # только лайки
    │   ├── selectedPostSlice.ts
    │   └── store.ts               # + baseApi.reducer и baseApi.middleware
    └── types/
        └── post.ts                # реэкспорт PostRead as Post
```

Новый запрос к серверу:

1. Есть в Swagger → `npm run api:generate`, берём готовый хук из `blogApi.generated.ts`.
2. Нет или генератор не справился → пишем руками через `baseApi.injectEndpoints`.
3. Чтение — `useXxxQuery(аргументы)`, изменение — `const [mutate] = useXxxMutation()` и `mutate(...).unwrap()`.
4. Mutation должна сбрасывать (`invalidatesTags`) теги, которые дают (`providesTags`) нужные query.

---

## 6.13. Частые ошибки

- **Забыли `baseApi.middleware` в store** — в консоли предупреждение `Middleware for RTK-Query API at reducerPath "api" has not been added to the store`, запросы не работают как надо.
- **Забыли `[baseApi.reducerPath]: baseApi.reducer`** — в консоли ошибка `No data found at state.api. Did you forget to add the reducer to the store?`, данных нет.
- **Импорт из `@reduxjs/toolkit/query`** вместо `@reduxjs/toolkit/query/react` — хуков `useXxxQuery` не будет.
- **Вызываем хук в обработчике клика или в условии** — это хук, правила те же: только на верхнем уровне компонента. Для действий по клику — mutation.
- **Ждём, что mutation запустится сама** — нет, нужно вызвать функцию из массива: `const [deletePost] = useDeletePostMutation()` → `deletePost(id)`.
- **`try / catch` без `.unwrap()`** — ошибка не попадёт в `catch`, `await` вернёт `{ error }`.
- **Список не обновился после создания или удаления** — mutation не сбрасывает тот тег, который даёт query. Проверьте `providesTags` и `invalidatesTags`.
- **Копируем ответ в свой slice** через `dispatch(loadedPosts(data))` — два источника правды. Данные с сервера берём только из хука.
- **Правим `blogApi.generated.ts` руками** — правки пропадут после следующей генерации.
- **Аргумент сгенерированного хука не объектом**: `useBlogPostsRetrieveQuery(5)` — нужно `useBlogPostsRetrieveQuery({ id: 5 })`.
- **`401 Unauthorized`** — нет токена или он истёк. Проверьте `localStorage.getItem('access')` и заголовок `Authorization` во вкладке Network.
- **Забыли слеш в конце адреса**: `/blog/posts` вместо `/blog/posts/` — сервер ответит редиректом `301`. `GET` переживёт это лишним запросом, а `POST` и `DELETE` сломаются.

---

# Глава 7. HTTP и работа с API

## 7.1. HTTP-запрос: повторение

Каждый раз, когда фронтенд что-то просит у сервера, уходит **HTTP-запрос**. В ответ приходит **HTTP-ответ**. Посмотрим на настоящий запрос к нашему серверу.

*Запрос*

```none
GET /blog/posts/?limit=2&search=react HTTP/1.1    ← метод, путь, параметры
Host: studapi.teachmeskills.by                    ← заголовки
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
                                                  ← пустая строка
                                                  ← тело (у GET его нет)
```

*Ответ*

```none
HTTP/1.1 200 OK                                   ← код ответа
Content-Type: application/json                    ← заголовки
Allow: GET, POST, HEAD, OPTIONS

{"count":17,"next":"...","previous":null,"results":[...]}   ← тело
```

Из чего состоит запрос:

| Часть         | Что это                                  | Пример                                    |
| ------------- | ---------------------------------------- | ----------------------------------------- |
| **Метод**     | что хотим сделать                        | `GET`, `POST`, `DELETE`                   |
| **URL**       | куда стучимся                            | `https://studapi.teachmeskills.by/blog/posts/` |
| **Параметры** | уточнения после `?`, через `&`           | `?limit=2&search=react`                   |
| **Заголовки** | служебная информация о запросе           | `Authorization: Bearer ...`               |
| **Тело**      | данные, которые отправляем               | JSON или `FormData` с картинкой           |

Разберём адрес по частям:

```none
https://studapi.teachmeskills.by/blog/posts/?limit=2&search=react
└─┬──┘  └──────────┬──────────┘└────┬─────┘ └────────┬─────────┘
протокол         домен             путь       query-параметры
```

### Методы

| Метод    | Что делает                    | Тело  | В нашем API                                |
| -------- | ----------------------------- | ----- | ------------------------------------------ |
| `GET`    | получить данные               | нет   | `GET /blog/posts/` — список постов         |
| `POST`   | создать                       | есть  | `POST /blog/posts/` — создать пост         |
| `PUT`    | заменить **целиком**          | есть  | `PUT /blog/posts/{id}/` — все поля поста   |
| `PATCH`  | изменить **часть**            | есть  | `PATCH /blog/posts/{id}/` — только title   |
| `DELETE` | удалить                       | нет   | `DELETE /blog/posts/{id}/` — удалить пост  |

`PUT` и `PATCH` часто путают. `PUT` — «вот новый пост целиком» (забыли поле — сервер ответит ошибкой). `PATCH` — «поменяй только это»:

*PATCH: меняем только заголовок*

```ts
const formData = new FormData();
formData.append('title', 'Новый заголовок');

await fetch('https://studapi.teachmeskills.by/blog/posts/1862/', {
  method: 'PATCH',
  headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
  body: formData,
});
```

> Почему `FormData`, а не JSON? Посмотрите в Swagger блок **Request body** у `PATCH /blog/posts/{id}/`: сервер принимает `multipart/form-data`. Формат тела всегда смотрим в документации.

### Заголовки

| Заголовок        | Где      | Зачем                                                         |
| ---------------- | -------- | ------------------------------------------------------------- |
| `Content-Type`   | запрос   | в каком формате тело: `application/json`, `multipart/form-data` |
| `Accept`         | запрос   | в каком формате хотим ответ                                   |
| `Authorization`  | запрос   | кто мы: `Bearer <access-токен>`                               |
| `Content-Type`   | ответ    | в каком формате пришёл ответ                                  |
| `Allow`          | ответ    | какие методы можно для этого адреса                           |

Запрос со всеми частями на `fetch`:

*fetch: логин*

```ts
const response = await fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
  method: 'POST',                                     // метод
  headers: { 'Content-Type': 'application/json' },   // заголовки
  body: JSON.stringify({ email, password }),          // тело
});

const tokens = await response.json(); // { access, refresh }
```

> **Важно:** для `FormData` заголовок `Content-Type` **не ставим**. Браузер сам напишет `multipart/form-data; boundary=...`. Если указать руками — пропадёт `boundary`, и сервер не разберёт файл.

> Все запросы видно в браузере: **F12 → Network**. Кликаем по запросу: **Headers** — метод, адрес, заголовки; **Payload** — тело и параметры; **Response** — что ответил сервер.

---

## 7.2. Коды ответа HTTP

Первая строка ответа — **код** (статус). По первой цифре сразу понятно, что произошло:

| Группа | Смысл                  | Кто виноват       |
| ------ | ---------------------- | ----------------- |
| `1xx`  | информационные         | — (не встречаем)  |
| `2xx`  | успех                  | все молодцы       |
| `3xx`  | перенаправление        | адрес поменялся   |
| `4xx`  | ошибка **клиента**     | мы: не тот запрос |
| `5xx`  | ошибка **сервера**     | бэкенд            |

Коды, которые можно получить от нашего сервера (проверьте сами в Swagger или Postman):

| Код   | Название              | Когда                                   | Пример                                                   |
| ----- | --------------------- | --------------------------------------- | -------------------------------------------------------- |
| `200` | OK                    | всё получилось, есть тело               | `GET /blog/posts/`                                       |
| `201` | Created               | создали запись                          | частый ответ на `POST` в других API                      |
| `204` | No Content            | получилось, тела нет                    | `DELETE /blog/posts/{id}/`, у нас и `POST /blog/posts/`  |
| `301` | Moved Permanently     | адрес переехал                          | `GET /blog/posts` — без слеша в конце                    |
| `400` | Bad Request           | неправильные данные                     | `POST /auth/jwt/create/` с пустым телом                  |
| `401` | Unauthorized          | не знаем, кто вы                        | неверный пароль или истёк токен                          |
| `403` | Forbidden             | знаем, кто вы, но нельзя                | например, изменить чужой пост                            |
| `404` | Not Found             | такого нет                              | `GET /blog/posts/999999/`                                |
| `500` | Internal Server Error | сервер сломался                         | не наша вина, но показать ошибку надо                    |

Тело ошибки тоже полезно — сервер объясняет, что не так:

*Ответы с ошибками*

```json
// 404  GET /blog/posts/999999/
{ "detail": "Not found." }

// 400  POST /auth/jwt/create/  с телом {}
{ "email": ["This field is required."], "password": ["This field is required."] }

// 401  POST /auth/jwt/create/  с неверным паролем
{ "detail": "No active account found with the given credentials" }
```

> **Важно:** `fetch` **не считает ошибкой** ответы `4xx` и `5xx`. Промис отклоняется только если сети нет совсем. Код надо проверять самим:

*fetch: проверяем код*

```ts
const response = await fetch('https://studapi.teachmeskills.by/blog/posts/999999/');

console.log(response.status); // 404
console.log(response.ok);     // false — но catch НЕ сработает

if (!response.ok) {
  throw new Error(`Ошибка ${response.status}`);
}
const post = await response.json();
```

Как реагировать в интерфейсе:

| Код         | Что показываем                                    |
| ----------- | ------------------------------------------------- |
| `400`       | ошибки под полями формы (из тела ответа)          |
| `401`       | отправляем на страницу логина                     |
| `403`       | «Нет прав», прячем кнопку                         |
| `404`       | «Пост не найден»                                  |
| `5xx`, сеть | «Что-то пошло не так, попробуйте позже»           |

---

## 7.3. axios

**axios** — библиотека для HTTP-запросов. Делает то же, что `fetch`, но удобнее:

| Задача                       | `fetch`                                  | `axios`                                  |
| ---------------------------- | ---------------------------------------- | ---------------------------------------- |
| Разобрать JSON               | `await response.json()`                  | уже в `response.data`                    |
| Отправить JSON               | `JSON.stringify` + заголовок             | просто объект: `axios.post(url, data)`   |
| Ошибка на `4xx` / `5xx`      | нет, проверяем `response.ok`             | **да**, попадаем в `catch`               |
| Query-параметры              | собираем строку руками                   | `{ params: { limit: 10 } }`              |
| Общий адрес и заголовки      | пишем в каждом запросе                   | один раз в `axios.create`                |
| Перехват всех запросов       | нет                                      | `interceptors`                           |

### Устанавливаем

*Терминал*

```bash
npm install axios
```

### Первый запрос

```ts
import axios from 'axios';

const response = await axios.get('https://studapi.teachmeskills.by/blog/posts/', {
  params: { limit: 2, search: 'react' }, // → ?limit=2&search=react
});

response.status;  // 200
response.headers; // заголовки ответа
response.data;    // { count: 17, next: '...', previous: null, results: [...] }
```

> `params` кодирует значения сам: `search: 'Основы'` превратится в `search=%D0%9E...`. Параметры со значением `undefined` в адрес не попадают.

### Свой экземпляр с `baseURL`

Чтобы не писать адрес сервера и токен в каждом запросе, создаём один настроенный экземпляр:

`src/api/http.ts`

```ts
import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://studapi.teachmeskills.by',
  timeout: 10_000, // ждём ответ не дольше 10 секунд
});

// перед каждым запросом: если есть токен — добавляем заголовок
http.interceptors.request.use((config) => {
  const token = localStorage.getItem('access');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// после каждого ответа: общий обработчик ошибок
http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      localStorage.removeItem('access'); // токен протух — выкидываем
    }
    return Promise.reject(error); // ошибку отдаём дальше, в catch
  },
);
```

**Interceptor** («перехватчик») — функция, через которую проходит каждый запрос или ответ. Удобно для токена, логов и общей обработки ошибок.

### Все запросы к постам в одном месте

`src/api/posts.ts`

```ts
import { http } from './http';
import type { Post } from '../types/post';

// ответ любого списка с пагинацией
export interface Paginated<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// что можно передать в GET /blog/posts/
export interface PostsParams {
  limit?: number;
  offset?: number;
  search?: string;
  ordering?: string;
  author__course_group?: number;
}

export const postsService = {
  getList: (params: PostsParams, signal?: AbortSignal) =>
    http.get<Paginated<Post>>('/blog/posts/', { params, signal }).then((res) => res.data),

  getById: (id: number) =>
    http.get<Post>(`/blog/posts/${id}/`).then((res) => res.data),

  create: (formData: FormData) =>
    http.post('/blog/posts/', formData),

  update: (id: number, formData: FormData) =>
    http.patch<Post>(`/blog/posts/${id}/`, formData).then((res) => res.data),

  remove: (id: number) =>
    http.delete(`/blog/posts/${id}/`),
};
```

`http.get<Paginated<Post>>` — подсказываем TypeScript, что лежит в `res.data`.

### Обработка ошибок

```ts
import axios from 'axios';

try {
  const post = await postsService.getById(999999);
} catch (error) {
  if (axios.isAxiosError(error)) {
    error.response?.status; // 404
    error.response?.data;   // { detail: 'Not found.' }
    // error.response нет — значит, сервер не ответил (нет сети, таймаут)
  }
}
```

---

## 7.4. Инструменты: Swagger и Postman

Прежде чем писать код, запрос надо **попробовать руками**: какие параметры, что приходит в ответ, какие ошибки. Для этого два инструмента.

### Swagger

Открываем [Swagger нашего API](https://studapi.teachmeskills.by/api/schema/swagger-ui/#/blog/blog_posts_retrieve) — ссылка ведёт сразу на `GET /blog/posts/{id}/`.

1. Раскрываем блок **GET /blog/posts/{id}/**.
2. Жмём **Try it out**, в поле `id` пишем `1862`.
3. Жмём **Execute**.
4. Смотрим ниже:
   - **Curl** — тот же запрос командой для терминала;
   - **Request URL** — точный адрес, который ушёл на сервер;
   - **Server response** — код (`200`), тело и заголовки ответа.
5. Пробуем `id` = `999999` — видим `404` и `{ "detail": "Not found." }`.

Что ещё есть в Swagger:

- **Parameters** — какие query-параметры принимает адрес. У `GET /blog/posts/` это `limit`, `offset`, `search`, `ordering`, `author__course_group`.
- **Request body** — что и в каком формате отправлять (для `POST`, `PATCH`).
- **Responses** — какие коды и тела возможны.
- **Schemas** (внизу страницы) — все типы: какие поля у `Post`, какие обязательные, ограничения (`title` — до 250 символов, `text` — от 200).
- Кнопка **Authorize** (замок справа вверху) — вставляем `access`-токен без слова `Bearer`, и все запросы пойдут с авторизацией.

### Postman

[Postman](https://www.postman.com/downloads/) — программа для отправки запросов. В отличие от Swagger, запросы в ней **сохраняются**, их можно собрать в коллекцию и передать коллеге.

**Запрос на список постов:**

1. **New → HTTP**, метод `GET`, адрес `https://studapi.teachmeskills.by/blog/posts/`.
2. Вкладка **Params**: `limit` = `5`, `search` = `react`, `ordering` = `-date`. Postman сам допишет их в адрес.
3. **Send**. Внизу — тело ответа, код `200 OK`, время и размер, вкладка **Headers**.

**Логин и токен:**

1. `POST https://studapi.teachmeskills.by/auth/jwt/create/`
2. **Body → raw → JSON**:

```json
{ "email": "you@mail.com", "password": "your-password" }
```

3. **Send** — в ответе `access` и `refresh`.
4. Чтобы не копировать токен руками, во вкладке **Scripts → Post-response** пишем:

```js
pm.environment.set('access', pm.response.json().access);
```

5. В других запросах: вкладка **Authorization → Bearer Token**, значение `{{access}}`.

**Переменные окружения.** Создаём **Environment** с переменной `baseUrl` = `https://studapi.teachmeskills.by` и пишем адреса как `{{baseUrl}}/blog/posts/`. Поменялся сервер — меняем одну переменную.

**Импорт всего API.** **Import** → вставляем `https://studapi.teachmeskills.by/api/schema/?format=json` → Postman сам создаст коллекцию со всеми запросами из Swagger.

| Инструмент | Когда удобен                                                              |
| ---------- | ------------------------------------------------------------------------- |
| Swagger    | быстро посмотреть документацию и попробовать запрос, ничего не ставя       |
| Postman    | сохранить запросы, переменные, токен; повторять одно и то же много раз    |
| Network    | посмотреть, что **на самом деле** отправляет наш фронтенд                 |

---

## 7.5. Получаем данные с API

Соберём хук, который грузит посты через axios. Он показывает всё, что нужно при загрузке данных: состояние загрузки, ошибку и отмену старого запроса.

`src/hooks/usePosts.ts`

```ts
import { useEffect, useState } from 'react';
import axios from 'axios';
import { postsService, type Paginated, type PostsParams } from '../api/posts';
import type { Post } from '../types/post';

export const usePosts = (params: PostsParams) => {
  const [data, setData] = useState<Paginated<Post> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // объект params новый на каждой отрисовке — в зависимости кладём примитивы
  const { limit, offset, search, ordering, author__course_group } = params;

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    setError(null);

    postsService
      .getList({ limit, offset, search, ordering, author__course_group }, controller.signal)
      .then(setData)
      .catch((err) => {
        if (axios.isCancel(err)) return; // запрос отменили сами — это не ошибка
        setError(axios.isAxiosError(err) ? `Ошибка ${err.response?.status ?? 'сети'}` : 'Что-то пошло не так');
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });

    // параметры поменялись или ушли со страницы — отменяем старый запрос
    return () => controller.abort();
  }, [limit, offset, search, ordering, author__course_group]);

  return { data, isLoading, error };
};
```

Использование:

```tsx
const { data, isLoading, error } = usePosts({ limit: 10, ordering: '-date' });

if (isLoading) return <Skeleton height={300} />;
if (error) return <Alert severity="error">{error}</Alert>;

return data?.results.map((post) => <Card key={post.id} postData={post} />);
```

Зачем `AbortController`: пользователь быстро печатает «r», «re», «rea»… — уходят три запроса. Ответы могут прийти **в любом порядке**, и на экране окажется результат для «re». Отмена старого запроса это исключает.

### А как же RTK Query?

В нашем проекте посты уже грузит RTK Query (глава 6) — он делает всё то же самое: загрузка, ошибки, отмена, плюс кэш. Тот же запрос — одна строка:

```tsx
const { data, isLoading, isError } = useBlogPostsListQuery({ limit: 10, ordering: '-date' });
```

| Когда                                          | Чем грузим                    |
| ---------------------------------------------- | ----------------------------- |
| Проект с Redux Toolkit (наш блог)              | RTK Query                     |
| Проект без Redux, простой запрос               | axios + `useEffect`           |
| Код не в компоненте (скрипт, утилита)          | axios / `fetch`               |

Можно и совместить: RTK Query будет отправлять запросы **через наш axios-экземпляр** с его interceptors. Для этого заменяем `fetchBaseQuery` на свою функцию:

`src/store/api/axiosBaseQuery.ts`

```ts
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { type AxiosRequestConfig } from 'axios';
import { http } from '../../api/http';

type Args = {
  url: string;
  method?: AxiosRequestConfig['method'];
  body?: unknown;
  params?: AxiosRequestConfig['params'];
};

type ApiError = { status?: number; data?: unknown };

export const axiosBaseQuery: BaseQueryFn<Args, unknown, ApiError> = async ({ url, method = 'GET', body, params }) => {
  try {
    const res = await http({ url, method, data: body, params });
    return { data: res.data };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return { error: { status: err.response?.status, data: err.response?.data } };
    }
    return { error: { data: String(err) } };
  }
};
```

`src/store/api/baseApi.ts`

```ts
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery, // вместо fetchBaseQuery({ baseUrl, prepareHeaders })
  tagTypes: ['blog'],
  endpoints: () => ({}),
});
```

Сгенерированный `blogApi.generated.ts` менять не надо: он передаёт `url`, `method`, `body`, `params` — ровно то, что принимает `axiosBaseQuery`.

---

## 7.6. Поиск, фильтр, сортировка

На сервере **1418 постов**, а к нам приходит страница из 10. Если фильтровать массив на фронтенде, найдём только среди этих 10. Поэтому искать, фильтровать и сортировать просим **сервер** — через query-параметры.

| Операция     | Параметр               | Пример                       | Что вернёт                                    |
| ------------ | ---------------------- | ---------------------------- | --------------------------------------------- |
| Поиск        | `search`               | `?search=react`              | посты, где в заголовке или тексте есть «react» (17 шт.) |
| Фильтр       | `author__course_group` | `?author__course_group=1`    | посты авторов из группы с `id = 1` (8 шт.)    |
| Сортировка   | `ordering`             | `?ordering=-date`            | сначала новые                                 |

Параметры комбинируются:

```none
/blog/posts/?search=react&author__course_group=1&ordering=-date&limit=10&offset=0
```

### Сортировка: `ordering`

Пишем имя поля. Минус впереди — по убыванию.

| Значение        | Порядок                       |
| --------------- | ----------------------------- |
| `date`          | сначала старые                |
| `-date`         | сначала новые                 |
| `title`         | по названию А → Я             |
| `-title`        | по названию Я → А             |
| `lesson_num`    | по номеру урока, по возрастанию |
| `-lesson_num`   | по номеру урока, по убыванию  |

> Неизвестное поле (`?ordering=foo`) сервер **молча игнорирует** и отдаёт посты в обычном порядке. Ошибки не будет — если сортировка «не работает», проверьте имя поля.

### Фильтр по группе: `author__course_group`

Список групп берём с сервера: `GET /blog/groups/` → `{ id, name }`. `id` группы передаём в фильтр.

```json
{ "count": 20, "results": [{ "id": 1, "name": "JS 1" }, { "id": 2, "name": "JS TEST 2" }, ...] }
```

### Один и тот же запрос тремя способами

```ts
// 1. fetch — строку собираем сами, кириллицу кодируем
const search = encodeURIComponent('Основы');
fetch(`https://studapi.teachmeskills.by/blog/posts/?search=${search}&ordering=-date`);

// 2. axios — объектом, кодирует сам
http.get('/blog/posts/', { params: { search: 'Основы', ordering: '-date' } });

// 3. RTK Query (сгенерированный хук) — имена в camelCase!
useBlogPostsListQuery({ search: 'Основы', ordering: '-date', authorCourseGroup: 1 });
```

> В проекте уже есть помощник `buildQs` (`src/shared/build-qs.ts`): `buildQs('/blog/posts/', { search: 'Основы', limit: 10 })` → `/blog/posts/?search=%D0%9E...&limit=10`. Пустые `null` / `undefined` выкидывает сам.

### Поиск без лишних запросов: debounce

Если отправлять запрос на каждую букву, слово «react» — это 5 запросов. **Debounce** («подождать, пока успокоится»): запрос уходит, только когда пользователь перестал печатать на 500 мс.

`src/hooks/useDebounce.ts`

```ts
import { useEffect, useState } from 'react';

// возвращает value, но только после того, как оно delay мс не менялось
export const useDebounce = <T>(value: T, delay = 500): T => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    // value поменялось раньше — старый таймер отменяем
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
};
```

```tsx
const [search, setSearch] = useState('');
const debouncedSearch = useDebounce(search, 500);

// в поле — search (меняется сразу), в запрос — debouncedSearch
useBlogPostsListQuery({ search: debouncedSearch || undefined });
```

---

## 7.7. Пагинация

Отдать все 1418 постов разом — долго и тяжело. Сервер отдаёт их **страницами**. У нас пагинация через `limit` и `offset`:

- `limit` — сколько постов на странице;
- `offset` — сколько постов пропустить с начала.

| Страница | `limit` | `offset` | Какие посты  |
| -------- | ------- | -------- | ------------ |
| 1        | 10      | 0        | 1–10         |
| 2        | 10      | 10       | 11–20        |
| 3        | 10      | 20       | 21–30        |
| *N*      | 10      | (N − 1) × 10 |          |

В ответе сервер подсказывает, что дальше:

```json
{
  "count": 1418,
  "next": "http://studapi.teachmeskills.by/blog/posts/?limit=10&offset=20",
  "previous": "http://studapi.teachmeskills.by/blog/posts/?limit=10",
  "results": [ ... 10 постов ... ]
}
```

| Поле       | Что это                                        |
| ---------- | ---------------------------------------------- |
| `count`    | сколько **всего** постов (с учётом поиска и фильтра) |
| `next`     | адрес следующей страницы, `null` — это последняя |
| `previous` | адрес предыдущей, `null` — это первая          |
| `results`  | посты текущей страницы                         |

Две формулы, которые нужны всегда:

```ts
const offset = (page - 1) * LIMIT;                  // номер страницы → offset
const pageCount = Math.ceil(count / LIMIT);          // сколько всего страниц: 1418 / 10 → 142
```

Проверьте последнюю страницу: `?limit=2&offset=1416` — придут 2 поста и `"next": null`.

> **Важно:** изменили поиск, фильтр или сортировку — **сбрасываем страницу на первую**. Иначе можно остаться на 50-й странице, когда по новому поиску постов всего 17.

Для страниц в MUI есть готовый компонент:

```tsx
import { Pagination } from '@mui/material';

<Pagination
  count={pageCount}                         // сколько всего страниц
  page={page}                               // текущая (с 1)
  onChange={(_, value) => setPage(value)}   // value — номер новой страницы
/>
```

---

## 7.8. Собираем страницу постов

Соберём всё вместе на `/posts`: поиск, фильтр по группе, сортировка и страницы.

Где хранить фильтры? В `useState` они пропадут при перезагрузке, а ссылку на «вторую страницу поиска react» не отправить другу. Поэтому храним их **в адресе**: `/posts?search=react&group=1&ordering=-date&page=2`. Читаем и пишем через `useSearchParams` из `react-router`.

`src/pages/PostsPage/PostsPage.tsx`

```tsx
import { useSearchParams } from 'react-router';
import {
  Alert, Box, FormControl, InputLabel, MenuItem, Pagination,
  Select, Skeleton, Stack, TextField, Typography,
} from '@mui/material';
import { Card } from '../../components/Card/Card';
import {
  useBlogGroupsListQuery,
  useBlogPostsListQuery,
} from '../../store/api/blogApi.generated';
import { useDebounce } from '../../hooks/useDebounce';

const LIMIT = 10;

const SORT_OPTIONS = [
  { value: '-date', label: 'Сначала новые' },
  { value: 'date', label: 'Сначала старые' },
  { value: 'title', label: 'По названию' },
  { value: '-lesson_num', label: 'По номеру урока' },
];

export const PostsPage = () => {
  // всё состояние фильтров живёт в адресе: /posts?search=react&group=1&ordering=-date&page=2
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') ?? '';
  const group = searchParams.get('group') ?? '';           // '' — все группы
  const ordering = searchParams.get('ordering') ?? '-date';
  const page = Number(searchParams.get('page') ?? 1);

  // в поле текст меняется сразу, а запрос уходит через 500 мс после последней буквы
  const debouncedSearch = useDebounce(search, 500);

  // меняем часть параметров, остальные оставляем как есть
  const updateParams = (changes: Record<string, string>) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        Object.entries(changes).forEach(([key, value]) => {
          if (value) next.set(key, value);
          else next.delete(key); // пустое значение — убираем из адреса
        });
        return next;
      },
      { replace: true }, // не засоряем историю каждой буквой
    );
  };

  // любой фильтр меняет набор постов → возвращаемся на 1-ю страницу
  const changeFilter = (key: string, value: string) => updateParams({ [key]: value, page: '' });

  const { data, isLoading, isFetching, isError } = useBlogPostsListQuery({
    limit: LIMIT,
    offset: (page - 1) * LIMIT,
    search: debouncedSearch || undefined,
    ordering,
    authorCourseGroup: group ? Number(group) : undefined,
  });

  const { data: groups } = useBlogGroupsListQuery({ limit: 100 });

  const posts = data?.results ?? [];
  const pageCount = Math.ceil((data?.count ?? 0) / LIMIT);

  return (
    <Stack spacing={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <TextField
          label="Поиск"
          value={search}
          onChange={(e) => changeFilter('search', e.target.value)}
          fullWidth
        />

        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel id="group-label">Группа</InputLabel>
          <Select
            labelId="group-label"
            label="Группа"
            value={group}
            onChange={(e) => changeFilter('group', e.target.value)}
          >
            <MenuItem value="">Все группы</MenuItem>
            {groups?.results?.map((g) => (
              <MenuItem key={g.id} value={String(g.id)}>{g.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="sort-label">Сортировка</InputLabel>
          <Select
            labelId="sort-label"
            label="Сортировка"
            value={ordering}
            onChange={(e) => changeFilter('ordering', e.target.value)}
          >
            {SORT_OPTIONS.map((o) => (
              <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      <Typography color="text.secondary">Найдено: {data?.count ?? 0}</Typography>

      {isError && <Alert severity="error">Не удалось загрузить посты</Alert>}

      {isLoading ? (
        <Skeleton height={300} />
      ) : (
        // старые посты видны, пока грузятся новые, — просто делаем их бледнее
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, opacity: isFetching ? 0.5 : 1 }}>
          {posts.map((post) => (
            <Card key={post.id} postData={post} variant="search" />
          ))}
          {!isFetching && posts.length === 0 && <Typography>Ничего не найдено</Typography>}
        </Box>
      )}

      {pageCount > 1 && (
        <Pagination
          count={pageCount}
          page={page}
          onChange={(_, value) => {
            updateParams({ page: value === 1 ? '' : String(value) });
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}
    </Stack>
  );
};
```

Что здесь важно:

1. **Фильтры в URL.** Перезагрузили страницу или отправили ссылку — фильтры и страница на месте. Кнопка «Назад» браузера тоже работает.
2. **`changeFilter` сбрасывает `page`.** Поменяли поиск — снова первая страница.
3. **`isLoading` vs `isFetching`.** `isLoading` — только самая первая загрузка (показываем скелетон). `isFetching` — любой запрос, в том числе при смене страницы. Пока он идёт, в `data` лежат **старые** посты — показываем их бледными, а не пустой экран.
4. **Кэш.** Вернулись на страницу 1 после страницы 2 — RTK Query отдаст её из кэша без запроса.
5. **Имена параметров.** В URL сайта — короткие `group`, `page`; в запросе к серверу — `authorCourseGroup`, `offset`. Это разные вещи: адрес нашего сайта мы придумываем сами.

---

## 7.9. Проверяем

1. Открываем `/posts`. В **Network** — запрос `posts/?limit=10&offset=0&ordering=-date`, внизу пагинация на 142 страницы.
2. Печатаем в поиск «react» — запрос уходит **один**, через полсекунды после последней буквы. «Найдено: 17», страниц — 2.
3. Выбираем группу — в запросе появился `author__course_group=...`, адрес сайта стал `/posts?search=react&group=1`.
4. Переключаем сортировку — порядок постов меняется, в запросе `ordering=...`.
5. Жмём страницу 3 — в запросе `offset=20`. Возвращаемся на 1 — запроса нет, сработал кэш.
6. Перезагружаем страницу (F5) — фильтры и номер страницы остались.
7. Тот же запрос повторяем в Swagger и Postman — ответы совпадают.

---

## 7.10. Практика: активация аккаунта

После регистрации (`POST /auth/users/`) аккаунт **не активен**: войти нельзя. Сервер отправляет на почту ссылку вида:

```none
http://studapi.teachmeskills.by//activate/Ng/atj1td-0c06a11c61dc8b14966eb7abb176cb9e
                                 └──┬───┘ └┬┘ └──────────────┬──────────────────┘
                                  путь    uid               token
```

Сама по себе ссылка ничего не делает. Нам нужна страница по этому адресу, которая возьмёт `uid` и `token` из URL и отправит их на сервер — [POST /auth/users/activation/](https://studapi.teachmeskills.by/api/schema/swagger-ui/#/auth/auth_users_activation_create).

| Ответ | Что значит                                   | Что показываем                         |
| ----- | -------------------------------------------- | -------------------------------------- |
| `204` | аккаунт активирован                          | «Аккаунт активирован!»                 |
| `400` | неверный `uid` или `token`                   | «Ссылка недействительна»               |
| `403` | ссылка уже использована, аккаунт активен     | «Аккаунт уже активирован»              |
| `5xx`, сеть | сервер недоступен                      | «Попробуйте позже»                     |

План:

1. Получить хук запроса из Swagger через генератор.
2. Добавить роут `/activate/:uid/:token`.
3. На странице в `useEffect` отправить запрос и показать результат.

### Хук запроса из Swagger

Отдельный slice или thunk не нужен: запрос к серверу — работа RTK Query (глава 6). Адрес есть в Swagger, значит хук сгенерируем. Добавляем его в фильтр генератора:

`openapi-config.ts`

```ts
// берём только нужное: посты, группы, логин и активацию
filterEndpoints: [/^blog/, /^authJwt/, /^authUsersActivation/],
```

*Терминал*

```bash
npm run api:generate
```

В `blogApi.generated.ts` появился эндпоинт и хук:

`src/store/api/blogApi.generated.ts`

```ts
authUsersActivationCreate: build.mutation<
  AuthUsersActivationCreateApiResponse,
  AuthUsersActivationCreateApiArg
>({
  query: (queryArg) => ({
    url: `/auth/users/activation/`,
    method: "POST",
    body: queryArg.activationRequest,
  }),
  invalidatesTags: ["auth"],
}),

// ...
export type AuthUsersActivationCreateApiArg = {
  activationRequest: ActivationRequest; // { uid: string; token: string }
};
// ...
export const { /* ... */ useAuthUsersActivationCreateMutation } = injectedRtkApi;
```

Это `POST`, поэтому генератор сделал **mutation**: хук не запускается сам, а возвращает функцию `activate`, которую мы вызываем, когда нужно.

### Роут

`src/paths.ts`

```ts
export const PATHS = {
  // ...
  activate: (uid: string, token: string) => `/activate/${uid}/${token}`,
};
```

`src/App.tsx`

```tsx
import { ActivatePage } from './pages/ActivatePage/ActivatePage';

// внутри <Route element={<Layout />}>, НЕ внутри ProtectedRoute:
// по ссылке из письма приходит ещё не залогиненный пользователь
<Route path={PATHS.activate(':uid', ':token')} element={<ActivatePage />} />
```

В письме адрес с **двойным слешем**: `//activate/...`. Роутер такой путь не узнает и покажет 404. Убираем лишние слеши до запуска приложения:

`src/main.tsx`

```tsx
// В письме ссылка с двойным слешем: //activate/uid/token — роутер такой адрес не узнаёт.
// Убираем лишние слеши в начале до старта приложения.
if (window.location.pathname.startsWith('//')) {
  const { pathname, search, hash } = window.location;
  window.history.replaceState(null, '', pathname.replace(/^\/+/, '/') + search + hash);
}

createRoot(document.getElementById('root')!).render(
  // ...
);
```

### Страница

`src/pages/ActivatePage/ActivatePage.tsx`

```tsx
import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router';
import { Alert, Box, Button, CircularProgress, Typography } from '@mui/material';
import { useAuthUsersActivationCreateMutation } from '../../store/api/blogApi.generated';

// текст ошибки по коду ответа сервера
const getErrorMessage = (error: unknown) => {
  const status = (error as { status?: number | string } | undefined)?.status;

  if (status === 403) return 'Аккаунт уже активирован. Можно войти.';
  if (status === 400) return 'Ссылка активации недействительна или повреждена.';
  if (status === 'FETCH_ERROR') return 'Нет соединения с сервером. Попробуйте позже.';
  return 'Не удалось активировать аккаунт. Попробуйте позже.';
};

// /activate/:uid/:token — сюда ведёт ссылка из письма после регистрации
export const ActivatePage = () => {
  const { uid, token } = useParams();

  // POST /auth/users/activation/  { uid, token }
  const [activate, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useAuthUsersActivationCreateMutation();

  // StrictMode в разработке запускает useEffect дважды.
  // Второй запрос с тем же токеном сервер отклонит (403), поэтому шлём только один раз.
  const isSent = useRef(false);

  // при загрузке страницы отправляем uid и token из адреса на бэкенд
  useEffect(() => {
    if (!uid || !token || isSent.current) return;
    isSent.current = true;
    activate({ activationRequest: { uid, token } });
  }, [activate, uid, token]);

  if (!uid || !token) {
    return <Alert severity="error">В ссылке нет данных для активации.</Alert>;
  }

  // 403 — ссылку уже открывали, аккаунт активен: это не страшная ошибка
  const isAlreadyActive = isError && (error as { status?: number }).status === 403;

  return (
    <Box sx={{ display: 'grid', gap: 2, justifyItems: 'start', py: 2 }}>
      <Typography variant="h4">Активация аккаунта</Typography>

      {(isUninitialized || isLoading) && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <CircularProgress size={24} />
          <Typography>Активируем аккаунт…</Typography>
        </Box>
      )}

      {isSuccess && <Alert severity="success">Аккаунт активирован! Теперь можно войти.</Alert>}

      {isError && (
        <Alert severity={isAlreadyActive ? 'info' : 'error'}>{getErrorMessage(error)}</Alert>
      )}

      {(isSuccess || isError) && (
        <Button component={Link} to="/" variant="contained">На главную</Button>
      )}
    </Box>
  );
};
```

Что здесь важно:

1. **Флаги mutation** заменяют свой `status`: `isUninitialized` — запрос ещё не отправляли, `isLoading` — идёт, `isSuccess` — `204`, `isError` — любой другой код.
2. **`error.status`** — код ответа сервера (`400`, `403`), а в `error.data` — тело ошибки, например `{ "token": ["Invalid token for given user."] }`. Если сервер вообще не ответил, `status` будет строкой `'FETCH_ERROR'`.
3. **`useRef` от двойного запроса.** В режиме разработки `StrictMode` вызывает `useEffect` дважды (3.4). Query RTK Query сам склеивает одинаковые запросы, а mutation — нет: каждый вызов `activate` — новый `POST`. Второй запрос с тем же токеном сервер отклонит с `403`, и пользователь увидит «Уже активирован» вместо «Активирован!». `ref` переживает повторный запуск эффекта, поэтому запрос уходит один.
4. **`403` показываем как `info`, а не `error`**: аккаунт активен, пользователю можно просто войти.

Поток данных целиком:

```none
/activate/Ng/atj1td-...  →  useParams() → { uid, token }
        ↓ useEffect
activate({ activationRequest: { uid, token } })     isLoading  → спиннер
        ↓
POST /auth/users/activation/
        ↓ 204 → isSuccess                           → «Аккаунт активирован!»
        ↓ 403 → isError, error.status === 403       → «Уже активирован»
        ↓ 400 → isError, error.status === 400       → «Ссылка недействительна»
```

### Проверяем

1. Регистрируемся: в Swagger `POST /auth/users/` с `username`, `email`, `password`, `course_group`.
2. Открываем письмо и меняем в ссылке домен на свой dev-сервер: `http://localhost:5173//activate/<uid>/<token>`.
3. Видим спиннер, затем «Аккаунт активирован!». В **Network** — запрос `activation/` **один**, ответ `204`. В Redux DevTools — `api/executeMutation/pending` → `fulfilled`.
4. Обновляем страницу (F5) — теперь `403` и «Аккаунт уже активирован».
5. Портим токен в адресе — `400` и «Ссылка недействительна».
6. Логинимся этим аккаунтом через `POST /auth/jwt/create/` — получаем токены.

> На почту приходит адрес `studapi.teachmeskills.by`, а не наш сайт: это домен, настроенный на сервере. При разработке подставляем `localhost` руками. У Vite порт по умолчанию `5173`, а не `3000`.

---

## 7.11. Частые ошибки

- **Фильтруем на фронтенде** через `posts.filter(...)` — ищем только среди 10 загруженных постов, а не среди всех 1418. Поиск и фильтр — параметрами запроса.
- **Ждём, что `fetch` упадёт на `404`** — не упадёт. Проверяйте `response.ok`. axios и RTK Query ошибку дают сами.
- **Не сбросили страницу после смены фильтра** — остались на странице 50, а постов по запросу 17: пустой экран.
- **Перепутали `offset` и номер страницы**: `offset: page` вместо `offset: (page - 1) * LIMIT`.
- **Запрос на каждую букву** — нет debounce. Сервер получает лишнюю нагрузку, ответы приходят вперемешку.
- **В зависимостях `useEffect` объект `params`** — он новый на каждой отрисовке, запросы идут бесконечно. Кладите в зависимости примитивы.
- **Нет отмены запроса** — при быстром вводе на экране остаётся ответ на старый поиск. Используйте `AbortController` (или RTK Query — он делает это сам).
- **`Content-Type: multipart/form-data` руками** для `FormData` — пропадает `boundary`, сервер не видит файл. Не указывайте его: браузер и axios поставят сами.
- **Кириллица в адресе без кодирования** — собирая строку руками, оборачивайте значения в `encodeURIComponent` или используйте `params` / `buildQs`.
- **`ordering` с опечаткой** — сервер молча игнорирует неизвестное поле, ошибки не будет, просто порядок не тот.
- **Сгенерированному хуку передали `author__course_group`** — у него имя `authorCourseGroup`. Имена параметров хука смотрите в `blogApi.generated.ts`.
- **Токен в Swagger со словом `Bearer`** — в окно **Authorize** вставляем только сам токен, `Bearer` Swagger добавит сам.
- **Запрос активации ушёл дважды** — `StrictMode` вызывает `useEffect` два раза, а mutation, в отличие от query, запросы не склеивает. Второй `POST` получает `403`. Защищаемся `useRef` (7.10).
- **Ждём, что mutation запустится сама** — хук `useXxxMutation` только возвращает функцию, её надо вызвать в `useEffect` или обработчике.
- **Страница активации внутри `ProtectedRoute`** — по ссылке из письма приходит незалогиненный пользователь, и его не пустит.
