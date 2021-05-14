// New Post Form Handler
async function newFormHandler(event) {
    event.preventDefault();

    // Get the post title and post text from the form
    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('textarea[name="post-text"]').value;

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // If the response is okay, reload the page, showing the newest post now in the user's post list
    if (response.ok) {
      document.location.replace('/dashboard');
      // otherwise, display the error
    } else {
      alert(response.statusText);
    }
  }
  
  // Event Listener for the new post submit button
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);