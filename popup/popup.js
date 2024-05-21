const imei = () => {
    const rbi = ['01', '10', '30', '33', '35', '44', '45', '49', '50', '51', '52', '53', '54', '86', '91', '98', '99'];
    const str = [...rbi[Math.floor(Math.random() * rbi.length)], ...Array(13).fill(0).map(() => Math.floor(Math.random() * 10))];
    const lenOffset = (str.length + 1) % 2;

    const sum = str.reduce((acc, digit, pos) => {
      digit = Number(digit);
      if ((pos + lenOffset) % 2) digit = digit * 2 > 9 ? digit * 2 - 9 : digit * 2;
      return acc + digit;
    }, 0);

    str[14] = (10 - (sum % 10)) % 10;
    const imeiResult = str.join('');
    document.getElementById('imei').value = imeiResult;
    navigator.clipboard.writeText(imeiResult);
    document.getElementById('text').innerText = 'Copied to clipboard!';
}

document.getElementById('button').addEventListener('click', imei);
