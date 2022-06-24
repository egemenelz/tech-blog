async function deletePostFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.reload();
  } else {
    console.log(response.statusText);
  }
}

document.getElementById("delete-post").addEventListener("click", deletePostFormHandler);