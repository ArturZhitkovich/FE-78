import { Skeleton, Box, TextField, Pagination, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Card } from "../../components/Card/Card";
import { useBlogPostsListQuery } from "../../store/api/blogApi.generated";
import { useDebounce } from "../../hooks/useBebounce";
import { useSearchParams } from "react-router";

const LIMIT = 10
const SORT_OPTIONS = [
   { value: '-date', label: 'Сначала новые' },
  { value: 'date', label: 'Сначала старые' },
  { value: 'title', label: 'По названию' },
  { value: '-lesson_num', label: 'По номеру урока' },
];

export const PostsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const search = searchParams.get('search') ?? '';
  const page = Number(searchParams.get('page') ?? 1);
  const ordering = searchParams.get('ordering') ?? '-date';
  const debounced = useDebounce(search)

  
  // меняем часть параметров, остальные оставляем как есть
  const updateParams = (changes: Record<string, string>) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);

      Object.entries(changes).forEach(([key, value]) => {
        if (value) {
          next.set(key, value)
        } else {
          next.delete(key) // пустое значение — убираем из адреса
        }
      })
      return next
    }, 
    { replace: true }, // не засоряем историю каждой буквой
    )
  }

  // любой фильтр меняет набор постов → возвращаемся на 1-ю страницу
  const changeFilter = (key: string, value: string) => updateParams({ [key]: value, page: '' });

  const { data, isLoading } = useBlogPostsListQuery({ 
    limit: LIMIT, 
    offset: LIMIT * (page - 1), 
    search: debounced,
    ordering: ordering,
  });

  const posts = data?.results ?? [];
  const pageCount = Math.ceil((data?.count ?? 0) / LIMIT);

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
      <TextField placeholder="Search" 
        value={search}
        onChange={(e) => changeFilter('search', e.target.value)}
        helperText={ search && 'поиск по: ' + search}
      />
      
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

      {isLoading ? <Skeleton height={300} width={600} /> : (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
          {posts.map((post) => <Card key={post.id} postData={post} />)}
        </Box>
      )}
      
      {pageCount > 0 && 
        <Pagination
          count={pageCount}
          onChange={(_, value) => {
            updateParams({ page: value === 1 ? '' : String(value) });
            window.scrollTo({ top: 0,  behavior: 'smooth' });
          }}
        />}
   </Box>
  )
}