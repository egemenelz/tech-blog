async function newFormHandler(event) {
  event.preventDefault();

  const title = document.getElementById('title-input').value;
  const post_url = document.getElementById('link-input').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_url
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.reload();
  } else {
    console.log(response.statusText);
  }
}

document.getElementById('create-btn').addEventListener('click', newFormHandler);
