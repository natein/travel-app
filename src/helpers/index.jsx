export function sightGalleryDataAdapter(data = []) {
    return data.reduce((prev, current) => {
        prev.push({
            original: current.image,
            thumbnail: current.image,
            description: current.description,
            thumbnailClass: 'sight-thumbnail',
        });
        return prev;
    }, []);
}

export function getVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
}

export function averageRaiting(value = []) {
    return Math.round(
        value.reduce((avg, current, _, { length }) => {
            return avg + current.rate / length;
        }, 0),
    );
}

export const hasUser = (rating, user) => rating.filter((e) => e.username === user).length > 0;
export const findRate = (rating, user) => rating.find((e) => e.username === user).rate;
export const findUserIdx = (rating, user) => rating.findIndex((x) => x.username === user);
export const setScrollOff = (state ='hidden') => document.body.style.overflow = state;;

