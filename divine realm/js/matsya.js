document.addEventListener('DOMContentLoaded', () => {

  const watchContainer = document.getElementById('watch-cards');
  const listenContainer = document.getElementById('listen-cards');
  const readContainer = document.getElementById('read-cards');

  // Resources with file URLs
  const resources = [
    {
      type: 'video',
      title: 'Matsya Purana - Creation Story',
      desc: 'Watch the story of creation from Matsya Purana.',
      url: '/divine realm/uploads/matsya-video.mp4'
    },
    {
      type: 'audio',
      title: 'Matsya Purana Narration',
      desc: 'Listen to the narration of Matsya Purana.',
      url: '/divine realm/uploads/matsya-audio.mp3'
    },
    {
      type: 'text',
      title: 'Matsya Purana Script',
      desc: 'Read the Matsya Purana content online.',
      url: '/divine realm/uploads/matsya-text.html'
    }
  ];

  resources.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.cursor = 'pointer'; // clickable

    const title = document.createElement('h3');
    title.textContent = item.title;
    card.appendChild(title);

    const desc = document.createElement('p');
    desc.textContent = item.desc;
    card.appendChild(desc);

    // Redirect on click
    card.addEventListener('click', () => {
      window.open(item.url, '_blank'); // open in new tab
    });

    // Append to the right section
    if(item.type === 'video') {
      watchContainer.appendChild(card);
    } else if(item.type === 'audio') {
      listenContainer.appendChild(card);
    } else if(item.type === 'text') {
      readContainer.appendChild(card);
    }
  });

});
