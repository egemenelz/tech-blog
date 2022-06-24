async function newFormHandler(event) {
  event.preventDefault();

  const title = document.getElementById('title-input').value;
  const content = document.getElementById('content-input').value;
  const post_url = document.getElementById('link-input').value;

  if (title && post_url) {
    const response = await fetch(`/api/posts/`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
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


}

document.getElementById('create-btn').addEventListener('click', newFormHandler);
