import { Link, Navigate } from 'react-router';
import { useFormik, type FormikErrors } from 'formik';
import { Alert, Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import {
  useAuthUsersCreateMutation,
  useAuthUsersResendActivationCreateMutation,
  useBlogGroupsListQuery,
} from '../../store/api/blogApi.generated';
import { useAuth } from '../../context/AuthContext';
import { PATHS } from '../../paths';

interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  passwordRepeat: string;
  courseGroup: string; // в селекте значение — строка, серверу отдадим число
}

// Ошибки валидации от сервера: { email: ['...'], password: ['...', '...'] }
type ServerErrors = Partial<Record<string, string[]>>;

const getServerErrors = (error: unknown): ServerErrors | null => {
  const { status, data } = (error ?? {}) as { status?: number; data?: unknown };
  return status === 400 && data && typeof data === 'object' ? (data as ServerErrors) : null;
};

// Проверки до отправки: всё, что можно проверить без сервера
const validate = (values: RegisterFormValues) => {
  const errors: FormikErrors<RegisterFormValues> = {};

  if (!values.username) errors.username = 'Введите имя пользователя';
  else if (!/^[\w.@+-]+$/.test(values.username)) errors.username = 'Только латиница, цифры и @ . + - _';

  if (!values.email) errors.email = 'Введите email';

  if (values.password.length < 8) errors.password = 'Не короче 8 символов';
  else if (/^\d+$/.test(values.password)) errors.password = 'Пароль не может состоять только из цифр';

  if (values.passwordRepeat !== values.password) errors.passwordRepeat = 'Пароли не совпадают';

  return errors;
};

export const RegisterPage = () => {
  const { isAuth } = useAuth();

  // группы для выпадающего списка: их 20, берём все сразу
  const { data: groups } = useBlogGroupsListQuery({ limit: 100 });

  // POST /auth/users/ → 201 { id, username, email, course_group }
  const [register, { isSuccess }] = useAuthUsersCreateMutation();
  // POST /auth/users/resend_activation/ { email } — письмо ещё раз
  const [resend, { isLoading: isResending, isSuccess: isResent }] =
    useAuthUsersResendActivationCreateMutation();

  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordRepeat: '',
      courseGroup: '22',
    },
    validate,
    // сюда попадаем, только если validate не нашёл ошибок
    onSubmit: async (values, { setErrors, setStatus }) => {
      setStatus(undefined);
      try {
        await register({
          customUserCreateRequest: {
            username: values.username,
            email: values.email,
            password: values.password,
            course_group: values.courseGroup ? Number(values.courseGroup) : null,
          },
        }).unwrap();
      } catch (error) {
        const serverErrors = getServerErrors(error);

        if (!serverErrors) {
          // 500, нет сети и т. п. — не ошибка конкретного поля
          setStatus('Не удалось зарегистрироваться. Попробуйте позже.');
          return;
        }

        // массивы сервера → строки Formik, имена полей сервера → наши
        setErrors({
          username: serverErrors.username?.join(' '),
          email: serverErrors.email?.join(' '),
          password: serverErrors.password?.join(' '),
          courseGroup: serverErrors.course_group?.join(' '),
        });
        // ошибка не по полю
        setStatus(serverErrors.non_field_errors?.join(' '));
      }
    },
  });

  if (isAuth) return <Navigate to="/" replace />;

  // Успех: аккаунт создан, но не активен — нужна ссылка из письма (7.10)
  if (isSuccess) {
    const { email } = formik.values;

    return (
      <Box sx={{ display: 'grid', gap: 2, maxWidth: 420, py: 2, mx: 'auto', justifyItems: 'start' }}>
        <Typography variant="h4">Проверьте почту</Typography>
        <Alert severity="success">
          Мы отправили письмо на <b>{email}</b>. Перейдите по ссылке из письма, чтобы
          активировать аккаунт, затем войдите.
        </Alert>
        <Button
          onClick={() => resend({ sendEmailResetRequest: { email } })}
          disabled={isResending || isResent}
        >
          {isResent ? 'Письмо отправлено ещё раз' : 'Письмо не пришло? Отправить ещё раз'}
        </Button>
        <Button component={Link} to={PATHS.login()} variant="contained">
          Ко входу
        </Button>
      </Box>
    );
  }

  // ошибку поля показываем, только когда пользователь его уже трогал
  const errorText = (field: keyof RegisterFormValues) =>
    formik.touched[field] ? formik.errors[field] : undefined;

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{ display: 'grid', gap: 2, maxWidth: 360, py: 2, mx: 'auto' }}
    >
      <Typography variant="h4">Регистрация</Typography>
      <TextField
        label="Имя пользователя"
        {...formik.getFieldProps('username')}
        required
        error={Boolean(errorText('username'))}
        helperText={errorText('username') ?? 'Латиница, цифры и @ . + - _'}
      />
      <TextField
        label="Email"
        type="email"
        {...formik.getFieldProps('email')}
        required
        error={Boolean(errorText('email'))}
        helperText={errorText('email')}
      />
      <TextField
        label="Пароль"
        type="password"
        {...formik.getFieldProps('password')}
        required
        error={Boolean(errorText('password'))}
        helperText={errorText('password') ?? 'Не короче 8 символов, не только цифры'}
      />
      <TextField
        label="Повторите пароль"
        type="password"
        {...formik.getFieldProps('passwordRepeat')}
        required
        error={Boolean(errorText('passwordRepeat'))}
        helperText={errorText('passwordRepeat') ?? ' '}
      />
      <TextField
        select
        label="Группа"
        name="courseGroup"
        value={formik.values.courseGroup}
        onChange={formik.handleChange}
        error={Boolean(errorText('courseGroup'))}
        helperText={errorText('courseGroup')}
        disabled
      >
        <MenuItem value="">Без группы</MenuItem>
        {groups?.results?.map((group) => (
          <MenuItem key={group.id} value={String(group.id)}>
            {group.name}
          </MenuItem>
        ))}
      </TextField>

      {formik.status && <Alert severity="error">{formik.status}</Alert>}

      <Button type="submit" variant="contained" disabled={formik.isSubmitting}>
        Зарегистрироваться
      </Button>
      <Typography variant="body2">
        Уже есть аккаунт? <Link to={PATHS.login()}>Войти</Link>
      </Typography>
    </Box>
  );
};
