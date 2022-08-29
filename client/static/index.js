const button = document.querySelector('button');
const pre = document.querySelector('pre');

button.addEventListener('click', async () => {
  try {
    const response = await fetch(
      'http://192.168.0.10:8080/?tags=javascript&tags=tech',
      {
        headers: {
          Authorization: 'abcd',
        },
      },
    );
    const data = await response.json();

    const msg = document.createElement('code');
    msg.textContent = `${JSON.stringify(data)}\n`;
    pre.appendChild(msg);
  } catch (error) {
    console.error(error);
  }
});
