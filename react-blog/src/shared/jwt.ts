// Что лежит в payload токена нашего сервера (simplejwt)
export interface JwtPayload {
  token_type: 'access' | 'refresh';
  exp: number; // когда истекает, секунды с 1970 года
  iat: number; // когда выдан
  jti: string; // уникальный id токена
  user_id: number;
}

// Читаем payload БЕЗ проверки подписи — проверять подпись умеет только сервер
export const decodeJwt = (token: string): JwtPayload | null => {
  try {
    const payload = token.split('.')[1];
    // base64url → base64: другие символы, без "=" в конце
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    // atob даёт байты, TextDecoder собирает из них UTF-8 (на случай кириллицы)
    const bytes = Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return null; // не JWT или испорчен
  }
};

// Истёк ли токен. Запас в 10 секунд — пока запрос летит, токен может «умереть»
export const isTokenExpired = (token: string, marginSec = 10) => {
  const payload = decodeJwt(token);
  if (!payload) return true;
  return payload.exp * 1000 < Date.now() + marginSec * 1000;
};
