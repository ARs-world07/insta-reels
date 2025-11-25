const reels = [
  {
    username: "thefoodhub",
    likeCount: "12k",
    isLiked: false,
    commentCount: 320,
    caption: "Street food hits different! 😋🔥",
    video: "/reels/video1.mp4",
    userprofile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    shareCount: 140,
    isFollowed: true
  },
  {
    username: "travel_with_anu",
    likeCount: 540,
    isLiked: true,
    commentCount: 210,
    caption: "Sunset at the mountains 🌄✨",
    video: "/reels/video2.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 98,
    isFollowed: false
  },
  {
    username: "tech_insights",
    likeCount: 980,
    isLiked: false,
    commentCount: 450,
    caption: "AI will change everything 🤖🔥",
    video: "/reels/video3.mp4",
    userprofile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    shareCount: 300,
    isFollowed: true
  },
  {
    username: "fitness_vibes",
    likeCount: 720,
    isLiked: true,
    commentCount: 180,
    caption: "Morning workout routine 💪🌞",
    video: "/reels/video4.mp4",
    userprofile: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    shareCount: 120,
    isFollowed: false
  },
  {
    username: "daily_coding",
    likeCount: 410,
    isLiked: false,
    commentCount: 102,
    caption: "JavaScript tips you should know 💡",
    video: "/reels/video5.mp4",
    userprofile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 66,
    isFollowed: true
  },
  {
    username: "fashionqueenn",
    likeCount: 150,
    isLiked: true,
    commentCount: 680,
    caption: "Outfit inspo 🤍✨",
    video: "/reels/video6.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 500,
    isFollowed: false
  },
  {
    username: "petworld",
    likeCount: 230,
    isLiked: false,
    commentCount: 900,
    caption: "Cutest puppy today 🐶❤️",
    video: "/reels/video7.mp4",
    userprofile: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    shareCount: 760,
    isFollowed: true
  },
  {
    username: "carz_life",
    likeCount: 870,
    isLiked: true,
    commentCount: 260,
    caption: "Cold start of this beast 😍🔥",
    video: "/reels/video8.mp4",
    userprofile: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    shareCount: 300,
    isFollowed: false
  },
  {
    username: "dancefactory",
    likeCount: 900,
    isLiked: false,
    commentCount: 350,
    caption: "New choreo! 💃✨",
    video: "/reels/video9.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 210,
    isFollowed: true
  },
  {
    username: "codingwithakash",
    likeCount: 690,
    isLiked: true,
    commentCount: 190,
    caption: "How to center a div 😭🔥",
    video: "/reels/video10.mp4",
    userprofile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    shareCount: 120,
    isFollowed: true
  },
  {
    username: "indian_spices",
    likeCount: 520,
    isLiked: false,
    commentCount: 140,
    caption: "Masala chai recipe ☕❤️",
    video: "/reels/video11.mp4",
    userprofile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    shareCount: 80,
    isFollowed: false
  },
  {
    username: "nature_clicks",
    likeCount: 980,
    isLiked: true,
    commentCount: 530,
    caption: "Forest mornings 🌲🌫️",
    video: "/reels/video12.mp4",
    userprofile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 410,
    isFollowed: true
  },
  {
    username: "funny_life",
    likeCount: 260,
    isLiked: false,
    commentCount: 120,
    caption: "Try not to laugh challenge 😂🔥",
    video: "/reels/video13.mp4",
    userprofile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    shareCount: 100,
    isFollowed: false
  },
  {
    username: "music_mania",
    likeCount: 800,
    isLiked: true,
    commentCount: 300,
    caption: "Mood booster track 🎶✨",
    video: "/reels/video14.mp4",
    userprofile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    shareCount: 260,
    isFollowed: false
  },
  {
    username: "artsoul",
    likeCount: 400,
    isLiked: false,
    commentCount: 110,
    caption: "Sketch of the day ✏️❤️",
    video: "/reels/video15.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 55,
    isFollowed: true
  }
];

var allReels = document.querySelector('.all-reels')
var likeIcon = document.querySelector('.like-icon')

// document.querySelector('video').addEventListener ("dblclick", function(){
//     love.style.opacity = 1
//     love.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)'

//      setTimeout(function(){
//         love.style.opacity = 0
//     },850)

//     setTimeout(function(){
//         love.style.transform = 'translate(-50%, -50%) scale(0) rotate(-60deg)'
//     },1100)
    
   
// })
// document.querySelector('.like-icon').addEventListener ("click", function(){

//     love.style.opacity = 1
//     love.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)'

//      setTimeout(function(){
//         love.style.opacity = 0
//     },850)

//     setTimeout(function(){
//         love.style.transform = 'translate(-50%, -50%) scale(0) rotate(-60deg)'
//     },1100)
    
   
// })


var sum = ''
reels.forEach(function(elem){
    sum += `<div class="reel">
                    <video src="${elem.video}" autoplay muted loop></video>
                    <div id="like">
                        <i class="ri-heart-3-fill"></i>
                    </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}" alt="">
                            <h3>${elem.username}</h3>
                            <button>${elem.isFollowed?'unfollow':'follow'}</button>
                        </div>
                        <h3>${elem.caption}</h6>
                    </div>
                    <div class="right">
                        <div class="icon like-icon">
                            <i class="${elem.isLiked?'ri-heart-3-line':'ri-heart-3-fill'}"></i>
                            <p>${elem.likeCount}</p>
                        </div>
                        <div class="icon comment-icon">
                            <i class="ri-chat-3-line"></i>
                            <p>${elem.commentCount}</p>
                        </div>
                        <div class="icon share-icon">
                            <i class="ri-share-forward-line"></i>
                            <p>${elem.shareCount}</p>
                        </div>
                        <div class="icon menu-icon">
                            <i class="ri-more-2-fill"></i>
                        </div>

                    </div>
                </div>`
    allReels.innerHTML = sum
    


    
})
