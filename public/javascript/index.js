const targetDate = new Date(2021, 6, 7, 9, 0, 0, 0);

setInterval(() => {
  const now = moment()
  const dif = moment.duration(moment(targetDate).diff(now));
  const timeDif = dif._data;
  document.querySelector('#counter').innerHTML = `${timeDif.days}天${timeDif.hours}时${timeDif.minutes}分${timeDif.seconds}秒`
}, 1000);