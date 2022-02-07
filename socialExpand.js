const twitter = document.getElementById("socialTwitter");
var socialTwitterTimeout = 0;

twitter.addEventListener("mouseover", addSocialTwitterHover);
twitter.addEventListener("mouseleave", timerSocialTwitterHover);

function addSocialTwitterHover() {
    clearTimeout(socialTwitterTimeout);
    socialTwitterTimeout = 0;
    twitter.classList.remove("socialsDeactive");
    twitter.classList.add("socialsActive");
}

function timerSocialTwitterHover() {
    socialTwitterTimeout = setTimeout(removeSocialTwitterHover, 1500);
}
function removeSocialTwitterHover() {
        twitter.classList.remove("socialsActive");
        twitter.classList.add("socialsDeactive");
}


const discord = document.getElementById("socialDiscord");
var socialDiscordTimeout = 0;

discord.addEventListener("mouseover", addSocialDiscordHover);
discord.addEventListener("mouseleave", timerSocialDiscordHover);

function addSocialDiscordHover() {
    clearTimeout(socialDiscordTimeout);
    socialDiscordTimeout = 0;
    discord.classList.remove("socialsDeactive");
    discord.classList.add("socialsActive");
}

function timerSocialDiscordHover() {
    socialDiscordTimeout = setTimeout(removeSocialDiscordHover, 1500);
}
function removeSocialDiscordHover() {
        discord.classList.remove("socialsActive");
        discord.classList.add("socialsDeactive");
}


const youtube = document.getElementById("socialYoutube");
var socialYoutubeTimeout = 0;

youtube.addEventListener("mouseover", addSocialYoutubeHover);
youtube.addEventListener("mouseleave", timerSocialYoutubeHover);

function addSocialYoutubeHover() {
    clearTimeout(socialYoutubeTimeout);
    socialDiscordTimeout = 0;
    youtube.classList.remove("socialsDeactive");
    youtube.classList.add("socialsActive");
}

function timerSocialYoutubeHover() {
    socialYoutubeTimeout = setTimeout(removeSocialYoutubeHover, 1500);
}
function removeSocialYoutubeHover() {
        youtube.classList.remove("socialsActive");
        youtube.classList.add("socialsDeactive");
}


