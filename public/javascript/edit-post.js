async function editFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const post_title = document.querySelector('input[name="post-title"]').value;
  const content_text = document.querySelector('input[name="content-edit"]').value;

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      post_title,
      content_text
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard')
  } else {
    alert(response.statusText);
  }
}

document.getElementById("save-post-btn").addEventListener("click", editFormHandler);
