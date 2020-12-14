export function isPlaying(audio: HTMLAudioElement)
{
    if (audio.paused)
        return false;
    return !!audio.currentTime;
}