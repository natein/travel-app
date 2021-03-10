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

    return (match && match[2].length === 11)
      ? match[2]
      : null;
}