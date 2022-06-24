async function deleteCommentFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    const response = await fetch(`/api/comments/`, {
        method: "DELETE",
    });

    if (response.ok) {
        document.location.reload();
    } else {
        console.log(response.statusText);
    }
}



document.getElementById("delete-comment").addEventListener('click', deleteCommentFormHandler);