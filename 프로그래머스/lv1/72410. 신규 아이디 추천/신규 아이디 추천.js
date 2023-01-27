function solution(new_id = '...!@BaT#*..y.abcdefghijklm') {
  let str = new_id
    .toLocaleLowerCase()
    .replace(/[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi, '')
    .replace(/([.]{2,})/g, '.')
    .replace(/^[.]+|[.]+$/g, '');
  str = str ? str : 'a';

  str = str.slice(0, 15).replace(/[.]+$/, '');
  return str.length <= 2
    ? (str + str[str.length - 1].repeat(3)).slice(0, 3)
    : str;
}