# Первый проект на React

**Стек:** React + TypeScript + Vite + SCSS Modules + Material UI (светлая и тёмная тема)

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
