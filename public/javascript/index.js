const targetDate = new Date(2021, 6, 7, 9, 0, 0, 0);

setInterval(() => {
  const now = moment()
  const dif = moment.duration(moment(targetDate).diff(now));
  const timeDif = dif._data;
  document.querySelector('#counter').innerHTML = `${timeDif.days}天${timeDif.hours}时${timeDif.minutes}分${timeDif.seconds}秒`
}, 1000);



function loadWisdom() {
  fetch('https://goquotes-api.herokuapp.com/api/v1/random/1?type=tag&val=motivational')
    .then(response => {
      response.json()
              .then((data) => {
                const author = data.quotes[0].author;
                const quote = data.quotes[0].text;
                document.querySelector('#wisdom').innerHTML = `${quote} <br/><br/> ${author}`
              });
    })
}