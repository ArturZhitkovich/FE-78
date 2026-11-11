import queryString from 'query-string';

/**
 * Appends a query string to `baseUrl`, serialized with the project-wide
 * `query-string` config (`arrayFormat: 'none'` — `?foo=1&foo=2`).
 *
 * - Keys and values are URL-encoded (special chars, Cyrillic, full URLs).
 * - `null` / `undefined` are dropped; valid falsy values `0` and `''` are kept.
 * - Returns the bare `baseUrl` when there are no params to append (no dangling `?`).
 */
export const buildQs = (baseUrl: string, params?: any): string => {
  if (!params || Object.keys(params).length === 0) {
    return baseUrl;
  }

  const qs = queryString.stringify(params, {
    arrayFormat: 'none',
    skipNull: true,
    sort: false,
  });

  return qs ? `${baseUrl}?${qs}` : baseUrl;
};
