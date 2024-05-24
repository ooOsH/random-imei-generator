const imei = () => {
  let pos;
  let str = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
  let sum = 0;
  let final_digit = 0;
  let t = 0;
  let len_offset = 0;
  let len = 15;
  // let issuer;
  let rbi = ["01", "10", "30", "33", "35", "44", "45", "49", "50", "51", "52", "53", "54", "86", "91", "98", "99"];
  let arr = rbi[Math.floor(Math.random() * rbi.length)].split("");
  str[0] = Number(arr[0]);
  str[1] = Number(arr[1]);
  pos = 2;
  while (pos < len - 1) {
      str[pos++] = Math.floor(Math.random() * 10) % 10;
  }
  len_offset = (len + 1) % 2;
  for (pos = 0; pos < len - 1; pos++) {
      if ((pos + len_offset) % 2) {
          t = str[pos] * 2;
          if (t > 9) {
              t -= 9;
          }
          sum += t;
      } else {
          sum += str[pos];
      }
  }
  final_digit = (10 - (sum % 10)) % 10;
  str[len - 1] = final_digit;
  t = str.join('');
  t = t.substr(0, len);
  document.getElementById('imei').value = t;
  navigator.clipboard.writeText(t);
  document.getElementById('text').innerText = 'Copied to clipboard!';
}

document.getElementById('button').addEventListener('click', imei);
