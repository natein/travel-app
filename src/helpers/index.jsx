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