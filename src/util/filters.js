// 截取字符串
export function subText(text, num) {
  if (text.length > num) {
    return `${text.substring(0, num)}...`;
  }
  return text;
}

// 截取主域名
export function getPrimaryDomainName(url) {
  const arrUrl = url.split('//');
  const fitst = arrUrl[0].length;
  const second = String(arrUrl[1]).indexOf('/');
  const domainNameLength = Number(fitst) + Number(second) + 2;
  const primaryDomainName = url.substring(0, domainNameLength); // stop省略，截取从start开始到结尾的所有字符
  return primaryDomainName;
}
