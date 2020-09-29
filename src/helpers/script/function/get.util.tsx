export function $_GETDECODE(param: string): string {
  const url = decodeURI(window.location.href);
  const result = url.replace(window.location.hash, '');

  if (param) {
    return result || '';
  }

  return result || '';
}
