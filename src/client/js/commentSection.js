const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const deleteBtn = document.querySelectorAll(".deleteBtn");

const handleDelete = async (event) => {
  event.preventDefault();
  const targetComment = event.target.parentElement;
  const { id } = targetComment.dataset;
  const videoId = videoContainer.dataset.id;
  const response = await fetch(`/api/${videoId}/comment/${id}/delete`, {
    method: `DELETE`,
  });
  if (response.status === 200) {
    targetComment.remove();
  }
};

const addComment = (text, id) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = `video__comment`;
  const icon = document.createElement(`i`);
  const span = document.createElement(`span`);
  const span2 = document.createElement(`span`);
  span2.innerText = `❌`;
  span2.addEventListener(`click`, handleDelete);
  icon.className = `fas fa-comment`;
  span.innerText = `${text}`;
  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(span2);
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  const textarea = form.querySelector("textarea");
  if (text === "") {
    return;
  }
  event.preventDefault();
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
  textarea.value = "";
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}

for (const btn of deleteBtn) {
  btn.addEventListener(`click`, handleDelete);
}
